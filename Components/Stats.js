export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding something to the packet list</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPackedPercent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {numPackedPercent === 100 ? (
        "You got everything to go"
      ) : (
        <em>
          👜You have {numItems} items in list and already packed {numPacked} (
          {numPackedPercent} %)
        </em>
      )}
    </footer>
  );
}
