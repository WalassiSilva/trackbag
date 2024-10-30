
import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore((state) => state.markAllAsIncomplete);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={markAllAsComplete}>
        Mark all as completed
      </Button>
      <Button buttonType="secondary" onClick={markAllAsIncomplete}>
        Mark all as incompleted
      </Button>
      <Button buttonType="secondary" onClick={resetToInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={removeAllItems}>
        Remove all Items
      </Button>
    </section>
  );
}
