import type { CartItem } from "@/components/Cart/Cart";
import { useLocalStorage } from "usehooks-ts";
import { FaPepperHot } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";

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

  const handleClick = () => {
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

  return (
    <li className="flex-nowrap break-inside-avoid  border-solid border-b border-neutral-300 border-b-1">
      <div
        className="w-full py-4 md:py-2 cursor-pointer hover:bg-neutral-100/50 group px-2 pr-8"
        onClick={handleClick}
      >
        <div className="flex space-between w-full space-x-4">
          <div className="text-neutral-700 uppercase text-sm font-bold flex pt-1 items-start space-x-2 justify-start">
            <CgAddR className="text-[20px] opacity-0 group-hover:opacity-100 text-success pt-1" />
            <div className="flex">
              <span>{category}</span>
              <span>{id}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex ">
              <span className="text-stone-600">
                {name} {spicy && <FaPepperHot className="text-error" />}
              </span>
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
