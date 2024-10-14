import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const datafetcher = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    }
    datafetcher();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Category</label>
        <select 
          onChange={(e) => setCategory(e.target.value)} 
          className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-300">
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products
          .filter(products => category === 'all' || products.category === category)
          .map(products => (
            <div key={products.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src={products.image} alt={products.title} className="w-full h-48 object-contain mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{products.title}</h3>
              <p className="text-gray-600 font-semibold mb-1">{products.price} USD</p>
              <p className="text-sm text-gray-500">{products.description.slice(0, 100)}...</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
