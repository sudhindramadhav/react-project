import React from "react";
import "C:/Users/DELL/OneDrive/Desktop/example/src/Contact.css"; // Import CSS file for styling

const Contact = () => {
  return (
    <>
      <div className="table-container"> {/* Use a container for responsiveness */}
      <h1> Technical Event Coordinators</h1>
        <table className="table"> {/* Add a class for table styling */}
          <thead>
            <tr>
              <th>Coordinator</th>
              <th>Event Incharge</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
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
