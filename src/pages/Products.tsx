import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  description: string;
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">My Flutter Apps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card p-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-300">{product.name}</h2>
            <p className="text-gray-400 mb-4">{product.description}</p>
            <Link to={`/products/${product.id}`} className="text-blue-400 hover:text-blue-300 transition-colors">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;