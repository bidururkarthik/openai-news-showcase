import { BlogCard } from "./BlogCard";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: Date;
  readTime: string;
  image: string;
  featured?: boolean;
}

interface BlogGridProps {
  posts: BlogPost[];
  viewMode: 'grid' | 'list';
}

export const BlogGrid = ({ posts, viewMode }: BlogGridProps) => {
  const isGrid = viewMode === 'grid';
  
  return (
    <div className={`
      ${isGrid 
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr' 
        : 'flex flex-col gap-6'
      }
    `}>
      {posts.map((post) => (
        <BlogCard 
          key={post.id} 
          post={post} 
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};