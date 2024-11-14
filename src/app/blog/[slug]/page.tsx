import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Clock, Calculator } from "lucide-react";
import Link from "next/link";
import Markdown from 'react-markdown';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

async function getBlogPost(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/app/blog/content/blog');
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      metadata: data,
      content,
    };
  } catch (error) {
    return null;
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-white px-4 md:px-8">
      <Link href="/">
        <Button 
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg transform transition-all duration-200 hover:scale-105 z-50 flex items-center gap-2"
        >
          <Calculator className="w-4 h-4" />
          Try SubSwapROI Calculator
        </Button>
      </Link>

      <article className="max-w-4xl mx-auto py-12">
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Clock className="w-4 h-4 mr-2" />
          <span>{post.metadata.readTime} min read</span>
          <span className="mx-4">•</span>
          <span>{new Date(post.metadata.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>

        <h1 className="text-3xl font-bold text-emerald-700 mb-8">
          {post.metadata.title}
        </h1>

        <div className="prose prose-lg prose-emerald max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex items-center">
            <img 
              src="/api/placeholder/100/100" 
              alt={post.metadata.author?.name || "Author"} 
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">{post.metadata.author?.name || "Author"}</h3>
              <p className="text-gray-600">
                {post.metadata.author?.bio || ""}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}