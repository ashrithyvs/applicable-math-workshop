import React from "react";

function Registration() {
  return (
    <div className="wrapper bg-secondary flex flex-col items-center text-primary py-24">
      <h4 className="text-5xl text-center">Registration</h4>
      <div className="flex mx-auto space-x-6 justify-center mt-24 w-2/3 my-6 text-center">
        <div className="bg-primary text-secondary py-32 px-12 rounded-xl">
          <h4 className="text-3xl">Rs.300</h4>
          <h4>For Indian Participants</h4>
        </div>
        <div className="bg-primary text-secondary py-32 px-12 rounded-xl">
          <h4 className="text-3xl">8$</h4>
          <h4>For Foreign Participants</h4>
        </div>
      </div>
      <a
        href="https://tinyurl.com/mv8shk8c"
        target="blank"
        className="bg-transparent mt-12 border-[0.5px] rounded-lg border-slate-100 px-6 py-4"
      >
        Register Now
      </a>
    </div>
  );
}

export default Registration;
