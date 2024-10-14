import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">{siteTitle}</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <div className="relative group">
            <button className="flex items-center hover:text-blue-400 transition-colors">
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute hidden group-hover:block bg-gray-700 text-white shadow-md mt-2 py-2 rounded-md">
              <Link to="/products/app1" className="block px-4 py-2 hover:bg-gray-600 transition-colors">App 1</Link>
              <Link to="/products/app2" className="block px-4 py-2 hover:bg-gray-600 transition-colors">App 2</Link>
              <Link to="/products/app3" className="block px-4 py-2 hover:bg-gray-600 transition-colors">App 3</Link>
            </div>
          </div>
          <Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
          <Link to="/useful-links" className="hover:text-blue-400 transition-colors">Useful Links</Link>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2 px-4 hover:bg-gray-700 transition-colors">Home</Link>
          <Link to="/products" className="block py-2 px-4 hover:bg-gray-700 transition-colors">Products</Link>
          <Link to="/blog" className="block py-2 px-4 hover:bg-gray-700 transition-colors">Blog</Link>
          <Link to="/useful-links" className="block py-2 px-4 hover:bg-gray-700 transition-colors">Useful Links</Link>
          <a href="#contact" className="block py-2 px-4 hover:bg-gray-700 transition-colors">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;