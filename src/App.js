import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import ComponentNav from "./ComponentNav";
import Home from "./Home";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Tickets from "./Tickets";
import Membership from "./Membership";
import Donation from "./Donation";
import Contact from "./Contact";
import ExploreNav from "./ExploreNav";
import Events from "./Events";
import Exhibits from "./Exhibits";
import Shop from "./Shop";
import Cafe from "./Cafe";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/ComponentNav" element={<ComponentNav />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Tickets" element={<Tickets />} />
      <Route path="/Membership" element={<Membership />} />
      <Route path="/Donation" element={<Donation />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/ExploreNav" element={<ExploreNav />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Exhibits" element={<Exhibits />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Cafe" element={<Cafe />} />
    </Routes>
    // </div>
  );
}

export default App;
