"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const BlogPostPage = () => {
  const params = useParams();
  // Using slug for future dynamic content loading
  // eslint-disable-next-line no-unused-vars
  const slug = params.slug;

  // Mock blog post data - in a real app, this would be fetched from CMS/API
  // using the slug: fetch(`/api/posts/${slug}`)
  const blogPost = {
    title: "Building Scalable React Applications with Next.js 14",
    excerpt: "Explore the latest features in Next.js 14 and learn how to build performant, scalable React applications with the new App Router.",
    category: "Frontend",
    date: "2024-01-15",
    readTime: "8 min read",
    author: {
      name: "Julius Ntale",
      avatar: "/images/profile.jpg",
      bio: "Full-stack developer passionate about React, Next.js, and modern web technologies."
    },
    content: `
# Introduction

Next.js 14 brings significant improvements to the React development experience, particularly with the enhanced App Router and Server Components. In this comprehensive guide, we'll explore how to leverage these features to build scalable, performant applications.

## Key Features of Next.js 14

### 1. Enhanced App Router

The App Router in Next.js 14 provides a more intuitive way to structure your application:

- **File-based routing**: Organize your pages using the file system
- **Nested layouts**: Create consistent layouts across route segments
- **Loading and error states**: Built-in support for loading and error UI

### 2. Server Components by Default

React Server Components are now the default in Next.js 14:

\`\`\`jsx
// This component runs on the server by default
export default function ServerComponent() {
  return (
    <div>
      <h1>This renders on the server</h1>
    </div>
  );
}
\`\`\`

### 3. Improved Performance

Next.js 14 includes several performance optimizations:

- **Turbopack**: Faster bundling with Turbopack (in beta)
- **Image optimization**: Enhanced image optimization with the Image component
- **Code splitting**: Automatic code splitting for better loading times

## Building a Scalable Architecture

When building large applications, consider these architectural patterns:

### Component Organization

\`\`\`
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   └── sections/
└── lib/
    ├── utils.ts
    └── data.ts
\`\`\`

### State Management

For complex applications, consider using:

- **Zustand**: Lightweight state management
- **React Query**: Server state management
- **Context API**: For component tree state

## Best Practices

1. **Use TypeScript**: Type safety is crucial for large applications
2. **Optimize Images**: Always use the Next.js Image component
3. **Implement proper error boundaries**: Handle errors gracefully
4. **Test your components**: Write comprehensive tests

## Conclusion

Next.js 14 provides an excellent foundation for building scalable React applications. By leveraging Server Components, the App Router, and following best practices, you can create applications that are both performant and maintainable.

The future of React development is bright, and Next.js 14 is leading the way in making it easier to build great user experiences.
    `,
    tags: ["Next.js", "React", "JavaScript", "Web Development", "Performance"],
    relatedPosts: [
      {
        title: "The Future of Web Development: React Server Components",
        slug: "future-web-development-react-server-components"
      },
      {
        title: "TypeScript Best Practices for Large Applications",
        slug: "typescript-best-practices-large-applications"
      }
    ]
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <motion.header
            className="mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {blogPost.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(blogPost.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{blogPost.readTime}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>{blogPost.author.name}</span>
              </div>
              <button className="flex items-center hover:text-primary transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.article
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="whitespace-pre-wrap leading-relaxed">
              {blogPost.content}
            </div>
          </motion.article>

          {/* Tags */}
          <motion.div
            className="mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            className="bg-card border border-border rounded-lg p-6 mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-2xl font-bold">
                {blogPost.author.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{blogPost.author.name}</h3>
                <p className="text-muted-foreground">{blogPost.author.bio}</p>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPost.relatedPosts.map((post, index) => (
                <Link
                  key={index}
                  href={`/blog/${post.slug}`}
                  className="block bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold mb-2 hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <span className="text-sm text-muted-foreground">Read more →</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostPage;
