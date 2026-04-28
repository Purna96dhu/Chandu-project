
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-90 w-full object-contain bg-white rounded"
      />

      <h3 className="mt-3 font-semibold">{product.name}</h3>

      <p className="text-green-600 font-bold mt-1">
        ₹{product.price}
      </p>
    </div>
  );
}

export default ProductCard;