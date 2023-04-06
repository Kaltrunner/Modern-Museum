import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";


function ExploreNav() {
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
          <Link to="/Events">
            <p
              className="menu-item"
              id={currentPage === "/Events" ? "on" : ""}
            >
              Events
            </p>
          </Link>
          <Link to="/Membership">
            <p
              className="menu-item"
              id={currentPage === "/Membership" ? "on" : ""}
            >
              Exhibits
            </p>
          </Link>
          <Link to="/Donation">
            <p
              className="menu-item"
              id={currentPage === "/Donation" ? "on" : ""}
            >
              Café
            </p>
          </Link>
          <Link to="/Contact">
            <p
              className="menu-item"
              id={currentPage === "/Contact" ? "on" : ""}
            >
              Shop
            </p>
          </Link>
        </div>
      </div>
    </div>
     <ScrollToTop />
     </>
  );
}

export default ExploreNav;