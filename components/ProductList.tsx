import ProductCard from "@/components/ProductCard";

export default function ProductList({ products }: { products: any[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}