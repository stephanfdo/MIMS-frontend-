import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditInventory() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [inventory, setInventory] = useState({
    itemId: "", // Change to "itemId" for consistency
    quantity: "",
  });

  const { itemId, quantity } = inventory;

  const onInputChange = (e) => {
    setInventory({ ...inventory, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadInventory();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/inventory/${id}`, inventory);
    navigate("/Inventory");
  };

  const loadInventory = async () => {
    const result = await axios.get(`http://localhost:8080/inventory/${id}`);
    setInventory(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Inventory</h2>
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
            <Link className="btn btn-outline-danger mx-2" to="/Inventory">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
