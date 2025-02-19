import React from "react";
const ContactCard = (props) => {
  return (
    <div className={props.className} style={{width: "18rem"}} onClick={props.onClick}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {props.number}
        </h6>
        <p className="card-text">
          {props.email}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
