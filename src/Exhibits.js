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
              <div className="monet" id="exhibit-img-div">
                <h4 id="inside-exhibit-img-text-1">
                  Through the eyes of Monet
                </h4>
              </div>
              <div id="exhibit-text-div">
                <h4>Through The Eyes of Monet</h4>
                <h6>
                  An amazing and through provoking collection of paintings by Oscar-Claude Monet.
                </h6>
                <p>Through August</p>
              </div>
            </div>
            <div className="exhibit">
              <div className="native" id="exhibit-img-div">
                <h4 id="inside-exhibit-img-text-3">The Lenape Tribs of Manahatta</h4>
              </div>
              <div id="exhibit-text-div">
                <h4>The Lenape Tribs of Manahatta</h4>
                <h6>
                Explore the history, Culture, and art of the original inhabitants of what is now Manhattan, NY, the Lenape.
                </h6>
                <p>Through September</p>
              </div>
            </div>
            <div className="exhibit">
              <div className="viking" id="exhibit-img-div">
                <h4 id="inside-exhibit-img-text-2">
                  Atrifacts & treasure from the age Vikings
                </h4>
              </div>
              <div id="exhibit-text-div">
                <h4>Atrifacts & treasure from the age Vikings</h4>
                <h6>
                  Beyond the Light: Identity and Place in Nineteenth-Century
                  Danish Art
                </h6>
                <p>Through September</p>
              </div>
            </div>
            <div className="exhibit">
              <div className="pinoy" id="exhibit-img-div">
                <h4 id="inside-exhibit-img-text-4">Traditional Arts of The Philippines</h4>
              </div>
              <div id="exhibit-text-div">
                <h4>Traditional Arts of The Philippines</h4>
                <h6>
                  Beyond the Light: Identity and Place in Nineteenth-Century
                  Danish Art
                </h6>
                <p>Through October</p>
              </div>
            </div>
          </div>

          <h4 className="comp-sub-header">Upcoming</h4>
          <div className="exhibits-coming-grid-div">
            <div className="exhibit">
              <div id="exhibit-coming-img-div">
                <img
                  id="coming-exhibit-img"
                  src="https://static01.nyt.com/images/2022/04/07/arts/07winslowhomer-review-gulfstream/merlin_205011450_2c462920-3edd-4de5-8495-146dc4a1c437-mediumSquareAt3X.jpg"
                  alt=""
                />
                <div id="exhibit-text-div">
                  <h4>EXHIBITION</h4>
                  <h6>
                    Beyond the Light: Identity and Place in Nineteenth-Century
                    Danish Art
                  </h6>
                  <p>Coming in October</p>
                </div>
              </div>
            </div>
            <div className="exhibit">
              <div id="exhibit-coming-img-div">
                <img
                  id="coming-exhibit-img"
                  src="http://media.britishmuseum.org/media/Repository/Documents/2014_9/30_8/e41842e5_b723_4a22_81f5_a3b600860b25/preview_00180352_001.jpg"
                  alt=""
                />
              </div>
              <div id="exhibit-text-div">
                <h4>EXHIBITION</h4>
                <h6>
                  Beyond the Light: Identity and Place in Nineteenth-Century
                  Danish Art
                </h6>
                <p>Coming in October</p>
              </div>
            </div>
            <div className="exhibit">
              <div id="exhibit-coming-img-div">
                <img
                  id="coming-exhibit-img"
                  src="https://images.fineartamerica.com/images-medium-large-5/1-insects-jacob-hoefnagel-joris-hoefnagel-joris-hoefnagel-and-claes-jansz-visscher-ii.jpg"
                  alt=""
                />
                <div id="exhibit-text-div">
                  <h4>EXHIBITION</h4>
                  <h6>
                    Beyond the Light: Identity and Place in Nineteenth-Century
                    Danish Art
                  </h6>
                  <p>Coming in October</p>
                </div>
              </div>
            </div>
            <div className="exhibit">
              <div id="exhibit-coming-img-div">
                <img
                  id="coming-exhibit-img"
                  src="https://images.immediate.co.uk/production/volatile/sites/7/2018/01/Romulus-and-Remus-87ad9ea.jpg?quality=90&resize=800,534"
                  alt=""
                />
                <div id="exhibit-text-div">
                  <h4>EXHIBITION</h4>
                  <h6>
                    Beyond the Light: Identity and Place in Nineteenth-Century
                    Danish Art
                  </h6>
                  <p>Coming in Decimber</p>
                </div>
              </div>
            </div>
            <div className="exhibit">
              <div id="exhibit-coming-img-div">
                <img
                  id="coming-exhibit-img"
                  src="https://www.brickunderground.com/sites/default/files/blog/images/iStock_86366777_MEDIUM.jpg"
                  alt=""
                />
                <div id="exhibit-text-div">
                  <h4>EXHIBITION</h4>
                  <h6>
                    American Photagraphy from the 1980's
                  </h6>
                  <p>Coming in Decimber</p>
                </div>
              </div>
            </div>
            <div className="exhibit">
              <div id="exhibit-coming-img-div">
                <img
                  id="coming-exhibit-img"
                  src="https://cdn.britannica.com/45/1245-004-676A6721/Kanagawa-Wave-woodblock-colour-print-series-part.jpg"
                  alt=""
                />
                <div id="exhibit-text-div">
                  <h4>EXHIBITION</h4>
                  <h6>
                    Beyond the Light: Identity and Place in Nineteenth-Century
                    Danish Art
                  </h6>
                  <p>Coming in Decimber</p>
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
