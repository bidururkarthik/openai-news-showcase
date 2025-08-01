import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

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

interface BlogCardProps {
  post: BlogPost;
  viewMode: 'grid' | 'list';
}

export const BlogCard = ({ post, viewMode }: BlogCardProps) => {
  const isGrid = viewMode === 'grid';
  
  return (
    <Card className={`group overflow-hidden border-border/50 bg-card hover:shadow-lg transition-all duration-300 ${
      isGrid ? 'h-full' : 'h-auto'
    } ${post.featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className={`${isGrid ? 'flex flex-col h-full' : 'flex flex-col md:flex-row'}`}>
        {/* Image */}
        <div className={`relative overflow-hidden ${
          isGrid 
            ? post.featured 
              ? 'aspect-[2/1]' 
              : 'aspect-[4/3]'
            : 'md:w-80 md:flex-shrink-0 aspect-[4/3] md:aspect-[3/2]'
        }`}>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <CardContent className={`p-6 ${isGrid ? 'flex-1 flex flex-col' : 'flex-1'}`}>
          <div className="flex items-center gap-3 mb-4">
            <Badge 
              variant="secondary" 
              className="bg-[hsl(var(--blog-category-bg))] text-[hsl(var(--blog-category-text))] hover:bg-[hsl(var(--blog-category-bg))] text-xs font-medium border-0"
            >
              {post.category}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(post.date, { addSuffix: true })}
            </span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{post.readTime}</span>
          </div>

          <div className={isGrid ? 'flex-1 flex flex-col' : ''}>
            <h3 className={`font-semibold leading-tight text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-3 ${
              post.featured ? 'text-2xl mb-4' : 'text-lg mb-3'
            }`}>
              {post.title}
            </h3>
            
            <p className={`text-muted-foreground leading-relaxed ${
              post.featured ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'
            } ${isGrid ? 'flex-1' : ''}`}>
              {post.excerpt}
            </p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};