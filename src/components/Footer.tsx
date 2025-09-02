import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  CreditCard,
  Truck,
  Shield,
  RotateCcw
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">¡No te pierdas nuestras ofertas!</h3>
          <p className="text-blue-100 mb-6">Suscríbete y recibe descuentos exclusivos y novedades</p>
          <div className="flex max-w-md mx-auto space-x-2">
            <Input
              type="email"
              placeholder="Tu email"
              className="bg-white text-gray-900"
            />
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Suscribirse
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold">LibroStore</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Tu librería online de confianza. Descubre miles de libros y encuentra 
              tu próxima gran lectura con nosotros.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Catálogo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ofertas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Novedades</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Atención al cliente</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Centro de ayuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política de devoluciones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Envíos y entregas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacidad</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Calle Principal 123, Ciudad</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@librostore.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center space-x-3">
            <Truck className="h-6 w-6 text-blue-400" />
            <div>
              <p className="font-medium">Envío gratis</p>
              <p className="text-sm text-gray-400">En pedidos +$25</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Shield className="h-6 w-6 text-blue-400" />
            <div>
              <p className="font-medium">Pago seguro</p>
              <p className="text-sm text-gray-400">100% protegido</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <RotateCcw className="h-6 w-6 text-blue-400" />
            <div>
              <p className="font-medium">30 días</p>
              <p className="text-sm text-gray-400">Para devoluciones</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CreditCard className="h-6 w-6 text-blue-400" />
            <div>
              <p className="font-medium">Múltiples pagos</p>
              <p className="text-sm text-gray-400">Visa, Master, PayPal</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 LibroStore. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Aceptamos:</span>
            <div className="flex space-x-2">
              <div className="bg-white rounded px-2 py-1">
                <span className="text-xs font-bold text-blue-600">VISA</span>
              </div>
              <div className="bg-white rounded px-2 py-1">
                <span className="text-xs font-bold text-red-600">MC</span>
              </div>
              <div className="bg-white rounded px-2 py-1">
                <span className="text-xs font-bold text-blue-800">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;