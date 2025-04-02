import { useState } from "react";
import Item from "./Item.js";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, SetSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div>
        <select
          value={sortBy}
          className="actions"
          onChange={(e) => SetSortBy(e.target.value)}
        >
          <option value="input"> Sort by input order</option>
          <option value="description"> Sort by description</option>
          <option value="packed"> Sort by packed</option>
        </select>
        <button className="clear" onClick={onClearList}>
          Clear list
        </button>
      </div>
    </div>
  );
}
