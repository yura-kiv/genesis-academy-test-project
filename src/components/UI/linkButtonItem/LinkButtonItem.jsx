import React from "react";
import { Link } from "react-router-dom";
import "./LinkButtonItem.scss";

function LinkButtonItem({ to, children }) {
  return (
    <Link
      to={to}
      style={{ textDecoration: "none" }}
    >
      <div className="linkButtonItem">{children}</div>
    </Link>
  );
}

export default LinkButtonItem;
