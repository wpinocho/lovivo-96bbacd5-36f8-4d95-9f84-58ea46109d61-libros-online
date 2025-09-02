import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Book, WishlistContextType } from '@/types/book';
import { toast } from 'sonner';

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Book[]>([]);

  const addToWishlist = (book: Book) => {
    console.log('Adding book to wishlist:', book.title);
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === book.id);
      if (existingItem) {
        toast.info(`${book.title} ya está en tu lista de deseos`);
        return prevItems;
      } else {
        toast.success(`${book.title} agregado a tu lista de deseos`);
        return [...prevItems, book];
      }
    });
  };

  const removeFromWishlist = (bookId: string) => {
    console.log('Removing book from wishlist:', bookId);
    setItems(prevItems => {
      const item = prevItems.find(item => item.id === bookId);
      if (item) {
        toast.success(`${item.title} eliminado de tu lista de deseos`);
      }
      return prevItems.filter(item => item.id !== bookId);
    });
  };

  const isInWishlist = (bookId: string) => {
    return items.some(item => item.id === bookId);
  };

  const clearWishlist = () => {
    console.log('Clearing wishlist');
    setItems([]);
    toast.success('Lista de deseos vaciada');
  };

  const value: WishlistContextType = {
    items,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};