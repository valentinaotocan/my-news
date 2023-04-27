import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/images/icons/home.svg";
import { ReactComponent as GeneralIcon } from "../assets/images/icons/general.svg";
import { ReactComponent as BusinessIcon } from "../assets/images/icons/business.svg";
import { ReactComponent as HealthIcon } from "../assets/images/icons/health.svg";
import { ReactComponent as ScienceIcon } from "../assets/images/icons/science.svg";
import { ReactComponent as SportsIcon } from "../assets/images/icons/sports.svg";
import { ReactComponent as TechnologyIcon } from "../assets/images/icons/technology.svg";
import { ReactComponent as FavoritesIcon } from "../assets/images/icons/favorites.svg";
import { ReactComponent as ThreeBarsIcon } from "../assets/images/icons/three-bars.svg";
import { ReactComponent as CloseIcon } from "../assets/images/icons/close.svg";
import { NavbarItems } from "../types";
import Search from "./Search";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(document.body);

  const items: NavbarItems[] = [
    { to: "/", icon: HomeIcon, content: "Home" },
    { to: "/general", icon: GeneralIcon, content: "General" },
    { to: "/business", icon: BusinessIcon, content: "Business" },
    // { to: "/entertainment", icon: EntertainmentIcon, content: "Entertainment" },
    { to: "/health", icon: HealthIcon, content: "Health" },
    { to: "/science", icon: ScienceIcon, content: "Science" },
    { to: "/sports", icon: SportsIcon, content: "Sports" },
    { to: "/technology", icon: TechnologyIcon, content: "Technology" },
    { to: "/favorites", icon: FavoritesIcon, content: "Favorites" },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
    ref.current.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <>
      {/* Desktop Version */}
      <nav className="navbar navbar--desktop inter-v inter-v--semi">
        {items.map(({ to, icon: Icon, content }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive
                ? "nav-link nav-link--active"
                : "nav-link nav-link--not-active"
            }
          >
            <Icon className="mb-4" />
            {content}
          </NavLink>
        ))}
      </nav>

      {/* For Small Screens */}
      <nav
        className="navbar navbar--hamburger inter-v inter-v--semi"
        onClick={handleToggle}
      >
        {isOpen ? (
          <CloseIcon className="hamburger-icon" />
        ) : (
          <ThreeBarsIcon className="hamburger-icon" />
        )}

        {isOpen ? (
          <div className="menu-open app-padding">
            <Search />
            <div className="menu-open__links">
              {items.map(({ to, icon: Icon, content }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link nav-link--active"
                      : "nav-link nav-link--not-active"
                  }
                >
                  <Icon className="mb-4" />
                  {content}
                </NavLink>
              ))}
            </div>
          </div>
        ) : (
          <div className="menu-close"></div>
        )}
      </nav>
    </>
  );
}
export default Navbar;
