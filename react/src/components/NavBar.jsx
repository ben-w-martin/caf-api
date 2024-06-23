import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "./Menu";
import { Dropdown } from "./Dropdown";

function NavBar() {
  const [showOpenMenu, setShowOpenMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(window.innerWidth > 1099 ? false : true);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", onViewPortChange);
  }, []);

  const onViewPortChange = (e) => {
    const { innerWidth } = e.currentTarget;

    if (innerWidth > 1099) {
      setShowMenu(false);
      setShowOpenMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  const onMenuClick = () => {
    console.log("menu clicked");
    setShowOpenMenu(!showOpenMenu);
  };

  const onDropdownEnter = () => {
    setShowDropdown(true);
  };

  const onDropdownLeave = () => {
    setShowDropdown(false);
  };

  const onShopClick = () => {
    navigate("/products");
  };

  const onHomeClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__left">
            <div className="nav__logo">
              <a onClick={onHomeClick} className="nav__logo--link" href="">
                CafAPI
              </a>
            </div>
          </div>
          {showMenu && <Menu onMenuClick={onMenuClick} />}
          <div
            className={
              !showOpenMenu ? "nav__right" : "nav__right nav__right--show"
            }
          >
            <div className="nav__item nav__item--profile">
              <a href="#" className="nav-link">
                Profile
              </a>
            </div>
            <div onMouseEnter={onDropdownEnter}
                onMouseLeave={onDropdownLeave} 
                className="nav__item">
              <div className="nav__item--dropdown"
              >
                <a className="nav-link" href="#">
                  About Us
                  <span className="dropdown-caret">
                    <i
                      className={
                        !showDropdown
                          ? "fa-solid fa-caret-down"
                          : "fa-solid fa-caret-up"
                      }
                    ></i>
                  </span>
                </a>
                {showDropdown && <Dropdown />}
              </div>
            </div>
            <div className="nav__item">
              <a href="#" className="nav-link">
                Our Values
              </a>
            </div>
            <div className="nav__item">
              <a href="#" className="nav-link">
                Our Mission
              </a>
            </div>
            <div className="nav__item">
              <a onClick={onShopClick} className="nav-link">
                Shop
              </a>
            </div>
            <div className="nav__item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </div>
            <div className="nav__item">
              <a href="#" className="nav-link">
                Careers
              </a>
            </div>
          </div>
          <div className="nav__user">
            <div className="nav__user--name">Rachel Smith</div>
            <div className="nav__user--icon">
              <a href="#">
                <img
                  className="nav__user--img"
                  src="\src\assets\user.jpeg"
                  alt="user icon"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export { NavBar };
