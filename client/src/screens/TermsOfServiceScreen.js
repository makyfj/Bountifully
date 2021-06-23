import React from "react";
import termsOfService from "../termsOfService";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";

const TermsOfServiceScreen = () => {
  return (
    <Media>
      <Link to="/" className="btn btn-dark">
        Go Back
      </Link>
      <h1 className="text-center">Terms and Conditions</h1>
      {termsOfService.map((term) => (
        <Media.Body key={term.id}>
          <h3 className="text-center">{term.title}</h3>
          <p>{term.description}</p>
        </Media.Body>
      ))}
    </Media>
  );
};

export default TermsOfServiceScreen;
