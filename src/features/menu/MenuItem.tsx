import type { CartItem } from "@/components/Cart/Cart";
import { useLocalStorage } from "usehooks-ts";
import { FaPepperHot } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import type React from "react";
import { gsap } from "gsap";
import { useRef } from "react";

type MenuItemProps = {
  id: number;
  name: string;
  price: number;
  description?: string;
  spicy?: boolean;
  category: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  description,
  price,
  spicy,
  category,
}) => {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (itemRef.current) {
      console.log("activating");
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
    <li className="flex-nowrap break-inside-avoid border-solid border-b border-neutral-300 border-b-1">
      <div
        className="w-full py-4 md:py-2 cursor-pointer hover:bg-neutral-100/50 group px-2 pr-8"
        onClick={handleClick}
      >
        <div className="flex space-between w-full space-x-4">
          <div className="text-neutral-700 uppercase text-sm font-bold flex pt-1 items-start space-x-2 justify-start">
            <div ref={itemRef}>
              <CgAddR className="text-[22px] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250 text-neutral-500" />
            </div>
            <div className="flex">
              <span>{category}</span>
              <span>{id}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex ">
              <div className="text-stone-600 flex space-x-2 items-center">
                <span>
                  {name}{" "}
                  {spicy && (
                    <FaPepperHot className="text-error text-[18px] inline -translate-y-1" />
                  )}
                </span>
              </div>
            </div>
            {description && <span className="text-sm">{description}</span>}
          </div>
          <div className="text-neutral-600 whitespace-nowrap text-right flex-grow flex justify-end">
            <span>$</span>
            <span>{price}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
