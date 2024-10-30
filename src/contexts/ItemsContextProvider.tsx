import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/contants";
import { Item } from "../types";

export const ItemsContext = createContext({
  items: initialItems,
  handleAddItem: ( newItemText: string) => {},
  handleRemoveItem: (id: number) => {},
  handleToggleItem: (id: number) => {},
  handleRemoveAllItems: () => {},
  handleCompleteAll: () => {},
  handleIncompleteAll: () => {},
  hadleResetToInitial: () => {},
});
export default function ItemsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storedItems = localStorage.getItem("ITEM_DATA");
  const initialData =
    storedItems !== null ? JSON.parse(storedItems) : initialItems;
  const [items, setItems] = useState(initialData);
  const handleAddItem = (newItemText: string) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemoveItem = (id: number) => {
    const newItems = items.filter((item: Item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id: number) => {
    const newItems = items.map((item: Item) => ({
      ...item,
      packed: item.id === id ? !item.packed : item.packed,
    }));
    setItems(newItems);
  };
  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const hadleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleCompleteAll = () => {
    const newItems = items.map((item: Item) => ({
      ...item,
      packed: true,
    }));
    setItems(newItems);
  };

  const handleIncompleteAll = () => {
    const newItems = items.map((item: Item) => ({
      ...item,
      packed: false,
    }));
    setItems(newItems);
  };

  // const numberOfItemsPacked = items.filter((item: Item) => item.packed).length;

  useEffect(() => {
    localStorage.setItem("ITEM_DATA", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleRemoveItem,
        handleToggleItem,
        handleCompleteAll,
        handleIncompleteAll,
        hadleResetToInitial,
        handleRemoveAllItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
