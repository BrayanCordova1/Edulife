import React, { useState, useEffect } from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

const Nav = () => {
  const [Scroleando, SetScroleando] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        SetScroleando(true);
      } else {
        SetScroleando(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <nav
        className={`fixed top-0 left-0 w-full bg-slate-900 shadow-lg z-50 ${
          Scroleando
            ? "bg-opacity-100 opacity-50 transition duration-500 ease-in-out"
            : "bg-opacity-100 transition duration-500 ease-in-out"
        }`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16 items-center'>
            <div className='flex-shrink-0 flex items-center'>
              <NavLink
                to='/'
                reloadDocument={true}
                className='font-bold text-gray-500 hover:text-white transition duration-300 ease-in-out'>
                EduLife
              </NavLink>
            </div>
            <div>
              <div className='ml-10 flex items-center space-x-10 '>
                <NavLink
                  to='/cursos'
                  reloadDocument={true}
                  className='text-gray-500 hover:text-white transition duration-300 ease-in-out'>
                  Cursos
                </NavLink>
                <NavLink
                  to='/blog'
                  reloadDocument={true}
                  className='text-gray-500 hover:text-white transition duration-300 ease-in-out'>
                  Blog
                </NavLink>
                <NavLink
                  to='/contacto'
                  reloadDocument={true}
                  className='text-gray-500 hover:text-white transition duration-300 ease-in-out'>
                  Contacto
                </NavLink>
                <NavLink
                  to='/'
                  reloadDocument={true}
                  className='text-gray-500 hover:text-white transition duration-300 ease-in-out'>
                  Inicio
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Nav;
