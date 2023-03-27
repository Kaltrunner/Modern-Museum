import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ComponentNav() {

  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <div className="header-body-div" id="navbar">
      <Link to="/">
        <h4 className="header-title">Nútímasafn</h4>
      </Link>
      <div className="header-menu-div">
        <div className="menu-list">
          <Link to="/Tickets">
            <p className="menu-item" id={currentPage === "/Tickets" ? "on" : ""} >Tickets</p>
          </Link>
          <Link to="/Membership">
            <p className="menu-item" id={currentPage === "/Membership" ? "on" : ""} >Membership</p>
          </Link>
          <Link to="/Donation">
            <p className="menu-item" id={currentPage === "/Donation" ? "on" : ""} >Make a donation</p>
          </Link>
          <Link to="/Contact">
            <p className="menu-item" id={currentPage === "/Contact" ? "on" : ""} >Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComponentNav;
