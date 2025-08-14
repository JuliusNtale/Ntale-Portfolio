import { NextResponse } from 'next/server';

// Configure Edge Runtime for Cloudflare Pages
export const runtime = 'edge';

const GITHUB_USERNAME = 'JuliusNtale';

export async function GET(request: Request) {
  try {
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Julius-Ntale-Portfolio',
    };

    // Note: In Edge Runtime, environment variables may be limited
    // For Cloudflare Pages, set GITHUB_TOKEN as an environment variable in the dashboard
    try {
      // @ts-ignore - Edge Runtime environment access
      const githubToken = process.env.GITHUB_TOKEN;
      if (githubToken) {
        headers['Authorization'] = `token ${githubToken}`;
        console.log('Using GitHub token for enhanced API access');
      } else {
        console.log('No GitHub token found, using public API with rate limits');
      }
    } catch (e) {
      console.log('Environment variables not available in this runtime, using public API');
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      { 
        headers,
        // Edge Runtime compatible caching
        cache: 'force-cache'
      }
    );

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} - ${response.statusText}`);
      return NextResponse.json(
        { error: `GitHub API error: ${response.status}` }, 
        { status: response.status }
      );
    }

    const repos = await response.json();
    
    // Filter out forks and focus on original repositories
    const filteredRepos = repos
      .filter((repo: any) => !repo.fork && !repo.archived)
      .sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 12); // Limit to 12 repos for performance

    // Transform the data to include only what we need
    const transformedRepos = filteredRepos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "No description available",
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      watchers: repo.watchers_count,
      updated: repo.updated_at,
      githubUrl: repo.html_url,
      homepage: repo.homepage,
      topics: repo.topics || [],
    }));

    return NextResponse.json(transformedRepos);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' }, 
      { status: 500 }
    );
  }
}
