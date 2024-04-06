import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [supplier, setSupplier] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/suppliers");
    setSupplier(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/suppliers/${id}`);
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
              <th scope="col">Contact Number</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {supplier.map((supplier, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{supplier.name}</td>
                <td>{supplier.contactNumber}</td>
                <td>{supplier.location}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewsupplier/${supplier.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editsupplier/${supplier.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(supplier.id)}
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
