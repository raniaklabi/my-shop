import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto"
      />
      <h2 className="text-sm mt-2 font-semibold">{product.title}</h2>
      <p className="text-blue-600 font-bold text-lg">${product.price}</p>
      <p className="text-sm text-gray-600">
        {Array(Math.floor(product.rating.rate)).fill("★").join("")}
        {Array(5 - Math.floor(product.rating.rate)).fill("☆").join("")} ({product.rating.count} avis)
      </p>
      <Link href={`/product/${product.id}`}>
        <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
          Voir
        </button>
      </Link>
    </div>
  );
}