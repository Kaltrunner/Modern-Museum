import Header from "./Header";
import Gallery from "./Gallery";
import Footer from "./Footer";

function Home() {
  return (
    <>
    <Header />
    <div className="home-body-div">
      <h4 className="home-body-text">
        Welcome to the Nútímasafn, where we offer a fascinating
        journey through history, science, art, and culture. Our exhibits,
        educational programs, and events showcase the best of human creativity
        and innovation. Join us to explore, learn and don't forget to stop  by the gift shop.
      </h4>

      <div className="line-div"></div>

      <div className="home-img-links">

        <h4 className="home-body-text" id="h4">Explore.</h4>

        <div className="home-img-links-grid" >

          <div className="img-link">
            <img src="https://images.unsplash.com/photo-1541665234574-8e72eb7cd028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <h4 id="h4" >Events</h4>
          </div>

          <div className="img-link"  >
            <img src="https://images.unsplash.com/photo-1583306346437-f2143c0f11fc?ixlib=rb-4.0.3&ixid=Mnwhttps://images.unsplash.com/photo-1629295390892-32f92c8c55d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg2fHxtdXNldW0lMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60xMjA3fDB8MHxzZWFyY2h8MTR8fG11c2V1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h4 id="h4" >Exhibits</h4>
          </div>

          <div className="img-link">
            <img src="https://images.unsplash.com/photo-1511214053397-d6c97488c8f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <h4 id="h4" >Cefé</h4>
          </div>

          <div className="img-link">
            <img src="https://images.unsplash.com/photo-1501168025369-84d106f7a5eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <h4 id="h4" >Shop</h4>
          </div>

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
