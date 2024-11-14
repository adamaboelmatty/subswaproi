import { Metadata } from 'next'
import path from 'path'
import fs from 'fs/promises'
import matter from 'gray-matter'

interface MetadataProps {
  params: { slug: string }
}

async function getBlogPost(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/app/blog/content/blog')
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = await fs.readFile(fullPath, 'utf8')
    return matter(fileContents)
  } catch (error) {
    return null
  }
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  if (!post) return {}
  
  return {
    title: `${post.data.title} | SubSwapROI`,
    description: post.data.excerpt,
    keywords: post.data.keywords,
    openGraph: {
      title: post.data.title,
      description: post.data.excerpt,
      type: 'article',
      publishedTime: post.data.date,
      authors: [post.data.author?.name],
      url: `https://subswaproi.com/blog/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.data.title,
      description: post.data.excerpt,
    }
  }
}