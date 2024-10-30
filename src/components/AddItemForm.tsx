import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({
  onAddItem,
}: {
  onAddItem: (newItemText: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [itemText, setItemText] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!itemText) {
      alert("Please add an item");
      inputRef.current!.focus();
      return;
    }

    onAddItem(itemText);

    setItemText("");
    inputRef.current!.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Item</h2>
      <input
        type="text"
        ref={inputRef}
        value={itemText}
        onChange={handleInputChange}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
