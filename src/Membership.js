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
              <button className="join-btn-class"  id="purchase-btn">
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
          <div className="top-half">
            <h4 className="top-half-head">Member with Evening Hours</h4>
            <h4 className="top-half-cost">$210 per year</h4>
            <div className="top-info">
              <h6 className="memeber-card-margin">2 Member Cards + 2 Guests</h6>
              <p className="top-text">
                Plus behind-the-scenes evening access to new exhibitions and
                more
              </p>
              <p className="top-text">
                Within the limits prescribed by law, $104 is not tax-deductible
              </p>
              <button className="join-btn-class"  id="purchase-btn">
                Join
              </button>
            </div>
          </div>

          <div className="bottom-half">
            <p className="member-text">
              Free Admission for 2 Member cardholders and 2 guests every visit
              (and children under 18)
            </p>
            <div className="line-div"></div>
            <h6 id="memeber-card-text">Access to The Balcony Lounge</h6>
            <h6 id="memeber-card-text">
              Print and Digital Quarterly Nútímasafn Bulletin{" "}
            </h6>
            <h6 id="memeber-card-text">Curator's Cut - Archive</h6>
            <h6 id="memeber-card-text">
              Access to Nútímasafn Delivered Archive
            </h6>
            <h6 id="memeber-card-text">Member Morning Hours</h6>
            <h6 id="memeber-card-text">Member Preview Days </h6>
            <h6 id="memeber-card-text">Nútímasafn After Hours</h6>
          </div>
        </div>

        <div className="member-plan-div">
          <div className="top-half">
            <h4 className="top-half-head">Member with Opening Nights</h4>
            <h4 className="top-half-cost">$600 per year</h4>
            <div className="top-info">
              <h6 className="memeber-card-margin">2 Member cards + 4 guests</h6>
              <p className="top-text">
                Plus behind-the-scenes daytime access to new exhibitions with
                curators, art historians and Museum experts
              </p>
              <p className="top-text">
                Within the limits prescribed by law, $254 is not tax-deductible
              </p>
              <button className="join-btn-class"  id="purchase-btn">
                Join
              </button>
            </div>
          </div>

          <div className="bottom-half">
            <p className="member-text">
              Free Admission for 2 Member cardholders and 4 guests every visit
              (and children under 18)
            </p>
            <div className="line-div"></div>
            <h6 id="memeber-card-text">Access to The Balcony Lounge </h6>
            <h6 id="memeber-card-text">
              Print and Digital Quarterly Nútímasafn Bulletin
            </h6>
            <h6 id="memeber-card-text">Curator's Cut - Archive</h6>
            <h6 id="memeber-card-text">Access to Met Delivered Archives</h6>
            <h6 id="memeber-card-text">Member Morning Hours</h6>
            <h6 id="memeber-card-text">Member Preview Days </h6>
            <h6 id="memeber-card-text">Nútímasafn After Hours</h6>
            <h6 id="memeber-card-text">
              Evening Receptions for Special Exhibitions{" "}
            </h6>
          </div>
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
            src="https://images.unsplash.com/photo-1650237375592-e71c57146403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>

      <div className="line-div"></div>

      <div className="questions-div">
        <h6 id="questions-header-text">Qustions</h6>
        <div className="questions-text-div">
          <div className="questions-text">
            <p id="questions-text-thick">
              When do Memberships begin and can I delay the start?
            </p>
            <p id="questions-text-thin">
              Your Membership is active from the date of purchase. Memberships
              cannot be delayed and are active from the date of purchase. We
              recommend purchasing your personal or gift Membership closer to
              the date you would like it to begin.
            </p>
          </div>
          <div className="questions-text">
            <p id="questions-text-thick">
              Can I purchase a Membership as a gift?
            </p>
            <p id="questions-text-thin">
              A Membership at The Met makes the perfect gift for all occasions!
              Select the level you'd like from the options at the top of the
              page, and you'll be able to enter the recipient's information on
              the next page.
            </p>
          </div>
          <div className="questions-text">
            <p id="questions-text-thick">
              How long does it take to receive Membership Cards and can I visit
              without one?
            </p>
            <p id="questions-text-thin">
              Membership cards take about 4-6 weeks to arrive. Members may
              always visit and shop without their card. If you do not have your
              card for an upcoming visit, please check in at our Membership Desk
              or any admissions desk with your ID number or name.
            </p>
          </div>
        </div>
      </div>

      <div className="line-div"></div>
      <Footer />
    </>
  );
}

export default Membership;
