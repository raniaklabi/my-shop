type Props = {
  params: {
    id: string;
  };
};

export default async function ProductDetail({ params }: Props) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return (
    <main className="p-6">
      <div className="max-w-2xl mx-auto border p-6 rounded shadow">
        <img src={product.image} className="h-60 mx-auto object-contain" />
        <h1 className="text-xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-sm text-gray-500 mt-2">Catégorie : {product.category}</p>
        <p className="text-lg text-yellow-600 mt-2">
            {Array(Math.floor(product.rating.rate)).fill("★").join("")}
            {Array(5 - Math.floor(product.rating.rate)).fill("☆").join("")} ({product.rating.count} avis)
        </p>
        <p className="text-2xl font-bold text-blue-600 mt-4">${product.price}</p>
      </div>
    </main>
  );
}