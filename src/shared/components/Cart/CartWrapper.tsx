import { TfiReceipt } from "react-icons/tfi";
import { Cart, CartItem } from "./Cart";
import { HEADER_MIN_HEIGHT } from "../Header.astro";
import { BsFillTriangleFill } from "react-icons/bs";
import { useReadLocalStorage, useOnClickOutside } from "usehooks-ts";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const shake = (el: HTMLElement | null) => {
  if (!el) return;
  const tl = gsap.timeline({ repeat: 0 });
  tl.to(el, {
    x: 5,
    duration: 0.1,
    ease: "power1.inOut",
  });
  tl.to(el, {
    x: 0,
    duration: 0.1,
    ease: "power1.in",
  });
  tl.to(el, {
    x: -5,
    duration: 0.1,
    ease: "power1.Out",
  });
  tl.to(el, {
    x: 0,
    duration: 0.1,
    ease: "power1.inOut",
  });
};

export const CartWrapper: React.FC = () => {
  const [cartOpen, setCartOpen] = React.useState(false);
  const cart = useReadLocalStorage<CartItem[]>("cart");
  const menuContainerRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const cartCountRef = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (!menuContainerRef.current || !triggerRef.current || !cartOpen) return;

    if (
      !triggerRef.current.contains(event.target as Node) &&
      !menuContainerRef.current.contains(event.target as Node)
    )
      setCartOpen(false);
  };

  useEffect(() => {
    shake(cartCountRef.current);
  }, [cart?.reduce((acc, item) => acc + item.quantity, 0)]);

  useOnClickOutside(menuContainerRef, handleClickOutside);

  const cartItemCount = cart?.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative">
      <button
        className="text-[28px] flex items-center relative hover:text-red-400"
        onClick={(e) => {
          setCartOpen((prev) => !prev);
        }}
        ref={triggerRef}
      >
        <TfiReceipt />
        {!!cart?.length && (
          <div
            className="rounded-full text-white text-xs font-bold bg-error absolute w-6 h-6 flex aspect-square items-center justify-center -right-4 top-2"
            ref={cartCountRef}
          >
            {cartItemCount}
          </div>
        )}
      </button>
      {cartOpen && (
        <div
          className="absolute -right-5 md:-right-3 text-neutral-700"
          style={{ top: `${HEADER_MIN_HEIGHT}px` }}
          ref={menuContainerRef}
        >
          <BsFillTriangleFill className="absolute right-[.55em] md:right-[.3em] -top-[.5em] text-neutral-100 text-lg" />
          <Cart />
        </div>
      )}
    </div>
  );
};
