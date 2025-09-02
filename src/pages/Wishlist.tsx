import React from 'react';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Wishlist: React.FC = () => {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (book: any) => {
    addToCart(book);
  };

  const handleRemoveFromWishlist = (bookId: string) => {
    removeFromWishlist(bookId);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
            <div>
              <h1 className="text-3xl font-bold flex items-center space-x-2">
                <Heart className="w-8 h-8 text-red-500" />
                <span>Mi Lista de Deseos</span>
              </h1>
              <p className="text-muted-foreground">
                {items.length} libro{items.length !== 1 ? 's' : ''} guardado{items.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          
          {items.length > 0 && (
            <Button
              variant="outline"
              onClick={clearWishlist}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Limpiar lista
            </Button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">Tu lista de deseos está vacía</h2>
            <p className="text-muted-foreground mb-6">
              Explora nuestro catálogo y guarda los libros que te interesen
            </p>
            <Button onClick={() => navigate('/')}>
              Explorar libros
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((book) => (
              <Card key={book.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
                    onClick={() => navigate(`/book/${book.id}`)}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={() => handleRemoveFromWishlist(book.id)}
                  >
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                  </Button>
                  {book.originalPrice && (
                    <Badge className="absolute top-2 left-2 bg-red-500">
                      -{Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {book.category}
                    </Badge>
                  </div>
                  
                  <h3 
                    className="font-bold text-lg mb-1 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => navigate(`/book/${book.id}`)}
                  >
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-primary">
                        ${book.price.toFixed(2)}
                      </span>
                      {book.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${book.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    {!book.inStock && (
                      <Badge variant="destructive">Agotado</Badge>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Button
                      onClick={() => handleAddToCart(book)}
                      disabled={!book.inStock}
                      className="w-full"
                      variant={book.inStock ? "default" : "secondary"}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {book.inStock ? 'Agregar al carrito' : 'No disponible'}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleRemoveFromWishlist(book.id)}
                      className="w-full text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Quitar de la lista
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;