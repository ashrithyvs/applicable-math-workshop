import React from "react";
import {
  Placeholder,
  AnujMubayi,
  Anant,
  Annapurna,
  Aswini,
  Aravind,
  BSRV,
  Byron,
  ElayarajaAruchunan,
  Faizan,
  GSreedharRao,
  Kameswaran,
  KohilavaniNaganthran,
  Manoranjan,
  Pankaj,
  PVSN,
  RamanaReddy,
  Raja,
  Souvick,
  Srinivasacharya,
  TVS,
} from "../assets";

function Speakers() {
  const speakers = [
    {
      name: "Dr Anuj Mubayi",
      title: "Associate Professor, Arizona State university, USA",
      caption:
        "Complexity in Evaluating Value of Health Technologies for Communicable Diseases",
      image: AnujMubayi,
    },
    {
      name: "Dr Aruchnan Elayaraja",
      title: "Associate Professor, University of Malaya, Malaysia",
      caption:
        "The Variants of Modified Arithmetic Mean Iterative Methods for Fredholm Integro-Differential Equations",
      image: ElayarajaAruchunan,
    },
    {
      name: "Dr Kohilavani Naganthran",
      title: "Associate Professor, University of Malaya, Malaysia",
      caption:
        "Triple Solutions of Carreau Thin Film Flow with Thermocapillarity and Injection on an Unsteady Stretching Sheet",
      image: KohilavaniNaganthran,
    },
    {
      name: "Dr G Sreedhar Rao",
      title: "Professor, University of West Indies, West Indies",
      caption:
        "The Penalty Finite Element Method and Applications to Convective Heat Transfer in Nanofluids",
      image: GSreedharRao,
    },
    {
      name: "Dr J V Ramana Reddy",
      title: "Assistant Professor, Tohoku University, Japan",
      caption:
        "Classification and prediction of the Aortic Dissection patient's risk",
      image: RamanaReddy,
    },
    {
      name: "Dr Manoranjan Mishra",
      title: "Professor, IIT-Ropar",
      caption:
        "Hydrodynamic instability between miscible fluid flow in porous medium",
      image: Manoranjan,
    },
    {
      name: "Dr PVSN Murthy",
      title: "Professor, IIT-Kharagpur",
      caption:
        "Mathematical Modelling of Directed Drug Targeting in Microvasculature",
      image: PVSN,
    },
    {
      name: "Dr TVS Shekhar",
      title: "Professor, IIT-BHU",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: TVS,
    },
    {
      name: "Dr D Srinivasacharya",
      title: "Professor, NIT-Warangal",
      caption:
        "Artificial Neural Network Modelling of Bioconvection in Casson Fluid Flow Over an Unsteady Radially Stretching Shee",
      image: Srinivasacharya,
    },
    {
      name: "Dr Ch Aswini Kumar",
      title: "Professor, VIT, Vellore",
      caption: "Data analysis using concept lattices",
      image: Aswini,
    },
    {
      name: "Dr J Annapurna",
      title: "Professor, VIT, Vellore",
      caption: "Strategic modelling using game theory",
      image: Annapurna,
    },
    {
      name: "Dr BSRV Prasad",
      title: "Associate Professor, VIT, Vellore",
      caption:
        "Omnivorous diet in Natural Enemies and Pests: A risk or advantage for biological control? A Mathematical Exploration",
      image: BSRV,
    },
    {
      name: "Dr Raja Das",
      title: "Associate Professor, VIT, Vellore",
      caption: "Applications of Mathematics in Deep Learning",
      image: Raja,
    },
    {
      name: "Dr P K Kameswaran",
      title: "Associate Professor, VIT, Vellore",
      caption: "Hypergeometric series solution for the flow problems",
      image: Kameswaran,
    },
    {
      name: "Dr Anant Kant Shukla",
      title: "Assistant Professor, VIT Bhopal",
      caption: "Analytical solutions to nonlinear differential equations",
      image: Anant,
    },
    {
      name: "Dr Pankaj Shukla",
      title: "Assistant Professor, VIT Chennai",
      caption: "Mathematics for Machine Learning",
      image: Pankaj,
    },
    {
      name: "Dr Faizan Danish",
      title: "Assistant Professor, VIT-AP University, Amaravati",
      caption:
        "A Statistical Approach on big data analysis for defining a miRNA signature prognostic melanoma patient outcome",
      image: Faizan,
    },
    {
      name: "Dr Byron Smith",
      title: "Sr Scientist, Petrochemical Industry, Bangalore",
      caption: "Simulating fluid solid flow",
      image: Byron,
    },
    {
      name: "Dr Aravind Hanasoge",
      title: "Wolfram Software (MATHEMATICA)",
      caption: "Mathematica for Education & Research ",
      image: Aravind,
    },
    {
      name: "Mr Souvick Chatterjee",
      title: "Math works (MATLAB)",
      caption:
        "Mathematics for fluid dynamics applications- A MathWorks’ perspective",
      image: Souvick,
    },
  ];

  return (
    <div
      id="speakers"
      className="wrapper bg-primary flex flex-col justify-center py-24"
    >
      <div className="w-3/4 mx-auto">
        <h4 className="text-secondary text-5xl mb-16 text-center">Speakers</h4>
        <div className=" flex justify-around flex-wrap items-center ">
          {speakers.map(({ name, title, caption, image }, idx) => {
            return (
              <div
                key={idx}
                className="bg-secondary text-primary px-6 py-8 flex flex-col sm:flex-row w-[38rem] max-w-[38rem] min-w-[38rem] sm:h-[15rem] sm:space-x-6 items-center mb-2 rounded-xl"
              >
                <img src={image} className="rounded-full w-32 h-32" />
                <div className="flex flex-col mt-3 sm:mt-0 text-center sm:text-left">
                  <h4 className="text-xl">{name}</h4>
                  <h4 className="text-lg italic">{title}</h4>
                  <h4 className="text-md mt-2">{caption ? caption : null}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Speakers;
