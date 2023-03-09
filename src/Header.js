

function Header() {
  

    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("navbar").style.top = "-115px";
  } else {
    document.getElementById("navbar").style.top = "0";
  }
}

    return (
         
        <div className="header-body-div" id="navbar" >
            <h4 className="header-title" >Nútímasafn</h4>
            <div className="header-menu-div" >
                <ul className="menu-list" >
                    <li className="menu-item" >Tickets</li>
                    <li className="menu-item" >Membership</li>
                    <li className="menu-item" >Featured</li>
                    <li className="menu-item" >Contact</li>
                    <li className="menu-item" ></li>
                </ul>
            </div>
        </div> 
    )
}

export default Header