import React from 'react';
import { Book } from '@/types/book';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Adding book to cart from BookCard:', book.title);
    addToCart(book);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInWishlist(book.id)) {
      removeFromWishlist(book.id);
    } else {
      addToWishlist(book);
    }
  };

  const handleViewDetails = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer">
      <div className="relative overflow-hidden" onClick={handleViewDetails}>
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-64 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {book.featured && (
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              ⭐ Destacado
            </Badge>
          )}
          {book.originalPrice && (
            <Badge className="bg-red-500 hover:bg-red-600">
              -{Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}%
            </Badge>
          )}
          {!book.inStock && (
            <Badge className="bg-gray-500">
              Agotado
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white transition-all duration-200"
          onClick={handleWishlistToggle}
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              isInWishlist(book.id) 
                ? 'fill-red-500 text-red-500' 
                : 'text-gray-600 hover:text-red-500'
            }`} 
          />
        </Button>

        {/* Overlay con botón de vista rápida */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <Button
            variant="secondary"
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={(e) => {
              e.stopPropagation();
              handleViewDetails();
            }}
          >
            <Eye className="w-4 h-4 mr-2" />
            Ver detalles
          </Button>
        </div>
      </div>
      
      <CardContent className="flex-1 p-4" onClick={handleViewDetails}>
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {book.category}
          </Badge>
        </div>
        
        <h3 className="font-bold text-lg mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{book.rating}</span>
          </div>
          <span className="ml-2 text-sm text-muted-foreground">
            ({book.reviews} reseñas)
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
          {book.description}
        </p>

        {book.pages && (
          <p className="text-xs text-muted-foreground mb-2">
            {book.pages} páginas • {book.language}
          </p>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="w-full">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">
                ${book.price.toFixed(2)}
              </span>
              {book.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${book.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          
          <Button
            onClick={handleAddToCart}
            disabled={!book.inStock}
            className="w-full transition-all duration-200 hover:shadow-md"
            variant={book.inStock ? "default" : "secondary"}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {book.inStock ? 'Agregar al carrito' : 'No disponible'}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BookCard;