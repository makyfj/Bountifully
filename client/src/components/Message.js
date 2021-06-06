import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

// Default alert
Message.defaultProps = {
  variant: "danger",
};
export default Message;
