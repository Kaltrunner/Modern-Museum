import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-body-div">
      <div className="footer-logo-div">
        <Link id="footer-logo-link" to="/">
          <h4 className="footer-logo">Nútímasafn</h4>
        </Link>
        <p id="cc">
          {" "}
          Designed and developed by{" "}
          <a
            id="portfolio-link"
            target="_blank"
            rel="noreferrer"
            href="https://erikmrussell.com/"
            alt=""
          >
            Erik Russell
          </a>
          <br />© 2023
        </p>
      </div>

      <div>
        <Link className="footer-links" to="/Tickets">
          <p className="footer-text">Tickets</p>
        </Link>
        <Link className="footer-links" to="/Membership">
          <p className="footer-text">Membership</p>
        </Link>
        <Link className="footer-links" to="/Donation">
          <p className="footer-text">Make a donation</p>
        </Link>
        <Link className="footer-links" to="/Contact">
          <p className="footer-text">Contact</p>
        </Link>
      </div>

      <div>
        <Link className="footer-links" to="/Events" ><p className="footer-text">Events</p></Link>
        <Link className="footer-links" to="/Exhibits" ><p className="footer-text">Exhibits</p></Link>
        <Link className="footer-links" to="/Cafe" ><p className="footer-text">Café</p></Link>
        <Link className="footer-links" to="/Shop" ><p className="footer-text">Shop</p></Link>
      </div>
    </div>
  );
}

export default Footer;
