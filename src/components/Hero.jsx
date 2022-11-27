import React from "react";

function Hero() {
  return (
    <div className="bg-secondary wrapper flex flex-col justify-center text-slate-100">
      <div className="flex flex-col space-y-6 items-center mx-auto text-center w-2/3">
        <h4 className="text-xl">5 Day International Workshop on</h4>
        <h4 className="text-6xl">“Applicable Mathematics for Science and</h4>
        <h4 className="text-6xl">Engineering - Recent Advances”</h4>
        <h4 className="text-xl">(Online Mode)</h4>
        <a
          href="https://tinyurl.com/mv8shk8c"
          target="blank"
          className="bg-transparent mt-12 border-[0.5px] rounded-lg border-slate-100 px-6 py-4"
        >
          Register Now!
        </a>
      </div>
    </div>
  );
}

export default Hero;
