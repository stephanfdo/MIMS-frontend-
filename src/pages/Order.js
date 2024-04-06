import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Inventory() {
  const [order, setInventory] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/orders");
      console.log(result.data); // Add this line
      setInventory(result.data);
    } catch (error) {
      console.error("Error loading inventory:", error);
    }
  };

  
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/orders/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4" style={{ marginLeft: '10%', width: '90%' }}>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Item ID</th>
              <th scope="col">Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {order.map((order, index) => (
              <tr key={order.id}>
                <th scope="row">{index + 1}</th>
                <td>{order.itemId}</td>
                <td>{order.quantity}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/vieworder/${order.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editorder/${order.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(order.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
