import React from 'react';


const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center pr-4">
                <img className="h-20 w-auto" src={require("./images/cpe-logo 1.png")} alt="Your Logo" />
              </div>
              <div className="text-white text-lg font-bold" style={{ fontSize: "1rem" }}>Computer Engineering</div>
            </div>
            <div className="sm:hidden">
              {/* Hamburger menu icon for small screens */}
              <button className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"/>
                </svg>
              </button>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <NavItem href="#" label="Home" />
              <NavItem href="#" label="About" />
              <NavItem href="#" label="Faculty & Staff" />
              <NavItem href="#" label="Student OA" />
              <NavItem href="#" label="Student Achievers" />
              <NavItem href="#" label="Community" />
              <NavItem href="#" label="Alumni" />
            </div>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

const NavItem = ({ href, label }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out"
    >
      {label}
    </a>
  );
};

export default Navbar;
