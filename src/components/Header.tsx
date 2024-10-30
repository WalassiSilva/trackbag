
import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsContext } from "../lib/hooks";

export default function Header() {
  const { items } = useItemsContext();  

  return (
    <header className="header">
      <Logo />
      <Counter
        numberOfItems={items.length}
        numberOfItemsPacked={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
