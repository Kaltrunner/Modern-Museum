import { Link } from "react-router-dom";
import { useState } from "react";
import ComponentNav from "./ComponentNav";
import Footer from "./Footer";

function Tickets() {

  const [ticketCountAdult, setTicketCountAdult] = useState(0);
  const [ticketCountChild, setTicketCountChild] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  const [ticketCountStudent, setTicketCountStudent] = useState(0);
  const totalTicketCount = ticketCountAdult + ticketCountChild + ticketCountStudent + ticketCount;


  const addTicketAdult = () => {
    setTicketCountAdult((prevCount) => prevCount + 1);
  };
  const addTicketChild = () => {
    setTicketCountChild((prevCount) => prevCount + 1);
  };
  const addTicketStudent = () => {
    setTicketCountStudent((prevCount) => prevCount + 1);
  };
  const addTicket = () => {
    setTicketCount((prevCount) => prevCount + 1);
  };

  const decrementTicketAdult = () => {
    if (ticketCountAdult > 0) {
      setTicketCountAdult((prevCount) => prevCount - 1);
    }
  };
  const decrementTicketChild = () => {
    if (ticketCountChild > 0) {
      setTicketCountChild((prevCount) => prevCount - 1);
    }
  };
  const decrementTicketStudent = () => {
    if (ticketCountStudent > 0) {
      setTicketCountStudent((prevCount) => prevCount - 1);
    }
  };
  const decrementTicketSenior = () => {
    if (ticketCount > 0) {
      setTicketCount((prevCount) => prevCount - 1);
    }
  };

  const decrementButtonClassesAdult =
    ticketCountAdult === 0 ? "disabled" : "sub-ticket-btn";
  const decrementButtonClassesChild =
    ticketCountChild === 0 ? "disabled" : "sub-ticket-btn";
  const decrementButtonClassesStudent =
    ticketCountStudent === 0 ? "disabled" : "sub-ticket-btn";
  const decrementButtonClasses =
    ticketCount === 0 ? "disabled" : "sub-ticket-btn";

  return (
    <>
      <ComponentNav />
      <div className="nav-links-body-div" id="tickets">
        <h1 className="comp-header-text">Admission Tickets</h1>
        <div className="ticket-div">
          <div className="ticket-info">
            <h6 className="comp-sub-header">
              New York State residents and NY, NJ, students:
            </h6>
            <p> — The amount you pay for tickets is up to you.</p>
            <p className="p-text">
              — If you wish to pay less than the general admission ticket
              prices, you may purchase your ticket from The Nútímasafn with a
              valid ID. No advance reservations are required.
              <br />
            </p>

            <div className="ticket-line-div"></div>

            <p className="p-text">
              There are no additional costs for exhibitions. Your ticket
              provides same-day entry to Nútímasafn. Continue to purchase a
              ticket below if you do not already have a pass or voucher for
              admission to the Museum.
            </p>
            <p className="p-text">
              Members: Your card is your ticket, no reservations required. Once
              inside, present your card and proceed to the galleries.
            </p>
            <p className="p-text">
              Visiting in a group? For information about bringing an adult or
              student group or scheduling a group tour, see Group Visits.
            </p>

            <div className="join-today-div">
              <>
                <p className="p-text" id="p-text-join">
                  <span id="ticket-p">Become a Member</span>
                  <br />
                  Enjoy unlimited free admission for you and your guest(s) on
                  every visit.
                </p>
              </>
              <Link to="/Membership">
                <button id="join-btn">
                  <p className="p-text-btn">Join today</p>
                </button>
              </Link>
            </div>
          </div>

          <div className="ticket-prices">
            <h6 className="comp-sub-header">General Admission Tickets</h6>
            <p className="p-text">
              $30 for adults; $20 for seniors; $15 for students and $5 for
              children.
            </p>
            <div className="ticket-line-div"></div>
            <p className="p-text">
              To purchase general admission tickets in advance, call the museum
              to talk to a represenitive.
            </p>
            <div className="ticket-line-div"></div>
            <p className="p-text">
              Admission is free for a caregiver accompanying a visitor with a
              disability.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="line-div"></div>
        <div className="ticket-buy-div">
          <div className="add-to-cart">
            <div className="cart-text-div">
              <p className="p-text">Number of tickets: {totalTicketCount}</p>
              <p className="p-text">Subtotal ${}</p>
              <p className="p-text">${}</p>
            </div>
            <div className="purchase-btn-div">
              <button id="purchase-btn">purchase</button>
            </div>
          </div>

          <div className="choose-ticket">
            <h6 className="comp-sub-header">Choose Tickets</h6>
            <p className="p-text">
              Choose the number of & type of tickets that you need, then
              navigate to the purchase section to checkout.
            </p>
            <div>
              <div className="ticket-line-div"></div>
              <div id="ticket-row">
                <p className="p-text" id="ticket-p">
                  Adult Admission
                </p>
                <div className="ticket-veiw-div">
                  <p>$30.00</p>
                  <button onClick={decrementTicketAdult}
                    className={decrementButtonClassesAdult}
                    id="decrementButton">
                    {" "}
                    <p id="ticket-values">-</p>{" "}
                  </button>
                  <div className="ticket">
                    {" "}
                    <p id="ticket-values">{ticketCountAdult}</p>{" "}
                  </div>
                  <button onClick={addTicketAdult}
                    className="ticket-btn"
                    id="addButton">
                    {" "}
                    <p id="ticket-values">+</p>{" "}
                  </button>
                </div>
              </div>
              <div className="ticket-line-div"></div>
              <div id="ticket-row">
                <p className="p-text" id="ticket-p">
                  Child Admission
                  <br />
                  <span id="ticket-p-thin">under 12</span>
                </p>
                <div className="ticket-veiw-div">
                  <p>$5.00</p>
                  <button  onClick={decrementTicketChild}
                    className={decrementButtonClassesChild}
                    id="decrementButton">
                    {" "}
                    <p id="ticket-values">-</p>{" "}
                  </button>
                  <div className="ticket">
                    {" "}
                    <p id="ticket-values">{ticketCountChild}</p>{" "}
                  </div>
                  <button onClick={addTicketChild}
                    className="ticket-btn"
                    id="addButton">
                    {" "}
                    <p id="ticket-values">+</p>{" "}
                  </button>
                </div>
              </div>

              <div className="ticket-line-div"></div>
              <div id="ticket-row">
                <p className="p-text" id="ticket-p">
                  Student Admission
                  <br />
                  <span id="ticket-p-thin"> with valid ID</span>
                </p>
                <div className="ticket-veiw-div">
                  <p>$15.00</p>
                  <button
                    onClick={decrementTicketStudent}
                    className={decrementButtonClassesStudent}
                    id="decrementButton"
                  >
                    {" "}
                    <p id="ticket-values">-</p>{" "}
                  </button>
                  <div className="ticket">
                    {" "}
                    <p id="ticket-values">{ticketCountStudent}</p>{" "}
                  </div>
                  <button
                    onClick={addTicketStudent}
                    className="ticket-btn"
                    id="addButton"
                  >
                    {" "}
                    <p id="ticket-values">+</p>{" "}
                  </button>
                </div>
              </div>

              <div className="ticket-line-div"></div>
              <div id="ticket-row">
                <p className="p-text" id="ticket-p">
                  Senior Admission
                  <br />
                  <span id="ticket-p-thin"> 65 and over</span>
                </p>

                <div className="ticket-veiw-div">
                  <p>$20.00</p>
                  <button
                    onClick={decrementTicketSenior}
                    className={decrementButtonClasses}
                    id="decrementButton"
                  >
                    {" "}
                    <p className="ticket-values">-</p>{" "}
                  </button>
                  <div className="ticket">
                    {" "}
                    <p className="ticket-values" id="ticketCount">
                      {ticketCount}
                    </p>{" "}
                  </div>
                  <button
                    onClick={addTicket}
                    className="ticket-btn"
                    id="addButton"
                  >
                    {" "}
                    <p className="ticket-values">+</p>{" "}
                  </button>
                </div>
              </div>

              <div className="ticket-line-div"></div>
            </div>

            <div className="visitor-rules">
              <h6 className="comp-sub-header">Visitor Guidelines</h6>
              <p className="p-text">Masks are strongly recommended.</p>
              <p className="p-text">
                Please follow directions from Nútímasafn staff.
              </p>
              <p className="p-text">Please do not touch the art.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="line-div"></div>
      <Footer />
    </>
  );
}

export default Tickets;
