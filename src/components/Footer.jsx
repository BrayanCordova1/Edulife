import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Router>
      <footer className='bg-gray-900 relative mt-20 bg-opacity-30'>
        <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-2'>
          <div className='space-x-6'>
            <h1>Términos y Condiciones</h1>
            <ul>
              <li>
                <Link
                  to='/avisolegal'
                  reloadDocument={true}
                  className='text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-125'>
                  Aviso legal y términos de uso
                </Link>
              </li>
              <li>
                <NavLink
                  to='/politicadecookies'
                  reloadDocument={true}
                  className='text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-125'>
                  Políticas de Cookies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/privacidad'
                  reloadDocument={true}
                  className='text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-125'>
                  Políticas de Privacidad
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='mt-8 text-center text-gray-400'>
            <p>&copy; 2023 EduLife. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default Footer;
