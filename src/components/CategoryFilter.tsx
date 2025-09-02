import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/books';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  bookCounts: Record<string, number>;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
  bookCounts
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">Categorías</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className="relative"
          >
            {category}
            {bookCounts[category] > 0 && (
              <Badge
                variant="secondary"
                className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {bookCounts[category]}
              </Badge>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;