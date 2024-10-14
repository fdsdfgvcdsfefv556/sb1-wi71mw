import React from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
}

interface ProductDetailsProps {
  products: Product[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div className="text-center text-red-400">Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">{product.name}</h1>
      <div className="mb-8">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>
      <p className="text-xl mb-6 text-gray-300">{product.description}</p>
      <h2 className="text-2xl font-semibold mb-4 text-blue-300">Key Features</h2>
      <ul className="list-disc list-inside mb-8 text-gray-300">
        {product.features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>
      <a href="#" className="btn btn-primary">
        Download App
      </a>
    </div>
  );
};

export default ProductDetails;