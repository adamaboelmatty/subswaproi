import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
}

async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'src/app/blog/content/blog');
  
  try {
    const files = await fs.readdir(postsDirectory);
    
    const posts = await Promise.all(files.map(async (filename) => {
      if (!filename.endsWith('.md')) return null;
      
      const slug = filename.replace('.md', '');
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        readTime: data.readTime,
      };
    }));

    return posts.filter(Boolean).sort((a, b) => {
      if (!a || !b) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export default async function BlogDirectory() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-8 py-12">
      <Link href="/">
        <Button 
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg transform transition-all duration-200 hover:scale-105 z-50 flex items-center gap-2"
        >
          <Calculator className="w-4 h-4" />
          Try SubSwapROI Calculator
        </Button>
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            SubSwapROI Blog
          </h1>
          <p className="text-gray-600 text-lg">
            Discover insights and strategies for optimizing your subscriptions and building wealth.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {blogPosts.map((post) => (
            post && (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <Card className="transform transition-all duration-300 hover:shadow-lg bg-white border border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime} min read</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-emerald-700 mb-3 hover:text-emerald-600">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-emerald-600 font-medium group">
                      Read More 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
}