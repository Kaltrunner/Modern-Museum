import { Link } from "react-router-dom";
import Header from "./Header";
import Gallery from "./Gallery";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="home-body-div">
        <h4 className="home-body-text">
          Welcome to the <span className="home-body-text-span">Nútímasafn</span>
          , where we offer a fascinating journey through history, science, art,
          and culture. Our exhibits, educational programs, and events showcase
          the best of human creativity and innovation. Join us to explore, learn
          and don't forget to stop by the gift shop.
        </h4>

        <div className="line-div"></div>

        <div className="home-img-links">
          <h4 className="comp-header-text" id="h4">
            Explore
          </h4>

          <div className="home-img-links-grid">
            <Link id="home-links" to="/Events">
              <div className="img-link">
                <img
                  src="https://images.unsplash.com/photo-1613908416516-299dc079542a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <h4 id="p">Events</h4>
              </div>
            </Link>

            <Link id="home-links" to="/Exhibits">
              <div className="img-link">
                <img
                  src="https://images.unsplash.com/photo-1578163678052-eef169544f75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <h4 id="p">Exhibits</h4>
              </div>
            </Link>

            <div className="img-link">
              <img
                src="https://images.unsplash.com/photo-1511214053397-d6c97488c8f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <h4 id="p">Café</h4>
            </div>

          <Link id="home-links" to="/Shop" >
            <div className="img-link">
              <img
                src="https://www.ringling.org/sites/default/files/Day-2-Pt-2_079.jpg"
                alt=""
              />
              <h4 id="p">Shop</h4>
            </div>
            </Link>
          </div>
        </div>

        <div className="line-div"></div>

        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default Home;
