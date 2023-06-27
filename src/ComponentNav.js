import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function ComponentNav() {
  const [currentPage, setCurrentPage] = useState("");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 140 ||
      document.documentElement.scrollTop > 140
    ) {
      document.getElementById("navbar").style.top = "-150px";
    } else {
      document.getElementById("navbar").style.top = "0";
    }
  }

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <>
      <div className="header-body-div" id="navbar">
        <Link to="/">
          <h4 className="header-title">Nútímasafn</h4>
        </Link>
        <div className="header-menu-div">
          <div className="menu-list">
            <Link to="/Tickets">
              <p
                className="menu-item"
                id={currentPage === "/Tickets" ? "on" : ""}
              >
                Tickets
              </p>
            </Link>
            <Link to="/Membership">
              <p
                className="menu-item"
                id={currentPage === "/Membership" ? "on" : ""}
              >
                Membership
              </p>
            </Link>
            <Link to="/Donation">
              <p
                className="menu-item"
                id={currentPage === "/Donation" ? "on" : ""}
              >
                Make a donation
              </p>
            </Link>
            <Link to="/Contact">
              <p
                className="menu-item"
                id={currentPage === "/Contact" ? "on" : ""}
              >
                Contact
              </p>
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

export default ComponentNav;
