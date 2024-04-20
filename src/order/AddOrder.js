import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddOrder() {
  let navigate = useNavigate();

  const [order, setOrder] = useState({
    itemId: "", // Change to "itemId" for consistency
    quantity: "",
  });

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    // Fetch items from backend API and update the itemList state
    axios.get("http://localhost:8080/items")
      .then(response => {
        setItemList(response.data);
      })
      .catch(error => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const { itemId, quantity } = order; // Change to "itemId" for consistency

  const onInputChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/orders", order);
    navigate("/Order");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Orders</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="itemId" className="form-label">
                Item
              </label>
              <select
                className="form-control"
                name="itemId" // Change to "itemId" for consistency
                value={itemId}
                onChange={(e) => onInputChange(e)}
              >
                <option value="">Select Item</option>
                {itemList.map(item => (
                  <option key={item.id} value={item.id}>{item.id}-{item.name}</option>
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
            <Link className="btn btn-outline-danger mx-2" to="/Order">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
