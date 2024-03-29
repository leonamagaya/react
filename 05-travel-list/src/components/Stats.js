export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Start adding items to your packing list 🧳</p>;

  const numItems = items.length;
  const packedItems = items.reduce(
    (acc, cur) => (cur.packed ? acc + 1 : acc + 0),
    0
  );
  const percentage = Math.floor((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everthing!! Enjoy your trip 🏖️"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${packedItems} things. (${percentage}%)`}
      </em>
    </footer>
  );
}
