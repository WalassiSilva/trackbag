
import { useItemsContext } from "../lib/hooks";
import Button from "./Button";

export default function ButtonGroup() {
  const {
    hadleResetToInitial,
    handleRemoveAllItems,
    handleCompleteAll,
    handleIncompleteAll,
  } = useItemsContext();
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={handleCompleteAll}>
        Mark all as completed
      </Button>
      <Button buttonType="secondary" onClick={handleIncompleteAll}>
        Mark all as incompleted
      </Button>
      <Button buttonType="secondary" onClick={hadleResetToInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all Items
      </Button>
    </section>
  );
}
