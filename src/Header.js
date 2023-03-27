import { Link } from "react-router-dom";

function Header() {
  

    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("navbar").style.top = "-130px";
  } else {
    document.getElementById("navbar").style.top = "0";
  }
}

    return (
         
        <div className="header-body-div" id="navbar" >
            <Link to="/" ><h4 className="header-title" >Nútímasafn</h4></Link>
            <div className="header-menu-div" >
                <div className="menu-list" >
                    <Link to="Tickets" ><p className="menu-item" >Tickets</p></Link>
                    <Link to="Membership" ><p className="menu-item" >Membership</p></Link>
                    <Link to="Donation" ><p className="menu-item" >Make a donation</p></Link>
                    <Link to="Contact" ><p className="menu-item" >Contact</p></Link>
                </div>
            </div>
        </div> 
    )
}

export default Header