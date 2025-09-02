import React, { useState, useMemo } from 'react';
import { books, categories } from '@/data/books';
import BookCard from '@/components/BookCard';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import { CartProvider } from '@/contexts/CartContext';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  console.log('Index component rendered with searchTerm:', searchTerm, 'category:', selectedCategory);

  const filteredBooks = useMemo(() => {
    console.log('Filtering books...');
    return books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const bookCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach(category => {
      if (category === 'Todos') {
        counts[category] = books.length;
      } else {
        counts[category] = books.filter(book => book.category === category).length;
      }
    });
    return counts;
  }, []);

  console.log('Filtered books count:', filteredBooks.length);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Descubre tu próxima lectura</h2>
            <p className="text-muted-foreground">
              Explora nuestra colección de libros cuidadosamente seleccionados
            </p>
          </div>
          
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            bookCounts={bookCounts}
          />
          
          {filteredBooks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No se encontraron libros que coincidan con tu búsqueda
              </p>
              <p className="text-muted-foreground mt-2">
                Intenta con otros términos o explora diferentes categorías
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Mostrando {filteredBooks.length} libro{filteredBooks.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'Todos' && ` en ${selectedCategory}`}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </>
          )}
        </main>
        
        <footer className="bg-muted mt-16 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">
              © 2024 LibroStore. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;