import { Button } from "@/components/ui/button";
import { Search, Grid, List } from "lucide-react";
import { Input } from "@/components/ui/input";

interface BlogHeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const categories = [
  'All',
  'Electric Bikes',
  'Battery Tips',
  'Charging Stations',
  'Maintenance',
  'New Launches'
];

export const BlogHeader = ({
  activeCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
  searchQuery,
  onSearchChange
}: BlogHeaderProps) => {
  return (
    <div className="space-y-8">
      {/* Hero Title */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-light tracking-tight text-foreground">
          News
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest insights, reviews, and developments in electric bike technology
        </p>
      </div>

      {/* Navigation and Controls */}
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        {/* Category Navigation */}
        <nav className="flex flex-wrap gap-1">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "ghost"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className="text-sm font-medium h-9 px-4 rounded-full"
            >
              {category}
            </Button>
          ))}
        </nav>

        {/* Search and View Controls */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 w-64 h-9 rounded-full border-border/50 bg-background"
            />
          </div>
          
          <div className="flex items-center border border-border/50 rounded-full p-1">
            <Button
              variant={viewMode === 'grid' ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewModeChange('grid')}
              className="h-7 w-7 p-0 rounded-full"
            >
              <Grid className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant={viewMode === 'list' ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewModeChange('list')}
              className="h-7 w-7 p-0 rounded-full"
            >
              <List className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};