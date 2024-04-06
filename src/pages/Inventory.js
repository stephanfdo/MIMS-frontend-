import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Inventory() {
  const [inventory, setInventory] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/inventory");
      console.log(result.data); // Add this line
      setInventory(result.data);
    } catch (error) {
      console.error("Error loading inventory:", error);
    }
  };

  
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/inventory/${id}`);
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
            {inventory.map((inventory, index) => (
              <tr key={inventory.id}>
                <th scope="row">{index + 1}</th>
                <td>{inventory.itemId}</td>
                <td>{inventory.quantity}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewinventory/${inventory.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editinventory/${inventory.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(inventory.id)}
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
