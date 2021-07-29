import React from "react";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faMapMarkerAlt, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const contact = document.querySelector("#contactitem");

export const UserItem = (props) => {

  return ReactDOM.createPortal(
    <div className="user-contact">

      <Link to={`/userlist`}>Close contact details
      </Link>

      <div className="user-contact__item">
        <FontAwesomeIcon icon={faEnvelope} />
        <div className="user-contact__props">
          <p>{props.email}</p>
          <p><b>Email</b></p>
        </div>
      </div>

      <div className="user-contact__item">
        <FontAwesomeIcon icon={faPhoneAlt} />
        <div className="user-contact__props">
          <p>{props.phone}</p>
          <p><b>Mobile</b></p>
        </div>
      </div>

      <div className="user-contact__item">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <div className="user-contact__props">
          <p>{`${props.address.zipcode} ${props.address.city} ${props.address.street}, ${props.address.suite}`}</p>
          <p><b>Work</b></p>
        </div>
      </div>

      <div className="user-contact__item">
        <FontAwesomeIcon icon={faProjectDiagram} />
        <div className="user-contact__props">
          <p>{`${props.company.catchPhrase} ${props.company.bs}`}</p>
          <p><b>Segments</b></p>
        </div>
      </div>

    </div>,
    contact
  );
}
