import matter from 'gray-matter';
import { marked } from 'marked';
import { Project } from '@/types';
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';

const projectsDirectory = join(process.cwd(), 'content/projects');

export async function getProjectSlugs(): Promise<string[]> {
  try {
    const files = await readdir(projectsDirectory);
    return files.filter(file => file.endsWith('.md')).map(file => file.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading projects directory:', error);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const fullPath = join(projectsDirectory, `${slug}.md`);
    const fileContents = await readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const project: Project = {
      id: slug,
      title: data.title,
      description: data.description,
      longDescription: await marked(content),
      technologies: data.technologies || [],
      image: data.image,
      images: data.images || [data.image],
      githubUrl: data.github,
      liveUrl: data.live,
      featured: data.featured || false,
      category: data.category || 'web',
      startDate: data.startDate || data.date,
      endDate: data.endDate,
      status: data.status || 'completed',
      highlights: data.highlights || [],
      challenges: data.challenges || [],
      lessons: data.lessons || []
    };

    return project;
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const slugs = await getProjectSlugs();
    const projects = await Promise.all(
      slugs.map(slug => getProjectBySlug(slug))
    );
    
    return projects
      .filter((project): project is Project => project !== null)
      .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
  } catch (error) {
    console.error('Error getting all projects:', error);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter(project => project.featured);
}
