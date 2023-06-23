import React, { useEffect, useRef } from "react";
import { TfiReceipt } from "react-icons/tfi";
import { Cart, CartItem } from "./Cart";
import { HEADER_MIN_HEIGHT } from "../Header.astro";
import { BsFillTriangleFill } from "react-icons/bs";
import { useReadLocalStorage } from "usehooks-ts";

export const CartWrapper: React.FC = () => {
  const [cartOpen, setCartOpen] = React.useState(false);
  const cart = useReadLocalStorage<CartItem[]>("cart");
  const menuContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuContainerRef.current) {
      console.log("we have a ref!");
    }
  }, [cartOpen]);

  return (
    <div className="relative">
      <button
        className="text-base flex items-center relative"
        onClick={() => {
          setCartOpen((prev) => !prev);
        }}
      >
        <TfiReceipt />
        {!!cart?.length && (
          <div className="rounded-full text-white text-xs font-bold bg-error absolute w-6 h-6 flex aspect-square items-center justify-center -right-4 top-2">
            {cart.length}
          </div>
        )}
      </button>
      {cartOpen && (
        <div
          className="absolute -right-3 text-neutral-700"
          style={{ top: `${HEADER_MIN_HEIGHT / 1.05}px` }}
          ref={menuContainerRef}
        >
          <BsFillTriangleFill className="absolute right-2 -top-[.5em] text-neutral-100 text-lg" />
          <Cart />
        </div>
      )}
    </div>
  );
};
