import React from "react";

function Navbar() {
  const navItems = [
    {
      name: "HOME",
      refId: "hero",
    },
    {
      name: "ABOUT",
      refId: "about",
    },
    {
      name: "ORGANIZERS",
      refId: "organizers",
    },
    {
      name: "COMMITTEES",
      refId: "committees",
    },
    {
      name: "SPEAKERS",
      refId: "speakers",
    },
    {
      name: "REGISTRATION",
      refId: "registration",
    },
    {
      name: "CONTACT",
      refId: "contact",
    },
  ];

  function scroll(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  function toggleMobileNav() {
    document.querySelector(".mobile-menu").classList.toggle("hidden");
  }

  return (
    <div className="bg-primary w-full h-20 max-h-20 flex flex-col lg:justify-center py-8 fixed">
      <div
        onClick={toggleMobileNav}
        className="hamburger-icon visible ml-auto lg:hidden px-6"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="24px"
          width="24px"
          className="ml-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
        </svg>
      </div>
      <div className="lg:flex w-2/3 items-center hidden justify-around mx-auto">
        {navItems.map((item) => {
          return (
            <div
              onClick={(e) => scroll(item.refId)}
              className="cursor-pointer py-4 px-6 rounded-lg hover:bg-secondary hover:text-slate-100"
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="lg:flex-col items-center bg-primary w-full hidden mobile-menu justify-around mx-auto">
        {navItems.map((item) => {
          return (
            <div
              onClick={(e) => scroll(item.refId)}
              className="cursor-pointer py-4 px-6 rounded-lg hover:bg-secondary hover:text-slate-100 block transition duration-300"
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
