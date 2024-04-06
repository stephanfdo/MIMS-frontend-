import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddOrder() {
  let navigate = useNavigate();

  const [order, setOrder] = useState({
    itemId: "", // Change to "itemId" for consistency
    quantity: "",
    
  });

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
              <label htmlFor="Name" className="form-label">
                Item ID
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter item ID"
                name="itemId" // Change to "itemId" for consistency
                value={itemId} // Change to "itemId" for consistency
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Quantity
              </label>
              <input
                type={"text"}
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
