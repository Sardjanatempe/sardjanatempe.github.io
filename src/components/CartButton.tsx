// CartButton.tsx
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { useState } from "react";

// Pastikan type ini sama dengan yang di CardSection/App.tsx
export type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number; // atau quantity — pilih salah satu, konsisten!
};

interface CartButtonProps {
  cart: CartItem[];
  onRemoveFromCart: (id: number) => void;
  onAddToCart: (id: number) => void;
  onCheckout?: () => void;
}

const svgCart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

export function CartButton({
  cart,
  onRemoveFromCart,
  onAddToCart,
  onCheckout,
}: CartButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 lg:bottom-10 lg:right-10 rounded-2xl p-6 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Cart
          {svgCart}
          {totalQuantity > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {totalQuantity}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-white dark:bg-gray-800">
        <SheetHeader>
          <SheetTitle className="text-2xl flex items-center gap-2 pl-4">
            Cart {svgCart}
          </SheetTitle>
          <SheetDescription>
            <table className="w-full mt-5">
              <thead className="font-bold text-lg">
                <tr>
                  <th className="text-left pl-4 py-2 w-1/6">Product</th>
                  <th className="text-center w-1/6 py-2">Qty</th>
                  <th className="text-center py-2 w-1/6">Price</th>
                  <th className="text-center py-2 w-1/6">Amount</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 pl-4">{item.name}</td>
                    <td className="text-center">
                      <button
                        className="mr-2 bg-slate-200 px-2 rounded-sm"
                        onClick={() => onRemoveFromCart(item.id)}
                      >
                        -
                      </button>{" "}
                      {/* 👈 */}
                      {item.qty}
                      <button
                        className="ml-2 bg-slate-200 px-2 rounded-sm"
                        onClick={() => onAddToCart(item.id)}
                      >
                        +
                      </button>
                      {"  "}
                      {/* opsional */}
                    </td>
                    <td className="text-right">
                      Rp {item.price.toLocaleString("id-ID")}
                    </td>
                    <td className="text-right pr-5 sm:pr-6">
                      Rp {(item.price * item.qty).toLocaleString("id-ID")}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="font-bold text-lg">
                {cart.length > 0 && (
                  <tr>
                    <td colSpan={2}></td>
                    <td className="py-2 text-center">Total</td>
                    <td className="py-2 text-right pr-5 sm:pr-6">
                      Rp{" "}
                      {cart
                        .reduce((sum, item) => sum + item.price * item.qty, 0)
                        .toLocaleString("id-ID")}
                    </td>
                  </tr>
                )}
              </tfoot>
            </table>
            <p className="text-sm mt-3 italic">
              *) Harga Belum Termasuk Ongkir
            </p>
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3"></div>
          <div className="grid gap-3"></div>
        </div>
        <div className="p-4">
          {/* Tampilkan jumlah item di cart (opsional, untuk demo) */}
          <div className="mb-4 text-lg pl-4">
            🛒 Total Items : {cart.reduce((sum, item) => sum + item.qty, 0)}
            {" pcs"}
          </div>
        </div>
        <SheetFooter className="mx-auto">
          <Button className="w-[200px] mb-5" type="submit" onClick={onCheckout}>
            Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
