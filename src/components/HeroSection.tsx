import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, BookOpen } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2">
                ✨ Nuevos lanzamientos disponibles
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Descubre tu próxima
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}gran lectura
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explora miles de libros cuidadosamente seleccionados. Desde clásicos atemporales 
                hasta los últimos bestsellers, encuentra la historia perfecta para ti.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Explorar Catálogo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Ver Ofertas
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.8/5 de satisfacción</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">+10,000 libros</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop" 
                    alt="Libro destacado" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-gray-900">Cien años de soledad</h3>
                  <p className="text-sm text-gray-600">Gabriel García Márquez</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-blue-600">$18.99</span>
                    <Badge variant="secondary">Bestseller</Badge>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop" 
                    alt="Libro destacado" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-gray-900">El Principito</h3>
                  <p className="text-sm text-gray-600">Antoine de Saint-Exupéry</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-blue-600">$12.99</span>
                    <Badge className="bg-red-500">-25%</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;