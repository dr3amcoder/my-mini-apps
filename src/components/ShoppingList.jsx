import { useState, useMemo, useCallback } from "react";

const items = [
  "Apples",
  "Bananas",
  "Strawberries",
  "Blueberries",
  "Mangoes",
  "Pineapple",
  "Lettuce",
  "Broccoli",
  "Paper Towels",
  "Dish Soap",
];


const ShoppingList = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);

  const filteredItems = useMemo(
    () =>
      items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const toggleItem = useCallback(item => {
    setSelected(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  }, [setSelected]);

  return (
    <div className="container">
      <h2 className="title-md">Shopping List</h2>

      <div className="section">
        <label>Search items</label>
        <input
          className="input"
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <ul className="section">
        {filteredItems.map(item => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => toggleItem(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ShoppingList;