interface Props {
  item: string;
  quantity: number;
}

export const ItemCounter = ({ item, quantity }: Props) => {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    }}>
      <span
        style={{
          width: 150,
        }}
      >
        {item}
      </span>
      <button>-1</button>
      <span>{quantity}</span>
      <button>+1</button>
    </section>
  );
}
