import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [item, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/items");
    setItems(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/items/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4" style={{ marginLeft: '10%', width: '90%' }}>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Item Category</th>
            </tr>
          </thead>
          <tbody>
            {item.map((item, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.itemCategory}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewitem/${item.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edititem/${item.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(item.id)}
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
