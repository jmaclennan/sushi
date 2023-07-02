import type { CartItem } from "@/components/Cart/Cart";
import { useLocalStorage } from "usehooks-ts";
import { FaPepperHot } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import type React from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { formatPrice } from "@/shared/utils";

type MenuItemProps = {
  id: number;
  name: string;
  price: number;
  description?: string;
  spicy?: boolean;
  category: string;
  altPrice?: number;
  altPriceCategory?: boolean;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  description,
  price,
  spicy,
  category,
  altPrice,
  altPriceCategory,
}) => {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (itemRef.current) {
      activate(itemRef.current);
    }
    // if item already exists in cart, increment quantity
    if (cart.some((item) => item.id === id && item.category === category)) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id && item.category === category
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      return;
    }

    setCart((prev) => [...prev, { id, name, price, category, quantity: 1 }]);
  };

  const activate = (el: HTMLDivElement) => {
    const tl = gsap.timeline();
    tl.to(el, {
      y: -0,
      duration: 0.25,
      rotate: 90,
      scale: 1.5,
      ease: "ease.in",
    })
      .to(el, {
        y: 0,
        rotate: 180,
        duration: 0.25,
        scale: 1,
        ease: "ease.inout",
      })
      .set(el, {
        rotate: 0,
      });
  };

  return (
    <li className="flex-nowrap break-inside-avoid border-solid border-b border-neutral-300 border-b-1 px-2 md:px-0">
      <div className="w-full py-4 md:py-2 group px-2 pr-0 text-sm">
        <div className="flex w-full">
          <div className="text-neutral-700 uppercase font-bold flex justify-start items-start min-w-[60px] space-x-2">
            <div ref={itemRef} onClick={handleClick} className="-mt-[0.05em]">
              <CgAddR className="text-[28px] opacity-50 hover:opacity-100 hover:text-neutral-700 transition-all duration-250 text-neutral-500 cursor-pointer" />
            </div>
            <div className="flex pr-2 text-neutral-600 font-semibold">
              <span>{category}</span>
              <span>{id}</span>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex">
              <div className="text-stone-600 flex space-x-2 items-center">
                <span>
                  {name}{" "}
                  {spicy && (
                    <FaPepperHot className="text-error text-[18px] inline -translate-y-1" />
                  )}
                </span>
              </div>
            </div>
            {description && (
              <span className="text-sm italic flex-wrap flex">
                {description}
              </span>
            )}
          </div>
          <div className="flex flex-shrink">
            <div className="text-neutral-600 whitespace-nowrap flex justify-center w-[90px] text-center flex-shrink-0">
              <span>{formatPrice(price)}</span>
            </div>
            {!!altPriceCategory && (
              <div className="text-neutral-600 whitespace-nowrap flex justify-center w-[90px] text-center flex-shrink-0">
                {!!altPrice && <span>{formatPrice(altPrice)}</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
