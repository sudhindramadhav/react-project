import React from "react"
import "C:/Users/DELL/OneDrive/Desktop/example/src/App.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="table-container">
      <table className="my-table">
        <thead>
          <tr>
            <th>Coordinator </th>
            <th>Incharge </th>
            <th>Contact Number</th>
            <th>Registration Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>...........</td>
            <td>...........</td>
            <td>...........</td>
            <td><Link to="/my-component">click here to register</Link></td>
          </tr>
          <tr>
            <td>...........</td>
            <td>...........</td>
            <td>...........</td>
            <td><Link to="/my-component">click here to register</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}
export default Contact
