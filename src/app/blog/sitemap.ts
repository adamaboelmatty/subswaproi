import { MetadataRoute } from 'next'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

async function getAllBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'src/app/blog/content/blog')
  const files = await fs.readdir(postsDirectory)
  
  const posts = await Promise.all(files.map(async (filename) => {
    if (!filename.endsWith('.md')) return null
    
    const slug = filename.replace('.md', '')
    const filePath = path.join(postsDirectory, filename)
    const fileContents = await fs.readFile(filePath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug,
      date: data.date,
    }
  }))

  return posts.filter(Boolean)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts()
  const baseUrl = 'https://subswaproi.com'

  const blogUrls = posts
    .filter((post): post is { slug: string; date: string } => post !== null)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogUrls,
  ]
}