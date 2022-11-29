import React from "react";

function Hero() {
  return (
    <div
      id="hero"
      className="bg-secondary wrapper flex flex-col justify-center text-slate-100"
    >
      <div className="flex flex-col space-y-6 items-center mx-auto text-center w-2/3">
        <h4 className="text-xl">5 Day International Workshop on</h4>
        <h4 className="text-6xl">“Applicable Mathematics for Science and</h4>
        <h4 className="text-6xl">Engineering - Recent Advances”</h4>
        <h4 className="text-xl">(Online Mode)</h4>
        <h4 className="text-xl">(16 Feb - 20 Feb 2023)</h4>
        <h4 className="text-xl" style={{ whiteSpace: "pre-line" }}>
          Organized by <br />
          Department of Mathematics <br /> School of Advanced Sciences <br />
          VIT-AP University <br />
          Andhra Pradesh, India
        </h4>
        <a
          href="https://tinyurl.com/mv8shk8c"
          target="blank"
          className="bg-transparent font-medium mt-12 border-[0.5px] rounded-lg border-slate-100 px-6 py-4 hover:bg-slate-100 hover:text-secondary"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}

export default Hero;

//justify ABOUT content
