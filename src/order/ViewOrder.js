import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewOrder() {
  const [order, setInventory] = useState({
    itemId: "",
    quantity: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/orders/${id}`);
    setInventory(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Order Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Order id : {order.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {order.itemId}
                </li>
                <li className="list-group-item">
                  <b>UserName:</b>
                  {order.quantity}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/order"}>
            Back to Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
