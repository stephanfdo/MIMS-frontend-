import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddInventory() {
  let navigate = useNavigate();

  const [inventory, setInventory] = useState({
    itemId: "", // Change to "itemId" for consistency
    quantity: "",
  });

  const [items, setItems] = useState([]); // State to hold items fetched from the backend

  useEffect(() => {
    fetchItems(); // Fetch items when component mounts
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:8080/items");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const { itemId, quantity } = inventory; // Change to "itemId" for consistency

  const onInputChange = (e) => {
    setInventory({ ...inventory, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/inventory", inventory);
    navigate("/Inventory");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Inventories</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="itemId" className="form-label">
                Select Item
              </label>
              <select
                className="form-control"
                name="itemId"
                value={itemId}
                onChange={(e) => onInputChange(e)}
              >
                <option value="">Select an item</option>
                {items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.id} - {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Inventory">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
