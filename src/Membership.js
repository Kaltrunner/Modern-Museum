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

      <div className="middle-body-div">
        <h4 className="middle-body-head">Membership</h4>
        <h6 className="middle-body-text">
          One <span id="middle-span">iconic</span> Museum. Many{" "}
          <span id="middle-span">Membership</span> possibilities.
        </h6>
      </div>

      <div className="memeber-body">
        <div className="member-plan-div">
          <div className="top-half">
            <h4 className="top-half-head">Member with Early Views</h4>
            <h4 className="top-half-cost">$120 per year</h4>
            <div className="top-info">
              <h6 className="memeber-card-margin">1 Member Card + 1 Guest</h6>
              <p className="top-text">
                Plus behind-the-scenes daytime access to new exhibitions and
                more
              </p>
              <p className="top-text">
                Within the limits prescribed by law, $44 is not tax-deductible
              </p>
              <button className="join-btn-class" id="join-btn">
                Join
              </button>
            </div>
          </div>

          <div className="bottom-half">
            <p className="member-text">
              Free admission for 1 Member cardholder and 1 guest every visit
              (and children under 18)
            </p>
            <div className="line-div"></div>
            <h6 id="memeber-card-text">Digital Bulletin</h6>
            <h6 id="memeber-card-text">Curator's Cut - Archive</h6>
            <h6 id="memeber-card-text">Member Morning Hours </h6>
            <h6 id="memeber-card-text">Member Preview Days</h6>
          </div>
        </div>

        <div className="member-plan-div">
          <div className="top-half"></div>
          <div className="bottom-half"></div>
        </div>

        <div className="member-plan-div">
          <div className="top-half"></div>
          <div className="bottom-half"></div>
        </div>
      </div>
      <div className="line-div"></div>
      <div className="last-past-div">
        <div className="includes-div">
          <h4>All levels include:</h4>
          <h6>Museum Discounts:</h6>
          <p>
            – 10% discount on all public restaurants and venues at Nútímasafn
            (excluding all alcoholic beverages)
            <br />
            – 10% off at The Nútímasafn Store, plus seasonal 20% off
            <br /> – 10% off Museum parking
          </p>
          <h6>Insider Updates::</h6>
          <p>
            – Invitations to Members-only in person and virtual events
            <br /> – Member email newsletter
            <br /> – What's On calendar
          </p>
        </div>
        <div className="includes-img-div">
          <img
            id="includes-img"
            src="https://images.unsplash.com/photo-1547636546-42e54cb26e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
      </div>

      <div className="line-div"></div>
      <Footer />
    </>
  );
}

export default Membership;
