import ExploreNav from "./ExploreNav";
import Footer from "./Footer";

function Exhibits() {
  return (
    <>
      <ExploreNav />
      <div className="exhibits-body-div">
        <div className="exhibits-header-div">
          <h1 className="comp-header-text">
            Current and upcoming Exhibitions.
          </h1>
        </div>
        <div className="exhibits-div">
          <h4 className="comp-sub-header">Current</h4>
          <div className="exhibits-grid-div">
            <div className="exhibit">
              <div id="exhibit-img-div">
                <img
                  id="exhibit-img"
                  src="https://media.nga.gov/iiif/5dd2009f-7782-43d8-9892-be5733d8f43b/full/!740,560/0/default.jpg"
                  alt=""
                />
                <div id="exhibit-text-div">
                  <h4>EXHIBITION</h4>
                  <h6>
                    Beyond the Light: Identity and Place in Nineteenth-Century
                    Danish Art
                  </h6>
                  <p>Through April </p>
                </div>
              </div>
            </div>
            <div className="exhibit">
              <div id="exhibit-img-div">
                <img
                  id="exhibit-img"
                  src="https://www.rainmakerart.co.uk/wp-content/uploads/2017/01/kachina-dolls-native-american-indian-artists.jpg"
                  alt=""
                />
              </div>
              <div id="exhibit-text-div">
                <h4>EXHIBITION</h4>
                <h6>
                  Beyond the Light: Identity and Place in Nineteenth-Century
                  Danish Art
                </h6>
                <p>Through April </p>
              </div>
            </div>
            <div className="exhibit">
              <div id="exhibit-img-div">
                <img
                  id="exhibit-img"
                  src="https://nottinghammuseums.org.uk/wp-content/uploads/2021/02/the-vikings-and-anglo-saxons-1080x887-1.jpg"
                  alt=""
                />
                <div id="exhibit-text-div">
                  <h4>EXHIBITION</h4>
                  <h6>
                    Beyond the Light: Identity and Place in Nineteenth-Century
                    Danish Art
                  </h6>
                  <p>Through April </p>
                </div>
              </div>
            </div>
            <div className="exhibit">
              <div id="exhibit-img-div">
                <img
                  id="exhibit-img"
                  src="https://assets.sutori.com/user-uploads/image/3a65dc7a-19e1-4d9c-995a-8ee8e0af6ae8/320px-Al-Buraf_Hafifa.jpeg"
                  alt=""
                />
                <div id="exhibit-text-div">
                  <h4>EXHIBITION</h4>
                  <h6>
                    Beyond the Light: Identity and Place in Nineteenth-Century
                    Danish Art
                  </h6>
                  <p>Through April </p>
                </div>
              </div>
            </div>
          </div>

          <h4 className="comp-sub-header">Upcoming</h4>
          <div className="exhibits-coming-grid-div">
            <div className="exhibit">
              <div id="exhibit-coming-img-div">
                <img
                  id="exhibit-img"
                  src="https://media.nga.gov/iiif/5dd2009f-7782-43d8-9892-be5733d8f43b/full/!740,560/0/default.jpg"
                  alt=""
                />
                <div id="exhibit-text-div">
                  <h4>EXHIBITION</h4>
                  <h6>
                    Beyond the Light: Identity and Place in Nineteenth-Century
                    Danish Art
                  </h6>
                  <p>Through April </p>
                </div>
              </div>
            </div>
            <div className="exhibit">
              <div id="exhibit-coming-img-div">
                <img
                  id="exhibit-img"
                  src="https://www.rainmakerart.co.uk/wp-content/uploads/2017/01/kachina-dolls-native-american-indian-artists.jpg"
                  alt=""
                />
              </div>
              <div id="exhibit-text-div">
                <h4>EXHIBITION</h4>
                <h6>
                  Beyond the Light: Identity and Place in Nineteenth-Century
                  Danish Art
                </h6>
                <p>Through April </p>
              </div>
            </div>
            <div className="exhibit">
              <div id="exhibit-coming-img-div">
                <img
                  id="exhibit-img"
                  src="https://nottinghammuseums.org.uk/wp-content/uploads/2021/02/the-vikings-and-anglo-saxons-1080x887-1.jpg"
                  alt=""
                />
                <div id="exhibit-text-div">
                  <h4>EXHIBITION</h4>
                  <h6>
                    Beyond the Light: Identity and Place in Nineteenth-Century
                    Danish Art
                  </h6>
                  <p>Through April </p>
                </div>
              </div>
            </div>
            <div className="exhibit">
              <div id="exhibit-coming-img-div">
                <img
                  id="exhibit-img"
                  src="https://assets.sutori.com/user-uploads/image/3a65dc7a-19e1-4d9c-995a-8ee8e0af6ae8/320px-Al-Buraf_Hafifa.jpeg"
                  alt=""
                />
                <div id="exhibit-text-div">
                  <h4>EXHIBITION</h4>
                  <h6>
                    Beyond the Light: Identity and Place in Nineteenth-Century
                    Danish Art
                  </h6>
                  <p>Through April </p>
                </div>
              </div>
            </div>
            <div className="exhibit">
              <div id="exhibit-coming-img-div">
                <img
                  id="exhibit-img"
                  src="https://assets.sutori.com/user-uploads/image/3a65dc7a-19e1-4d9c-995a-8ee8e0af6ae8/320px-Al-Buraf_Hafifa.jpeg"
                  alt=""
                />
                <div id="exhibit-text-div">
                  <h4>EXHIBITION</h4>
                  <h6>
                    Beyond the Light: Identity and Place in Nineteenth-Century
                    Danish Art
                  </h6>
                  <p>Through April </p>
                </div>
              </div>
            </div>
            <div className="exhibit">
              <div id="exhibit-coming-img-div">
                <img
                  id="exhibit-img"
                  src="https://assets.sutori.com/user-uploads/image/3a65dc7a-19e1-4d9c-995a-8ee8e0af6ae8/320px-Al-Buraf_Hafifa.jpeg"
                  alt=""
                />
                <div id="exhibit-text-div">
                  <h4>EXHIBITION</h4>
                  <h6>
                    Beyond the Light: Identity and Place in Nineteenth-Century
                    Danish Art
                  </h6>
                  <p>Through April </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-div"></div>
      <Footer />
    </>
  );
}

export default Exhibits;
