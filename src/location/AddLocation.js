import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddInventory() {
  let navigate = useNavigate();

  const [location, setInventory] = useState({
    name: "", // Change to "itemId" for consistency
    description: "",
    
  });

  const { name, description } = location; // Change to "itemId" for consistency

  const onInputChange = (e) => {
    setInventory({ ...location, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/locations", location);
    navigate("/Location");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Location</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Location Name"
                name="name" // Change to "itemId" for consistency
                value={name} // Change to "itemId" for consistency
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Location">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
