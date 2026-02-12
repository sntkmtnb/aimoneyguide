import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  image?: string;
  readingTime: string;
  featured?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  
  const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.mdx'));
  
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      category: data.category || 'uncategorized',
      tags: data.tags || [],
      author: data.author || 'NEWHELLO',
      image: data.image || undefined,
      readingTime: stats.text,
      featured: data.featured || false,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    category: data.category || 'uncategorized',
    tags: data.tags || [],
    author: data.author || 'NEWHELLO',
    image: data.image || undefined,
    readingTime: stats.text,
    featured: data.featured || false,
    content,
  };
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter(p => p.category === category);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map(p => p.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set(posts.flatMap(p => p.tags));
  return Array.from(tags);
}

export const CATEGORIES: Record<string, { name: string; description: string; icon: string }> = {
  'ai-side-hustles': {
    name: 'AI Side Hustle Guides',
    description: 'Step-by-step guides to start making money with AI tools',
    icon: '💰',
  },
  'ai-tools': {
    name: 'AI Tool Reviews',
    description: 'Honest reviews and comparisons of the best AI tools',
    icon: '🛠️',
  },
  'tutorials': {
    name: 'Tutorials',
    description: 'Hands-on walkthroughs to build your AI income',
    icon: '📖',
  },
  'passive-income': {
    name: 'AI Passive Income',
    description: 'Build automated income streams with AI',
    icon: '🔄',
  },
  'income-reports': {
    name: 'Income Reports',
    description: 'Real income breakdowns and case studies',
    icon: '📊',
  },
  'news': {
    name: 'AI Money News',
    description: 'Latest updates affecting AI side hustlers',
    icon: '📰',
  },
};
