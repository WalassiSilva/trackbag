import { create } from "zustand";
import { initialItems } from "../lib/contants";
import { Item } from "../types";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,

      addItem: (newItemText: string) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };
        set((state: { items: Item[] }) => ({
          items: [...state.items, newItem],
        }));
      },
      removeItem: (id: number) => {
        set((state: { items: Item[] }) => {
          const newItems = state.items.filter((item: Item) => item.id !== id);
          return { items: newItems };
        });
      },
      toggleItem: (id: number) => {
        set((state: { items: Item[] }) => {
          const newItems = state.items.map((item: Item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });
          return { items: newItems };
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({
          items: initialItems,
        }));
      },
      markAllAsComplete: () => {
        set((state: { items: Item[] }) => {
          const newItems = state.items.map((item: Item) => ({
            ...item,
            packed: true,
          }));
          return { items: newItems };
        });
      },
      markAllAsIncomplete: () => {
        set((state: { items: Item[] }) => {
          const newItems = state.items.map((item: Item) => ({
            ...item,
            packed: false,
          }));
          return { items: newItems };
        });
      },
    }),
    { name: "STORED_ITEMS" }
  )
);
