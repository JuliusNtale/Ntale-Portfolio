import BlogPostClient from "./BlogPostClient";

// Mock blog posts data
const blogPosts = {
  "building-scalable-react-nextjs": {
    title: "Building Scalable React Applications with Next.js 14",
    excerpt: "Explore the latest features in Next.js 14 and learn how to build performant, scalable React applications with the new App Router.",
    category: "Frontend",
    date: "2024-01-15",
    readTime: "8 min read",
    author: {
      name: "Julius Ntale",
      avatar: "/Julius.png",
      bio: "Full-stack developer passionate about React, Next.js, and modern web technologies."
    },
    content: `# Introduction

Next.js 14 brings significant improvements to the React development experience, particularly with the enhanced App Router and Server Components. In this comprehensive guide, we'll explore how to leverage these features to build scalable, performant applications.

## Key Features of Next.js 14

### 1. Enhanced App Router
The App Router in Next.js 14 provides a more intuitive way to structure your application.

### 2. Server Components by Default
React Server Components are now the default in Next.js 14.

### 3. Improved Performance
Next.js 14 includes several performance optimizations.

## Best Practices

1. Use TypeScript for type safety
2. Optimize Images with Next.js Image component
3. Implement proper error boundaries
4. Test your components thoroughly

## Conclusion
Next.js 14 provides an excellent foundation for building scalable React applications.`,
    tags: ["Next.js", "React", "JavaScript", "Web Development", "Performance"],
    relatedPosts: [
      {
        title: "The Future of Web Development: React Server Components",
        slug: "future-web-development-react-server-components"
      }
    ]
  }
};

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPostPage({ params }) {
  const blogPost = blogPosts[params.slug] || {
    title: "Blog Post Not Found",
    excerpt: "The requested blog post could not be found.",
    category: "General",
    date: new Date().toISOString().split('T')[0],
    readTime: "1 min read",
    author: {
      name: "Julius Ntale",
      avatar: "/Julius.png",
      bio: "Full-stack developer"
    },
    content: "This blog post doesn't exist yet. Check back soon for more content!",
    tags: ["General"],
    relatedPosts: []
  };

  return <BlogPostClient blogPost={blogPost} />;
}
