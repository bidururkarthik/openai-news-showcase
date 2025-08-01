import { useState, useMemo } from "react";
import { BlogHeader } from "./BlogHeader";
import { BlogGrid } from "./BlogGrid";
import { blogPosts } from "@/data/blogPosts";

export const BlogLayout = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;
    
    // Filter by category
    if (activeCategory !== 'All') {
      posts = posts.filter(post => post.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }
    
    return posts;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with navigation */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-semibold text-foreground">ModernBlog</h1>
              <nav className="hidden md:flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
                <a href="#" className="text-foreground font-medium">News</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <BlogHeader
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <div className="mt-12">
          {filteredPosts.length > 0 ? (
            <BlogGrid posts={filteredPosts} viewMode={viewMode} />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-foreground">ModernBlog</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              A modern minimalist platform for sharing insights and innovations in technology and artificial intelligence.
            </p>
            <div className="flex justify-center space-x-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};