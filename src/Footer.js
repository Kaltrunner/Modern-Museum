import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-body-div">
      <div className="footer-logo-div">
        <Link id="footer-logo-link" to="/">
          <h4 className="footer-logo">Nútímasafn</h4>
        </Link>
        {/* <p id="cc" >© 2023 Erik Russell</p> */}
      </div>

      <div>
        <Link to="/Tickets">
          <p className="footer-text">Tickets</p>
        </Link>
        <Link to="/Membership">
          <p className="footer-text">Membership</p>
        </Link>
        <Link to="/Donation">
          <p className="footer-text">Make a donation</p>
        </Link>
        <Link to="/Contact">
          <p className="footer-text">Contact</p>
        </Link>
      </div>

      <div>
        <p className="footer-text">Events</p>
        <p className="footer-text">Exhibits</p>
        <p className="footer-text">Café</p>
        <p className="footer-text">Shop</p>
      </div>

      <div className="">
        <p className="footer-text">
          <a
            className="tag"
            href="mailto:erikrussells@gmail.com?subject=Hello!"
          >
            erikrussells@gmail.com
          </a>
        </p>

        <p className="footer-text">
          <a
            className="tag"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/erik-russell-software-engineer/"
          >
            LinkedIn
          </a>
        </p>

        <p className="footer-text">
          <a
            className="tag"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Kaltrunner"
          >
            GitHub
          </a>
        </p>

        <p className="footer-text">
          <a
            className="tag"
            target="_blank"
            rel="noreferrer"
            href="https://www.erikmrussell.com"
          >
            Portfolio
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
