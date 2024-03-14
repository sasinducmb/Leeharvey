import React from 'react';
import '../index.css';
import Logo from '../assets/Adidas.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';
import DarkMode from './DarkMode';

const NavLinks = [
  {
    id: 1,
    name: 'Home',
    link: '#',
  },
  {
    id: 2,
    name: 'Service',
    link: '#service',
  },
  {
    id: 3,
    name: 'About',
    link: '#about',
  },
  {
    id: 4,
    name: 'Contact Us',
    link: '#contact',
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className=" text-black dark:text-white duration-300">
      <div className="container  nav  py-2 md:py-0">
        <div className=" flex justify-between items-center">
          {/* logo section */}
          <div className=" flex items-center gap-4">
            <img
              src={Logo}
              style={{ width: '80px', height: '45px' }}
              alt=""
              className="h-16"
            />
            <p className="text-3xl">
              Lee<span className="font-bold">Harvay</span>
            </p>
          </div>
          {/* Desktop Menu section */}
          <nav className="hidden md:block">
            <ul id="collapseMenu" className=" flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <a
                      href={link}
                      className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
              {/* Darkmode feature */}
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile View Sidebar */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <ImCross
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={22}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
