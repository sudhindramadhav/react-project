import React from "react";
 // Import CSS file for styling
import './Contact.css';
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div className="table-container overflow-x-auto"> {/* Use a container for responsiveness */}
      <h1> Technical Event Coordinators</h1>
        <table className="table"> {/* Add a class for table styling */}
          <thead>
            <tr>
              <th>Coordinator</th>
              <th>Event Incharge</th>
              <th>Contact Number</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><Link to='/idea_blitz'>Click me</Link></td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>fdg</td>
              <td>acd</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contact;
