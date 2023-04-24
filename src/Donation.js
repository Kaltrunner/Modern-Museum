import ComponentNav from "./ComponentNav";
import Footer from "./Footer";

function Donation() {
  return (
    <>
      <ComponentNav />
      <div className="nav-links-body-div">
        <div className="donation-header-div">
          <div className="donation-header-text">
            <h1 className="comp-header-text">Donation to Nútímasafn</h1>
            <p id="questions-text-thin">
              Your support helps sustain the Museum’s extraordinary level of
              programming, conservation, and research, enabling millions of
              visitors to experience the power of art.
            </p>
            <p id="questions-text-thin">
              Your donation today plays a vital role in The Met’s future, and we
              couldn’t be more grateful. Thank you.
            </p>
            <p id="questions-text-thin">
              We now accept cryptocurrency donations through BitPay. If you wish
              to make a donation with cryptocurrency, you can do so here.
            </p>
            <h6 className="donation-sub-text">Suggested Donation Levels</h6>
            <div className="donation-amounts">
              <label className="container">
                <input type="radio" name="radio" />
                <span className="checkmark">$5</span>
              </label>
              <label className="container">
                <input type="radio" name="radio" />
                <span className="checkmark">$10</span>
              </label>
              <label className="container" checked="checked">
                <input type="radio" name="radio" />
                <span className="checkmark">$25</span>
              </label>
              <label className="container">
                <input type="radio" name="radio" />
                <span className="checkmark">$50</span>
              </label>
              <label className="container">
                <input type="radio" name="radio" />
                <span className="checkmark">$100</span>
              </label>
              <label className="container">
                <input type="radio" name="radio" />
                <span className="checkmark">$250</span>
              </label>
              <label className="container">
                <input type="radio" name="radio" />
                <span className="checkmark">$500</span>
              </label>
            </div>
          </div>
          <div className="donate-img-div">
            <img
              id="donationheader-img"
              src="https://images.unsplash.com/photo-1590444512571-34cf8960d127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="line-div"></div>
        <div className="payment-body-div">
          <div className="payment-doner-div">
            <div className="form-div">
              <h6 id="donation-sub-text">Donor</h6>

              <form>
                <input
                  className="input-text"
                  type="text"
                  placeholder="Email Address"
                ></input>
                <br />

                <input
                  className="input-text"
                  type="text"
                  placeholder="First name"
                  required
                ></input>
                <br />

                <input
                  className="input-text"
                  type="text"
                  placeholder="Last name"
                  required
                ></input>
                <br />

                <input
                  className="input-text"
                  type="text"
                  placeholder="Phone NUmber"
                ></input>
                <br />

                <textarea
                  className="form-text-area"
                  placeholder="Donation Note"
                />
              </form>
            </div>

            <div className="form-div">
              <h6 id="donation-sub-text">Billing</h6>

              <form>
                <input
                  className="input-text"
                  type="text"
                  placeholder="Street Address"
                ></input>
                <br />

                <input
                  className="input-text"
                  type="text"
                  placeholder="Street Address-optional"
                ></input>
                <br />

                <input
                  className="input-text"
                  type="text"
                  placeholder="City"
                  required
                ></input>
                <br />

              
                  <select className="input-text" id="drop-down-text">
                    <option value="Selection">Country</option>
                    <option value="Selection1">erfrf</option>
                    <option value="Selection2">efrrfref</option>
                    <option value="Selection3">erferfr</option>
                    <option value="Selection4">erferfr</option>
                  </select>

                  <select className="input-text" id="drop-down-text">
                    <option value="Selection">State</option>
                    <option value="Selection1">erfrf</option>
                    <option value="Selection2">efrrfref</option>
                    <option value="Selection3">erferfr</option>
                    <option value="Selection4">erferfr</option>
                    <option value="Selection4">erferfr</option>
                    <option value="Selection1">erfrf</option>
                    <option value="Selection2">efrrfref</option>
                    <option value="Selection3">erferfr</option>
                    <option value="Selection4">erferfr</option>
                    <option value="Selection4">erferfr</option>
                    <option value="Selection1">erfrf</option>
                    <option value="Selection2">efrrfref</option>
                    <option value="Selection3">erferfr</option>
                    <option value="Selection4">erferfr</option>
                    <option value="Selection4">erferfr</option>
                    <option value="Selection1">erfrf</option>
                    <option value="Selection2">efrrfref</option>
                    <option value="Selection3">erferfr</option>
                    <option value="Selection4">erferfr</option>
                    <option value="Selection4">erferfr</option>
                    <option value="Selection1">erfrf</option>
                    <option value="Selection2">efrrfref</option>
                    <option value="Selection3">erferfr</option>
                    <option value="Selection4">erferfr</option>
                    <option value="Selection4">erferfr</option>
                  </select>
                  <br />
               

                <input
                  className="input-text"
                  type="text"
                  placeholder="Postal Code"
                  required
                ></input>
              </form>
            </div>

            <div className="form-div">
              <h6 id="donation-sub-text">Payment</h6>
              <form>
                <input
                  className="input-text"
                  type="text"
                  placeholder="Name on Card"
                ></input>
                <br />

                <input
                  className="input-text"
                  type="text"
                  placeholder="Card Number"
                  required
                ></input>
                <br />

               
                  <select className="input-text" id="drop-down-text">
                    <option value="Selection">Select Month</option>
                    <option value="Selection1">January</option>
                    <option value="Selection2">February</option>
                    <option value="Selection3">March</option>
                    <option value="Selection4">April</option>
                    <option value="Selection5">May</option>
                    <option value="Selection6">June</option>
                    <option value="Selection7">July</option>
                    <option value="Selection8">August</option>
                    <option value="Selection9">September</option>
                    <option value="Selection10">October</option>
                    <option value="Selection11">November</option>
                    <option value="Selection12">December</option>
                  </select>

                  <select className="input-text" id="drop-down-text">
                    <option value="Selection">Select Year</option>
                    <option value="Selection1">2023</option>
                    <option value="Selection2">2024</option>
                    <option value="Selection3">2025</option>
                    <option value="Selection4">2026</option>
                    <option value="Selection5">2027</option>
                    <option value="Selection6">2028</option>
                    <option value="Selection7">2029</option>
                    <option value="Selection8">2030</option>
                    <option value="Selection9">2031</option>
                    <option value="Selection10">2032</option>
                    <option value="Selection11">2033</option>
                    <option value="Selection12">2034</option>
                  </select>
                  <br />
               

                <input
                  className="input-text"
                  type="text"
                  placeholder="CVC"
                  required
                ></input>
              </form>

              <button className="donate-btn"  id="purchase-btn">Donate</button>
            </div>

            <p className="contact-info-text">
              If you have any questions, please contact us at
              Nútímasafn@fakemuseum.com or 555-555-5555 (Mon-Fri, 10am - 5pm
              EST).
            </p>
            <p className="contact-info-text">
              Your contribution may be tax-deductible within the limits
              prescribed by the law.
            </p>
          </div>
          <div className="payment-billing-div"></div>
          <div className="payment-payment-div"></div>
        </div>
        <div className="line-div"></div>
      </div>

      <Footer />
    </>
  );
}

export default Donation;
