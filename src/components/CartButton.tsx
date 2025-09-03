import { useState } from "react";
import { Button } from "./ui/button";

export function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <Button
      className="fixed bottom-4 right-4 lg:bottom-10 lg:right-10 rounded-2xl p-6 shadow-lg"
      onClick={() => {
        setIsOpen(!isOpen);
        setCount(count + 1);
      }}
    >
      Cart
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
      {count > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {count}
        </span>
      )}
      {isOpen}
    </Button>
  );
}
