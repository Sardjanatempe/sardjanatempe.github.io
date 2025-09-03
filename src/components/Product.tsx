import Section from "./Section";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import type { Product } from "../types/product";

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  const handleAddToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find(
      (item: Product) => item.id === product.id
    );
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Add to cart:", product);
  };

  return (
    <Section
      title="Products"
      className="bg-gray-100 dark:bg-gray-800 pt-16"
      id="product"
    >
      <ul className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4">
        {products.map(({ id, name, image, bestSeller, outOfStock }) => (
          <Card
            className="p-4 md:p-6 bg-white dark:bg-gray-900 shadow-lg flex flex-col justify-between h-full w-full"
            key={id}
          >
            <div className="flex flex-col justify-between h-full">
              {/* Image and Name */}
              <div className="flex-col items-start">
                <img
                  src={image}
                  alt={name}
                  className="h-36 lg:h-45 w-full rounded-lg mb-4 object-cover"
                />
                <h3 className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold">
                  {name}
                </h3>
              </div>
              {/* Image and Name */}

              {/* Button */}
              <div className="mt-3 gap-3 space-x-2 flex flex-col items-start">
                {bestSeller && (
                  <span className="inline-block bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                    Best Seller
                  </span>
                )}
                {outOfStock && (
                  <span className="inline-block bg-red-300 text-red-900 px-2 py-1 rounded-full text-xs font-bold">
                    Out of Stock
                  </span>
                )}
                <div className="w-full flex justify-between space-x-2">
                  <a
                    className={outOfStock ? "w-full" : "w-3/4 inline-block"}
                    href={
                      outOfStock
                        ? undefined
                        : `https://wa.me/6282217606010?text=saya%20ingin%20memesan%20${encodeURIComponent(
                            name
                          )}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full"
                      disabled={outOfStock}
                    >
                      {outOfStock ? "Coming Soon" : "Order Now"}
                    </Button>
                  </a>
                  {!outOfStock && (
                    <Button
                      className="w-1/4"
                      onClick={() =>
                        handleAddToCart({
                          id,
                          name,
                          image,
                          bestSeller,
                          outOfStock,
                        })
                      }
                    >
                      Add
                    </Button>
                  )}
                </div>
              </div>
              {/* Button */}
            </div>
          </Card>
        ))}
      </ul>
    </Section>
  );
};

export default ProductList;
