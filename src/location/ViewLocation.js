import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewInventory() {
  const [location, setInventory] = useState({
    name: "",
    description: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/locations/${id}`);
    setInventory(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Location Details</h2>

          <div className="card">
            <div className="card-header">
              Details of location id : {location.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {location.name}
                </li>
                <li className="list-group-item">
                  <b>Description:</b>
                  {location.description}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/Location"}>
            Back to Location
          </Link>
        </div>
      </div>
    </div>
  );
}
