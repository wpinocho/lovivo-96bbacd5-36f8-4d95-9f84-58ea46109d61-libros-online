import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FilterOptions } from '@/types/book';
import { Filter, X } from 'lucide-react';

interface AdvancedFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onResetFilters: () => void;
  categories: string[];
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({
  filters,
  onFiltersChange,
  onResetFilters,
  categories
}) => {
  const handlePriceChange = (values: number[]) => {
    onFiltersChange({
      ...filters,
      minPrice: values[0],
      maxPrice: values[1]
    });
  };

  const handleRatingChange = (values: number[]) => {
    onFiltersChange({
      ...filters,
      minRating: values[0]
    });
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="flex items-center space-x-2">
          <Filter className="w-5 h-5" />
          <span>Filtros</span>
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={onResetFilters}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4 mr-1" />
          Limpiar
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Categoría */}
        <div className="space-y-2">
          <Label>Categoría</Label>
          <Select
            value={filters.category}
            onValueChange={(value) => onFiltersChange({ ...filters, category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar categoría" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Rango de Precio */}
        <div className="space-y-3">
          <Label>Rango de Precio</Label>
          <div className="px-2">
            <Slider
              value={[filters.minPrice, filters.maxPrice]}
              onValueChange={handlePriceChange}
              max={50}
              min={0}
              step={1}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>

        {/* Rating Mínimo */}
        <div className="space-y-3">
          <Label>Rating Mínimo</Label>
          <div className="px-2">
            <Slider
              value={[filters.minRating]}
              onValueChange={handleRatingChange}
              max={5}
              min={0}
              step={0.1}
              className="w-full"
            />
          </div>
          <div className="text-sm text-muted-foreground">
            {filters.minRating.toFixed(1)} estrellas o más
          </div>
        </div>

        {/* Ordenar por */}
        <div className="space-y-2">
          <Label>Ordenar por</Label>
          <Select
            value={filters.sortBy}
            onValueChange={(value: any) => onFiltersChange({ ...filters, sortBy: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="title">Título</SelectItem>
              <SelectItem value="price">Precio</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="newest">Más recientes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Orden */}
        <div className="space-y-2">
          <Label>Orden</Label>
          <Select
            value={filters.sortOrder}
            onValueChange={(value: any) => onFiltersChange({ ...filters, sortOrder: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Ascendente</SelectItem>
              <SelectItem value="desc">Descendente</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Solo en stock */}
        <div className="flex items-center space-x-2">
          <Switch
            id="in-stock"
            checked={filters.inStockOnly}
            onCheckedChange={(checked) => onFiltersChange({ ...filters, inStockOnly: checked })}
          />
          <Label htmlFor="in-stock">Solo productos en stock</Label>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvancedFilters;