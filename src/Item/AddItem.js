import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddItem() {
  let navigate = useNavigate();

  const [item, setItem] = useState({
    name: "",
    price: "",
    itemCategory: "",
    
  });

  const { name,price, itemCategory } = item;

  const onInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/items", item);
    navigate("/Item");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Items</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Item Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Item Price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="itemCategory" className="form-label">
                Item Category
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Item Category"
                name="itemCategory"
                value={itemCategory}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Item">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
