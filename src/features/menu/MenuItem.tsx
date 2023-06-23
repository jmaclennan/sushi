import type { CartItem } from "@/components/Cart/Cart";
import { useLocalStorage } from "usehooks-ts";

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
    <li
      className="flex space-between w-full border-solid border-b border-neutral-300 border-b-1 space-x-4 py-4 md:py-2 cursor-pointer hover:bg-neutral-100"
      onClick={handleClick}
    >
      <div className="text-neutral-700 uppercase text-sm font-bold flex items-start pt-1">
        <span>{category}</span>
        <span>{id}</span>
      </div>
      <div className="flex flex-col">
        <div className="flex ">
          <span className="text-stone-600">
            {name} {spicy ? "x" : ""}
          </span>
        </div>
        {description && <span className="text-sm">{description}</span>}
      </div>
      <div className="text-neutral-600 whitespace-nowrap text-right flex-grow flex justify-end">
        <span>$</span>
        <span>{price}</span>
      </div>
    </li>
  );
};
