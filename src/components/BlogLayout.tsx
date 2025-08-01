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
      {/* Simple header with logo only */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-xl font-semibold text-foreground">eBike News</h1>
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
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <h3 className="text-lg font-semibold text-foreground">eBike News</h3>
            
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Electric Bikes</a>
              <a href="#" className="hover:text-foreground transition-colors">Battery Tips</a>
              <a href="#" className="hover:text-foreground transition-colors">Charging Stations</a>
              <a href="#" className="hover:text-foreground transition-colors">Maintenance</a>
              <a href="#" className="hover:text-foreground transition-colors">New Launches</a>
            </div>
            
            {/* Legal Links */}
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