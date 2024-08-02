import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const contactNumber = "+91 6377608367";
const contactAddress = "Bhilwara, Rajasthan";

let SocialMideaList = [
  {
    IconName: "icofont-facebook-messenger",
    IconLink: "#",
  },
  {
    IconName: "icofont-twitter",
    IconLink: "#",
  },
  {
    IconName: "icofont-vimeo",
    IconLink: "#",
  },
  {
    IconName: "icofont-skype",
    IconLink: "#",
  },
  {
    IconName: "icofont-rss-feed",
    IconLink: "#",
  },
];

function Header() {
  function menuTrigger() {
    document.querySelector(".menu").classList.toggle("active");
    document.querySelector(".header-bar").classList.toggle("active");
  }
  function menuTriggerTwo() {
    document.querySelector(".header-top").classList.toggle("open");
    // document.querySelector('.header-bar').classList.toggle('active')
  }

  window.addEventListener("scroll", function () {
    var value = window.scrollY;
    if (value > 200) {
      document
        .querySelector(".header-section")
        .classList.add(["header-fixed"], ["fadeInUp"]);
    } else {
      document
        .querySelector(".header-section")
        .classList.remove(["header-fixed"], ["fadeInUp"]);
    }
  });

  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <header className="header-section">
        <div className="container">
          <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
            <div className="brand-logo d-none d-lg-inline-block">
              <div className="logo">
                <Link to="/">
                  <img src="../../assets/images/logo/logo.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="header-menu-part">
              <div className="header-top">
                <div className="header-top-area">
                  <ul className="left">
                    <li>
                      <i className="icofont-ui-call"></i>{" "}
                      <span>{contactNumber}</span>
                    </li>

                    <li>
                      <i className="icofont-location-pin"></i> {contactAddress}
                    </li>
                  </ul>
                  <ul className="social-icons d-flex align-items-center">
                    {SocialMideaList.map((val, i) => (
                      <li key={i}>
                        <a href={`${val.IconLink}`} className="fb">
                          <i className={`${val.IconName}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="header-bottom">
                <div className="header-wrapper justify-content-lg-end">
                  <div className="mobile-logo d-lg-none">
                    <Link to="/">
                      <img src="../../assets/images/logo/logo.png" alt="logo" />
                    </Link>
                  </div>
                  <div className="menu-area">
                    <ul className="menu">

                      <li className="menu-item-has-children">
                        <a
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-bs-offset="0,0"
                        >
                          Features
                        </a>
                        <ul
                          className="submenu dropdown-menu"
                          aria-labelledby="dropdown"
                        >
                          
                          <li>
                            <NavLink to="/gallery">gallery</NavLink>
                          </li>
                          <li>
                            <NavLink to="/game-list">All Games</NavLink>
                          </li>
                          <li>
                            <NavLink to="/game-list2">Tournaments</NavLink>
                          </li>
                          <li>
                            <NavLink to="/partners">partners</NavLink>
                          </li>
                          <li>
                            <NavLink to="/achievements">Achievement</NavLink>
                          </li>
                          <li>
                            <NavLink to="/team">teams</NavLink>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <NavLink to="/shop">Shop</NavLink>
                      </li>
                      <li>
                          <NavLink to='/blog'>Blogs</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Contact</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">About Us</NavLink>
                      </li>
                    </ul>

                    <div>
                      <Link to="/login" className="login">
                        <i className="icofont-user"></i> <span>LOG IN</span>
                      </Link>

                      <Link to="/signup" className="signup">
                        <i className="icofont-users"></i> <span>SIGN UP</span>
                      </Link>
                    </div>

                    {/* <Button className="signup" onClick={handleLogout}>
                     <span>Logout</span>
                    </Button> */}

                    <div className="header-bar d-lg-none" onClick={menuTrigger}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div
                      className="ellepsis-bar d-lg-none"
                      onClick={menuTriggerTwo}
                    >
                      <i className="icofont-info-square"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
