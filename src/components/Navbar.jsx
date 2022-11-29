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

  return (
    <div className="bg-primary opacity-80 w-full h-20 max-h-20 flex flex-col justify-center fixed">
      <div className="flex w-2/3 items-center justify-around mx-auto">
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
    </div>
  );
}

export default Navbar;
