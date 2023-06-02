import { Link } from "react-router-dom";
import { useState } from "react";
import ComponentNav from "./ComponentNav";
import Footer from "./Footer";

function Tickets() {
  const [ticketCountAdult, setTicketCountAdult] = useState(0);
  const [ticketCountChild, setTicketCountChild] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  const [ticketCountStudent, setTicketCountStudent] = useState(0);
  const totalTicketCount =
    ticketCountAdult + ticketCountChild + ticketCountStudent + ticketCount;

  // const TicketCostCalculator = () => {
  //   const [ticketCountAdult, setTicketCountAdult] = useState(0);
  //   const [ticketCountChild, setTicketCountChild] = useState(0);
  //   const [ticketCountStudent, setTicketCountStudent] = useState(0);
  //   const [ticketCountSenior, setTicketCountSenior] = useState(0);
  //   const [totalCost, setTotalCost] = useState(0.00);
  // };

  // const calculateTotalCost = () => {
  //   const adultTicketCost = 30;
  //   const childTicketCost = 5;
  //   const studentTicketCost = 15;
  //   const seniorTicketCost = 20;
  //   const totalCost =
  //     ticketCountAdult * adultTicketCost +
  //     ticketCountChild * childTicketCost +
  //     ticketCountStudent * studentTicketCost +
  //     ticketCount * seniorTicketCost;
  //   document.getElementById("total-ticket-cost").innerHTML = `${totalCost}`;
  // };

  // const calculateTotalCost = () => {
  //   const adultTicketCost = 30;
  //   const childTicketCost = 5;
  //   const studentTicketCost = 15;
  //   const seniorTicketCost = 20;
  //   const calculatedTotalCost =
  //     ticketCountAdult * adultTicketCost +
  //     ticketCountChild * childTicketCost +
  //     ticketCountStudent * studentTicketCost +
  //     ticketCountSenior * seniorTicketCost;
  //   setTotalCost(calculatedTotalCost);
  // };

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
        <h1 className="comp-header-text">Plan your visit</h1>
        <div className="ticket-div">
          <div className="ticket-info">
            <div className="ticket-img-div">
              <img
                id="ticket-img"
                src="https://images.unsplash.com/photo-1618207773994-243f4bce78fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
                alt=""
              />
            </div>
          </div>

          <div className="ticket-prices">
            <h6 className="comp-sub-header" id="sub-header-id">
              Become a Member
            </h6>

            <p className="p-text" id="ticket-prices">
              Enjoy the fallowing:
              <br />
              <span id="bullet-span"> • </span>Unlimited access for 12 months
              <br />
              <span id="bullet-span"> • </span>Exclusive access to special
              events
              <br />
              <span id="bullet-span"> • </span>Discounts on murchandice
              <br />
              <span id="bullet-span"> • </span>Prioraty access when you arrive
              <br />
            </p>
            <br />
            <Link to="/Membership">
              <button id="purchase-btn">
                <p className="p-text-btn">JOIN TODAY</p>
              </button>
            </Link>

            <br />
            <br />
            <div className="general-addmision-div">
              <h6 className="comp-sub-header" id="sub-header-id">
                General Admission
              </h6>

              <p className="p-text" id="ticket-prices">
                <span id="bullet-span"> • </span>$30 adults
                <br />
                <span id="bullet-span"> • </span>$5 children
                <br />
                <span id="bullet-span"> • </span>$15 students
                <br />
                <span id="bullet-span"> • </span>$20 seniors
              </p>
              <p className="p-text">
                👋 Free addmision for NYC residents and students.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="line-div" ></div>
      <div>
        <div className="ticket-buy-div">
          <div className="add-to-cart">
            <div className="cart-text-div">
              <p className="p-text">Number of tickets: {totalTicketCount}</p>
              <p id="total-ticket-cost" className="p-text">
                Subtotal ${}0.00
              </p>
              {/* <p id="total-ticket-cost" className="p-text">
                {}
              </p> */}
              {/* <p id="total-ticket-cost" className="p-text">
                ${}
              </p> */}
            </div>
            <div className="purchase-btn-div">
              <button id="purchase-btn">PURCHASE</button>
            </div>
          </div>

          <div className="choose-ticket">
            <h6 className="comp-sub-header" id="id-choose-tickets">
              Choose Tickets
            </h6>
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
                  <button
                    onClick={decrementTicketAdult}
                    className={decrementButtonClassesAdult}
                    id="decrementButton"
                  >
                    {" "}
                    <p id="ticket-values">-</p>{" "}
                  </button>
                  <div className="ticket">
                    {" "}
                    <p id="ticket-values">{ticketCountAdult}</p>{" "}
                  </div>
                  <button
                    onClick={addTicketAdult}
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
                  Child Admission
                  <br />
                  <span id="ticket-p-thin">under 12</span>
                </p>
                <div className="ticket-veiw-div">
                  <p>$5.00</p>
                  <button
                    onClick={decrementTicketChild}
                    className={decrementButtonClassesChild}
                    id="decrementButton"
                  >
                    {" "}
                    <p id="ticket-values">-</p>{" "}
                  </button>
                  <div className="ticket">
                    {" "}
                    <p id="ticket-values">{ticketCountChild}</p>{" "}
                  </div>
                  <button
                    onClick={addTicketChild}
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
