import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimoni from "./components/Testimoni";
import About from "./components/About";
import Footer from "./components/Footer";
import { CartButton } from "./components/CartButton";
import { CartProvider } from "./context/CartProvider";
import CardSection from "./components/CardSection";
import type { CartItem } from "./components/CardSection";
import { useState } from "react";
import { useEffect } from "react";
import type { Product } from "./types/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load products
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  const handleAddToCart = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          name: product.name,
          price: product.price,
          qty: 1,
        },
      ]);
    }
  };

  const handleRemoveFromCart = (id: number) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;

    if (item.qty === 1) {
      setCart(cart.filter((item) => item.id !== id)); // ✅ Hapus item jika qty=1
    } else {
      setCart(
        cart.map(
          (item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item) // ✅ Kurangi qty
        )
      );
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Keranjang masih kosong!");
      return;
    }

    // Format pesan
    let message = "Halo, saya ingin memesan:\n\n";

    cart.forEach((item, index) => {
      const subtotal = item.price * item.qty;
      message += `${index + 1}. ${item.name} (x${
        item.qty
      }) → Rp ${subtotal.toLocaleString("id-ID")}\n`;
    });

    const totalAmount = cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    message += `\n--------------------------\n`;
    message += `Total: Rp ${totalAmount.toLocaleString("id-ID")}\n`;
    message += `\n*) Harga belum termasuk ongkir.`;

    // Nomor WhatsApp (tanpa tanda + atau 0, pakai kode negara)
    const phoneNumber = "6281802090774"; // contoh: 62 untuk Indonesia, lalu 812... tanpa 0

    // Encode & buka WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <Navbar />
          <Hero />
          {/* <ProductList products={products} /> */}
          {/* Turunkan cart dan handleAddToCart ke CardSection */}
          <CardSection
            cart={cart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
          <Testimoni />
          <About />
          <Footer />
          <CartButton
            cart={cart}
            onRemoveFromCart={handleRemoveFromCart}
            onAddToCart={handleAddToCart}
            onCheckout={handleCheckout}
          />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
