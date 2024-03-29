import { Link } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";

function Header() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("navbar").style.top = "-150px";
    } else {
      document.getElementById("navbar").style.top = "0";
    }
  }

  return (
    <>
      <div className="header-body-div" id="navbar">
        <Link id="header-title-link" to="/">
          <h4 className="header-title">
            Nútímasafn
          </h4>
        </Link>
        <div className="header-menu-div">
          <div className="menu-list">
            <Link to="/Tickets">
              <p className="menu-item">Tickets</p>
            </Link>
            <Link to="/Membership">
              <p className="menu-item">Membership</p>
            </Link>
            <Link to="/Donation">
              <p className="menu-item">Make a donation</p>
            </Link>
            <Link to="/Contact">
              <p className="menu-item">Contact</p>
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

export default Header;
