import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditLocation() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [location, setInventory] = useState({
    name: "", // Change to "itemId" for consistency
    location: "",
  });

  const { name, description } = location;

  const onInputChange = (e) => {
    setInventory({ ...location, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadInventory();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/locations/${id}`, location);
    navigate("/Location");
  };

  const loadInventory = async () => {
    const result = await axios.get(`http://localhost:8080/locations/${id}`);
    setInventory(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Location</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="itemId" className="form-label">
                Location Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the location name"
                name="name"
                value={name}
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
