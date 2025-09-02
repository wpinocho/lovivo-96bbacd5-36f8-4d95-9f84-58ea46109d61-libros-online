import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { books } from '@/data/books';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  ArrowLeft, 
  Truck, 
  Shield, 
  RotateCcw,
  BookOpen,
  Calendar,
  Globe,
  User
} from 'lucide-react';
import BookCard from '@/components/BookCard';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const book = books.find(b => b.id === id);
  const relatedBooks = books.filter(b => b.category === book?.category && b.id !== id).slice(0, 4);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Libro no encontrado</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(book);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(book.id)) {
      removeFromWishlist(book.id);
    } else {
      addToWishlist(book);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <button onClick={() => navigate('/')} className="hover:text-foreground">
            Inicio
          </button>
          <span>/</span>
          <button onClick={() => navigate('/')} className="hover:text-foreground">
            {book.category}
          </button>
          <span>/</span>
          <span className="text-foreground">{book.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Imagen del libro */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={book.image}
                alt={book.title}
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
              {book.originalPrice && (
                <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600">
                  -{Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}%
                </Badge>
              )}
            </div>
          </div>

          {/* Información del libro */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {book.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">por {book.author}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(book.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-medium">{book.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  ({book.reviews} reseñas)
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-primary">
                    ${book.price.toFixed(2)}
                  </span>
                  {book.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      ${book.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                {!book.inStock && (
                  <Badge variant="destructive">Agotado</Badge>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {book.description}
              </p>
            </div>

            {/* Detalles del libro */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Detalles del libro</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Páginas:</span>
                    <span>{book.pages}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Idioma:</span>
                    <span>{book.language}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Editorial:</span>
                    <span>{book.publisher}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Publicado:</span>
                    <span>{new Date(book.publishedDate || '').getFullYear()}</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="text-sm">
                  <span className="text-muted-foreground">ISBN:</span>
                  <span className="ml-2 font-mono">{book.isbn}</span>
                </div>
              </CardContent>
            </Card>

            {/* Botones de acción */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!book.inStock}
                  className="flex-1"
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {book.inStock ? 'Agregar al carrito' : 'No disponible'}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleWishlistToggle}
                  size="lg"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      isInWishlist(book.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-600'
                    }`} 
                  />
                </Button>
              </div>

              {/* Garantías */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4" />
                  <span>Envío gratis</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <span>Compra segura</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <RotateCcw className="w-4 h-4" />
                  <span>30 días devolución</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Libros relacionados */}
        {relatedBooks.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Libros relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedBooks.map((relatedBook) => (
                <BookCard key={relatedBook.id} book={relatedBook} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetail;