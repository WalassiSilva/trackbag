import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { Item as ItemType } from "../types";
import { useItemsStore } from "../stores/itemsStore";

export type ItemListProps = {
  items: ItemType[];
  handleRemoveItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
};
const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];
export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const removeItem = useItemsStore((state) => state.removeItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a: ItemType, b: ItemType): number => {
        if (sortBy === "packed") {
          return +b.packed - +a.packed;
        }
        if (sortBy === "unpacked") {
          return +a.packed - +b.packed;
        }
        return 0;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {sortedItems.length === 0 && <EmptyView />}

      {sortedItems.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option!.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          ></Select>
        </section>
      )}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onRemoveItem={removeItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

function Item({
  item,
  onRemoveItem,
  onToggleItem,
}: {
  item: ItemType;
  onRemoveItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}
