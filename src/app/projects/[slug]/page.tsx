import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, Calendar, ArrowLeft } from 'lucide-react';
import { featuredProjects } from '@/lib/data';

// This would be replaced with actual dynamic data fetching
async function getProject(slug: string) {
  const project = featuredProjects.find(p => p.id === slug);
  return project || null;
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          {/* Project Header */}
          <div className="space-y-8 mb-12">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                  {project.category.toUpperCase()}
                </span>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {new Date(project.startDate).getFullYear()}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-4">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </Link>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.longDescription }}
                />
              </div>

              {project.highlights.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Project Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="capitalize">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="capitalize">{project.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Start Date:</span>
                    <span>{new Date(project.startDate).toLocaleDateString()}</span>
                  </div>
                  {project.endDate && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">End Date:</span>
                      <span>{new Date(project.endDate).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
