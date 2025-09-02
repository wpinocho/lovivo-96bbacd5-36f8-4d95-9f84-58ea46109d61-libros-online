import React from 'react';
import { Book } from '@/types/book';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star, ShoppingCart } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log('Adding book to cart from BookCard:', book.title);
    addToCart(book);
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        {book.originalPrice && (
          <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
            -{Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}%
          </Badge>
        )}
        {!book.inStock && (
          <Badge className="absolute top-2 left-2 bg-gray-500">
            Agotado
          </Badge>
        )}
      </div>
      
      <CardContent className="flex-1 p-4">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {book.category}
          </Badge>
        </div>
        
        <h3 className="font-bold text-lg mb-1 line-clamp-2">{book.title}</h3>
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
            className="w-full"
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