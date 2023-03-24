function Footer() {
  return (
    <div className="footer-body-div">
      <div className="">
        <h4 className="footer-logo">Nútímasafn</h4>
        <p>© 2023 Erik Russell</p>
      </div>

      <div>
        <ul>
          <p className="footer-text">Tickets</p>
          <p className="footer-text">Membership</p>
          <p className="footer-text">Featured</p>
          <p className="footer-text">Contact</p>
        </ul>
      </div>

      <div>
        <ul>
          <p className="footer-text">Events</p>
          <p className="footer-text">Exhibits</p>
          <p className="footer-text">Café</p>
          <p className="footer-text">Shop</p>
        </ul>
      </div>

      <div className="">
        <ul>
          <p className="footer-text" >
            <a 
              className="tag"
              href="mailto:erikrussells@gmail.com?subject=Hello!"
            >
              erikrussells@gmail.com
            </a>
          </p>

          <p className="footer-text"><a className="tag" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/erik-russell-software-engineer/">LinkedIn</a></p>

          <p className="footer-text"><a className="tag" target="_blank" rel="noreferrer" href="https://github.com/Kaltrunner" >GitHub</a></p>

          <p className="footer-text" ><a className="tag" target="_blank" rel="noreferrer" href="https://www.erikmrussell.com">Portfolio</a></p>

        </ul>
      </div>
      
    </div>
  );
}

export default Footer;
