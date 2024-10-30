type CounterProps = {
  numberOfItemsPacked: number;
  numberOfItems: number;
};

export default function Counter({ numberOfItemsPacked, numberOfItems }: CounterProps) {
  return (
    <p>
      <b>
        {numberOfItemsPacked} / {numberOfItems} items packed
      </b>
    </p>
  );
}
