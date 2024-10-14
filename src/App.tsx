import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Blog from './pages/Blog';
import UsefulLinks from './pages/UsefulLinks';
import { content } from './data/content';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header siteTitle={content.siteTitle} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home content={content.home} />} />
            <Route path="/products" element={<Products products={content.products} />} />
            <Route path="/products/:id" element={<ProductDetails products={content.products} />} />
            <Route path="/blog" element={<Blog posts={content.blog} />} />
            <Route path="/useful-links" element={<UsefulLinks links={content.usefulLinks} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;