import logo from "../../src/assets/images/logo.png";
import userImg from "../assets/images/avatar-icon.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useRef } from "react";
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef();

  const togglemenu = () => menuRef.current.classList.toggle("shown__menu");
  return (
    <header className="header">
      <div className="container">
        <div className="flex items-center justify-between">
          {/*  Logo  */}
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Menu */}
          <div className="navigation " onClick={togglemenu} ref={menuRef}>
            <ul className="menu flex item-center gap-[2.7rem]">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-16px leading-7 font-600"
                        : "text-textColor text-16px leading-7 font-500"
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-35px h-35px rounded-full">
                  <img src={userImg} alt="user" />
                </figure>
              </Link>
            </div>
            <Link to="login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={togglemenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
