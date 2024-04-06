import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditOrder() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [order, setOrder] = useState({
    itemId: "", // Change to "itemId" for consistency
    quantity: "",
  });

  const { itemId, quantity } = order;

  const onInputChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadInventory();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/orders/${id}`, order);
    navigate("/Order");
  };

  const loadInventory = async () => {
    const result = await axios.get(`http://localhost:8080/orders/${id}`);
    setOrder(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Order</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="itemId" className="form-label">
                Item ID
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the item ID"
                name="itemId"
                value={itemId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
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
