import React, { useState, useEffect } from 'react';

const Restaurant = () => {
  const [id, setId] = useState('');
  const [price, setPrice] = useState('');
  const [dish, setDish] = useState('');
  const [tableNo, setTableNo] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id && price && dish && tableNo) {
      const newItem = {
        id,
        price,
        dish,
        tableNo,
      };
      const updatedItems = [...items, newItem];
      localStorage.setItem('items', JSON.stringify(updatedItems));
      setItems(updatedItems);
      setId('');
      setPrice('');
      setDish('');
      setTableNo('');
    }
  };

  const handleDelete = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Unique Order ID:</label>
        <input type="number" id="id" name="id" required value={id} onChange={(e) => setId(e.target.value)} />

        <label htmlFor="price">Choose Price:</label>
        <input type="number" id="price" name="price" required value={price} onChange={(e) => setPrice(e.target.value)} />

        <label htmlFor="dish">Choose Dish</label>
        <input type="text" id="dish" name="dish" required value={dish} onChange={(e) => setDish(e.target.value)} />

        <label htmlFor="tableNo">Choose a Table:</label>
        <select
          id="tableNo"
          name="tableNo"
          required
          value={tableNo}
          onChange={(e) => setTableNo(e.target.value)}
        >

          <option value="Choose Table No">Choose Table No</option>
          <option value="Table 1">Table 1</option>
          <option value="Table 2">Table 2</option>
          <option value="Table 3">Table 3</option>
        </select>

        <input type="submit" value="Add to bill" />
      </form>

      <h1>Orders</h1>

      <h3>Table 1</h3>
      <ul>
        {items.map((item) => {
          if (item.tableNo === 'Table 1') {
            return (
              <li key={item.id}>
                ID: {item.id} - Rs{item.price} - {item.dish}
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                  Delete Order
                </button>
              </li>
            );
          }
          return null;
        })}
      </ul>

      <h3>Table 2</h3>
      <ul>
        {items.map((item) => {
          if (item.tableNo === 'Table 2') {
            return (
              <li key={item.id}>
                ID: {item.id} - Rs{item.price} - {item.dish}
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                  Delete Order
                </button>
              </li>
            );
          }
          return null;
        })}
      </ul>

      <h3>Table 3</h3>
      <ul>
        {items.map((item) => {
          if (item.tableNo === 'Table 3') {
            return (
              <li key={item.id}>
                ID: {item.id} - Rs{item.price} - {item.dish}
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                  Delete Order
                </button>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default Restaurant;