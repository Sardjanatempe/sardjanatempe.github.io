import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/Product";
import type { Product } from "./types/product";
import Testimoni from "./components/Testimoni";
import About from "./components/About";
import Footer from "./components/Footer";
import { CartButton } from "./components/CartButton";
import { CartProvider } from "./context/CartProvider";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <Navbar />
          <Hero />
          <ProductList products={products} />
          <Testimoni />
          <About />
          <Footer />
          <CartButton />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
