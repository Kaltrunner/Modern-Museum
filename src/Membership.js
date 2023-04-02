import ComponentNav from "./ComponentNav";
import Footer from "./Footer";

function Membership() {
  return (
    <>
      <ComponentNav />
      <div className="nav-links-body-div">
        <div className="member-landing">
          <div className="member-landing-text">
            <h1 className="comp-header-text">Become a member</h1>
            <p className="p-text">
              Membership at Nútímasafn offers a rich variety of specialized
              benefits that give you a deeper connection with the art in our
              galleries. From free admission and guest passes on every visit, to
              Member Preview Days for new exhibitions and discounts on dining
              and shopping, it’s all waiting for you as a Member. Choose the
              plan that inspires you below.
            </p>
            <p className="p-text">
              We've streamlined your admission experience! Members no longer
              need an advance reservation to ensure Museum entry. Simply show up
              with your Membership information.
            </p>
          </div>
          <div className="member-landing-img">
            <img
              id="memeber-img"
              src="https://images.unsplash.com/photo-1547792840-c766f085e649?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="memeber-body">
        <div></div>
        <div></div>

        <div></div>
        <div></div>
        
        <div></div>
        <div></div>
      </div>
      <div className="ticket-line-div"></div>
      <Footer />
    </>
  );
}

export default Membership;
