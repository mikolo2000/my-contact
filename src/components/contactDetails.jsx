import React from "react";


const ContactDetails = (props) => {
  return (
    <div className="position relative">
      <div className="position-fixed top-20 start-40">
          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{props.firstName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{props.lastName}</td>
              </tr>
              <tr>
                <td>Email Address</td>
                <td>{props.email}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{props.gender}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{props.age}</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>{props.phone}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default ContactDetails;
