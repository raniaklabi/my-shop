'use client';

import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [page, setPage] = useState(1);

  const PRODUCTS_PER_PAGE = 5;

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(setCategories);
  }, []);

  
  useEffect(() => {
    if (selectedCat === "all") {
      setFiltered(products);
    } else {
      setFiltered(products.filter(p => p.category === selectedCat));
    }
    setPage(1); 
  }, [selectedCat, products]);

  const paginated = filtered.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Produits</h1>
        <select
          value={selectedCat}
          onChange={e => setSelectedCat(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="all">Toutes les catégories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <ProductList products={paginated} />

      
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-3 py-1 border rounded ${page === num ? "bg-blue-500 text-white" : "bg-white"}`}
          >
            {num}
          </button>
        ))}
      </div>
    </main>
  );
}
