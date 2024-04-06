import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditSupplier() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [supplier, setSupplier] = useState({
    name: "",
    contactNumber:"",
    location: "",
  });

  const { name, contactNumber,location } = supplier;

  const onInputChange = (e) => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/suppliers/${id}`, supplier);
    navigate("/Supplier");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/suppliers/${id}`);
    setSupplier(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Suppliers</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Supplier name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter supplier Contact Number"
                name="contactNumber"
                value={contactNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Supplier Location"
                name="location"
                value={location}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Supplier">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
