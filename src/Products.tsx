import ProductCard from "./ProductCard";
import rf from "./assets/RF.webp";
import sg from "./assets/SG.jpg";
//import kukoburra from "./assets/KUKOBURRA.jpg";
import reebok from "./assets/REEBOK.webp";
import ceat from "./assets/CEAT.jpeg";

type Props = {
  category?: string;
};
const allProducts = [
  { id: 1, name: "MRF Cricket Bat", price: 5000, image: rf, category: "Cricket Bats" },
  { id: 2, name: "SG Cricket Bat", price: 4000, image: sg, category: "Cricket Bats" },

  { id: 3, name: "Laptop", price: 70000, image: sg, category: "Cricket Bats" },

  { id: 4, name: "Shirt", price: 999, image: ceat, category: "Cricket Bats" },

  { id: 5, name: "Sofa", price: 15000, image: reebok, category: "Cricket Bats" },
];

function Products({ category }: Props) {
  const filtered =
    category && category !== "All"
      ? allProducts.filter((p) => p.category === category)
      : allProducts;

  return (
    <div>
      <h2 className="text-white text-xl font-bold mb-4">
        {category || "All Products"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;