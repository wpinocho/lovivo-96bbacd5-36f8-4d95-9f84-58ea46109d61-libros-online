import { Book } from '@/types/book';

export const books: Book[] = [
  {
    id: '1',
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    price: 18.99,
    originalPrice: 24.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
    description: 'Una obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de siete generaciones.',
    category: 'Literatura',
    rating: 4.8,
    reviews: 1250,
    inStock: true,
    isbn: '978-0-06-088328-7'
  },
  {
    id: '2',
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes',
    price: 22.50,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
    description: 'La obra cumbre de la literatura española que relata las aventuras del ingenioso hidalgo.',
    category: 'Clásicos',
    rating: 4.6,
    reviews: 890,
    inStock: true,
    isbn: '978-0-14-243723-0'
  },
  {
    id: '3',
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    price: 12.99,
    originalPrice: 16.99,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    description: 'Una fábula poética que nos enseña sobre la amistad, el amor y la pérdida de la inocencia.',
    category: 'Infantil',
    rating: 4.9,
    reviews: 2100,
    inStock: true,
    isbn: '978-0-15-601219-5'
  },
  {
    id: '4',
    title: '1984',
    author: 'George Orwell',
    price: 15.75,
    image: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=400&fit=crop',
    description: 'Una distopía que explora temas de totalitarismo, vigilancia y manipulación de la verdad.',
    category: 'Ciencia Ficción',
    rating: 4.7,
    reviews: 1580,
    inStock: true,
    isbn: '978-0-452-28423-4'
  },
  {
    id: '5',
    title: 'Orgullo y Prejuicio',
    author: 'Jane Austen',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
    description: 'Una novela romántica que critica la sociedad inglesa del siglo XIX.',
    category: 'Romance',
    rating: 4.5,
    reviews: 1320,
    inStock: false,
    isbn: '978-0-14-143951-8'
  },
  {
    id: '6',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    price: 19.99,
    originalPrice: 25.99,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop',
    description: 'Una breve historia de la humanidad desde la Edad de Piedra hasta la era digital.',
    category: 'Historia',
    rating: 4.4,
    reviews: 980,
    inStock: true,
    isbn: '978-0-06-231609-7'
  },
  {
    id: '7',
    title: 'El Alquimista',
    author: 'Paulo Coelho',
    price: 13.50,
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop',
    description: 'Una fábula sobre seguir los sueños y encontrar el tesoro que llevamos dentro.',
    category: 'Autoayuda',
    rating: 4.3,
    reviews: 1750,
    inStock: true,
    isbn: '978-0-06-250217-6'
  },
  {
    id: '8',
    title: 'Crónica de una muerte anunciada',
    author: 'Gabriel García Márquez',
    price: 16.25,
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=400&fit=crop',
    description: 'Una novela corta que reconstruye la historia de un asesinato anunciado.',
    category: 'Literatura',
    rating: 4.6,
    reviews: 670,
    inStock: true,
    isbn: '978-1-4000-3471-0'
  }
];

export const categories = [
  'Todos',
  'Literatura',
  'Clásicos',
  'Infantil',
  'Ciencia Ficción',
  'Romance',
  'Historia',
  'Autoayuda'
];