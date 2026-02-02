import Link from 'next/link';
import { PostMeta, CATEGORIES } from '@/lib/posts';

export default function PostCard({ post }: { post: PostMeta }) {
  const category = CATEGORIES[post.category];

  return (
    <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary/10 to-purple/10 flex items-center justify-center">
        <span className="text-4xl">{category?.icon || '📄'}</span>
      </div>

      <div className="p-5">
        {/* Category badge */}
        <Link
          href={`/category/${post.category}`}
          className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3 hover:bg-primary/20 transition-colors"
        >
          {category?.name || post.category}
        </Link>

        {/* Title */}
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.description}</p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </article>
  );
}
