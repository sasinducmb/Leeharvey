import React, { useState } from 'react';
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
    name: 'Blog',
    link: 'http://localhost:3000',
  },

  {
    id: 3,
    name: 'Service',
    link: '#service',
  },

  {
    id: 4,
    name: 'About',
    link: '#about',
  },

  {
    id: 5,
    name: 'Contact Us',
    link: '#contact',
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  let [open, setOpen] = useState(false);
  return (
    <nav className="">
      <div className="navbar text-black dark:text-white duration-300">
        <div className="container py-2 md:py-0">
          <div className=" flex justify-between items-center">
            {/* logo section */}
            <div className=" flex items-center gap-4">
              <img
                src={Logo}
                style={{ width: '50px', height: '60px' }}
                alt=""
                className="h-16"
              />
              <p className="text-3xl">
                Lee<span className="font-bold">Harvay</span>
              </p>
            </div>
            {/* Desktop Menu section */}
            <nav className="hidden md:block">
              <ul className=" flex items-center gap-8">
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
                <ul
                  className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white dark:bg-black text-black dark:text-white duration-300 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                    open ? 'top-20 ' : 'top-[-490px]'
                  }`}
                >
                  {NavLinks.map(({ id, name, link }) => {
                    return (
                      <li key={id} className="md:ml-8 text-xl md:my-0 my-7">
                        <a
                          href={link}
                          className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                        >
                          {name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div
                  onClick={() => setOpen(!open)}
                  className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                >
                  <HiMenuAlt3 name={open ? 'close' : 'menu'}></HiMenuAlt3>
                </div>
                {/* {showMenu ? (
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
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
