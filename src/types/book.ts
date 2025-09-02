export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isbn: string;
  publisher?: string;
  publishedDate?: string;
  pages?: number;
  language?: string;
  featured?: boolean;
}

export interface CartItem extends Book {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export interface WishlistContextType {
  items: Book[];
  addToWishlist: (book: Book) => void;
  removeFromWishlist: (bookId: string) => void;
  isInWishlist: (bookId: string) => boolean;
  clearWishlist: () => void;
}

export interface FilterOptions {
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sortBy: 'title' | 'price' | 'rating' | 'newest';
  sortOrder: 'asc' | 'desc';
  inStockOnly: boolean;
}