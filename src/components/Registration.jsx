import React from "react";

function Registration() {
  return (
    <div
      id="registration"
      className="wrapper bg-secondary flex flex-col items-center text-primary py-24"
    >
      <h4 className="text-5xl text-center">Registration</h4>
      <div className="flex flex-col sm:flex-row mx-auto space-y-6 sm:space-y-0 sm:space-x-6 justify-center mt-24 w-2/3 my-6 text-center">
        <div className="bg-primary text-secondary py-32 px-12 rounded-xl">
          <h4 className="text-3xl">Rs.300</h4>
          <h4>For Indian Participants</h4>
        </div>
        <div className="bg-primary text-secondary py-32 px-12 rounded-xl">
          <h4 className="text-3xl">8$</h4>
          <h4>For Foreign Participants</h4>
        </div>
      </div>
      <div className="px-8 text-center">
        <h4 className="sm:text-xl mt-6">
          Important: Last date for registration is 14-02-2023.
        </h4>
        <h4 className="sm:text-xl mt-2 text-center">
          Online platform: The workshop will be conducted online in MS Teams.
          <br />
          Workshop schedule and online links will be provided to all registered
          participants on <span className="font-extrabold">14-02-2023</span>.
        </h4>{" "}
      </div>
      <a
        href="https://tinyurl.com/mv8shk8c"
        target="blank"
        className="bg-transparent font-medium mt-12 border-[0.5px] rounded-lg border-slate-100 px-6 py-4 hover:bg-slate-100 hover:text-secondary"
      >
        Register Now
      </a>
    </div>
  );
}

export default Registration;
