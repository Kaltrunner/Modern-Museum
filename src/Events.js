import ExploreNav from "./ExploreNav";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Events() {
  return (
    <>
      <ExploreNav />
      <div className="events-body-div">
        <div className="events-header-div">
          <h1 className="comp-header-text">Upcoming Events</h1>
        </div>
        <div className="events-div">
          <h4 className="comp-sub-header" >Events</h4>
          <div className="event-grid-div">
            <div className="event">
              <div id="event-img-div"></div>
              <img
                id="event-img"
                src="https://images.unsplash.com/photo-1679433860632-5e13d40de732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1511&q=80"
                alt=""
              />
              <div id="event-text-div">
                <h4>Public Event</h4>
                <h6>
                  Conversations with ... Beyond the Light: Identity and Place in
                  Nineteenth-Century Danish Ar
                </h6>
                <p>Free with Museum admission.</p>
              </div>
              <div id="event-text-btn-div">
                <h4>
                  11:00 am
                  <br /> The Nútímasafn
                </h4>
                <button id="purchase-btn">
                  <Link id="event-link" to="/Tickets">
                    Join Us
                  </Link>
                </button>
              </div>
            </div>
            <div className="event"></div>
            <div className="event"></div>
            <div className="event"></div>
            <div className="event"></div>
          </div>
        </div>
      </div>
      <div className="line-div"></div>
      <Footer />
    </>
  );
}

export default Events;
