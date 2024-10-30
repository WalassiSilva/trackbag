
import { useItemsStore } from "../stores/itemsStore";
import { Item } from "../types";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const items = useItemsStore((state) => state.items)

  return (
    <header className="header">
      <Logo />
      <Counter
        numberOfItems={items.length}
        numberOfItemsPacked={items.filter((item: Item) => item.packed).length}
      />
    </header>
  );
}
