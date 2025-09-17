// CardSection.tsx
import CardProduct from "./CardProduct";
import Section from "./Section";
import { useState, useEffect } from "react";
import type { Product } from "../types/product";

// 👇 EXPORT TYPE INI AGAR BISA DIGUNAKAN DI APP.TSX
export type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

interface CardSectionProps {
  cart: CartItem[];
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
}

const CardSection = ({ onAddToCart }: CardSectionProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  return (
    <>
      <Section title="Product" id="product">
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4">
          {products.map(({ id, name, image, bestSeller, outOfStock }) => (
            <CardProduct key={id}>
              <CardProduct.Image url={image} name={name} />
              <CardProduct.Title name={name} />
              <CardProduct.Footer
                bestSeller={bestSeller}
                outOfStok={outOfStock}
                productName={name}
                id={id}
                handleAddToCart={onAddToCart} // 👈 gunakan props dari parent
              />
            </CardProduct>
          ))}
        </div>
      </Section>
    </>
  );
};

export default CardSection;
