import { formatPrice } from "@/shared/utils";
import type React from "react";
import { useLocalStorage } from "usehooks-ts";
import { CgTrash, CgAddR, CgRemoveR } from "react-icons/cg";

import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
};

export const Cart: React.FC = () => {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);

  const totals = useMemo(() => {
    const subTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const gst = subTotal * 0.05;
    const total = subTotal + gst;
    return {
      subTotal,
      gst,
      total,
    };
  }, [cart]);

  const handleDelete = (id: number, category: string) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id || item.category !== category)
    );
  };

  const handleIncreaseQuantity = (id: number, category: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.category === category
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (id: number, category: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.category === category && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="max-w-md bg-neutral-100 p-4 rounded-xl space-y-2 text-sm">
      <header className="border-b border-neutral-400 py-2">
        <span className="header font-bold">Your Order</span>
      </header>
      <ul className="space-y-2 w-full border-neutral-300 border-b-1 border-1">
        {cart.map((item) => (
          <li
            className="flex w-full space-x-4 py-2 border-solid border-b border-neutral-300 border-b-1 last:border-0"
            key={`${item.category}${item.id}`}
          >
            <div className="flex items-center justify-center">
              <button
                onClick={() => handleDecreaseQuantity(item.id, item.category)}
                className={twMerge(
                  "opacity-50 hover:opacity-100",
                  item.quantity <= 1 &&
                    "cursor-not-allowed opacity-20 hover:opacity-20"
                )}
              >
                <CgRemoveR />
              </button>
              <span
                className={twMerge(
                  "inline-block min-w-[2em] text-center",
                  item.quantity > 1 ? "font-bold" : "font-normal"
                )}
              >
                {item.quantity}x
              </span>
              <button
                onClick={() => handleIncreaseQuantity(item.id, item.category)}
                className="opacity-50 hover:opacity-100"
              >
                <CgAddR />
              </button>
            </div>
            <div className="flex justify-between flex-grow">
              <div className="overflow-ellipsis">
                <span className="font-bold">
                  {item.category}
                  {item.id}
                </span>
                {" - "}
                {item.name}
              </div>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </div>
            <button
              onClick={() => handleDelete(item.id, item.category)}
              className="flex-shrink flex items-center text-error/50 hover:text-error"
            >
              <CgTrash />
            </button>
          </li>
        ))}
      </ul>
      {!!cart.length && (
        <footer className="space-y-2 border-t border-neutral-400 py-2">
          <div className="flex justify-between">
            <span>Subtotal:</span> <span>{formatPrice(totals.subTotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>GST:</span> <span>{formatPrice(totals.gst)}</span>
          </div>
          <div className="flex justify-between">
            <span>Total:</span> <span>{formatPrice(totals.total)}</span>
          </div>
        </footer>
      )}
    </div>
  );
};
