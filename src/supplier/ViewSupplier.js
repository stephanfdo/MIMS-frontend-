import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewSupplier() {
  const [supplier, setSupplier] = useState({
    name: "",
    contactNumber: "",
    location: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/suppliers/${id}`);
    setSupplier(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Supplier Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {supplier.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {supplier.name}
                </li>
                <li className="list-group-item">
                  <b>Contact Number:</b>
                  {supplier.contactNumber}
                </li>
                <li className="list-group-item">
                  <b>Location:</b>
                  {supplier.location}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/Supplier"}>
            Back to Suppliers
          </Link>
        </div>
      </div>
    </div>
  );
}
