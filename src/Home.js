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
                  className="home-img"
                  src="https://images.unsplash.com/photo-1613908416516-299dc079542a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <h4 id="p">Events</h4>
            </Link>

            <Link id="home-links" to="/Exhibits">
              <div className="img-link">
                <img
                  className="home-img"
                  src="https://images.unsplash.com/photo-1578163678052-eef169544f75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <h4 id="p">Exhibits</h4>
            </Link>

            <Link id="home-links" to="/Cafe">
              <div className="img-link">
                <img
                  className="home-img"
                  src="https://images.unsplash.com/photo-1511214053397-d6c97488c8f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <h4 id="p">Café</h4>
            </Link>

            <Link id="home-links" to="/Shop">
              <div className="img-link">
                <img
                  className="home-img"
                  src="https://images.unsplash.com/photo-1619335680636-74b3fce95bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <h4 id="p">Shop</h4>
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
