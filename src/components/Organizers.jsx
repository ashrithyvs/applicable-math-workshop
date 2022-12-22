import React from "react";
import { DrSSrinivas, DrBSatyanarayana } from "../assets";
function Organizers() {
  const organizers = [
    {
      name: "Prof S Srinivas",
      grade: "",
      title: "Convenor",
      image: DrSSrinivas,
    },
    {
      name: "Dr B Satyanarayana",
      grade: "",
      title: "Convenor",
      image: DrBSatyanarayana,
    },
    {
      name: "Dr V Ramakrishna Reddy",
      grade: "",
      title: "Organizing Secretary",
      image:
        "https://vitap.ac.in/wp-content/uploads/2020/07/Dr.-VEMULA-RAMAKRISHNA-REDDY.jpg",
    },
    {
      name: "Dr N Rajashekar",
      grade: "",
      title: "Organizing Secretary",
      image:
        "https://vitap.ac.in/wp-content/uploads/2022/04/Dr-N-Rajasekhar.jpg",
    },
    {
      name: "Dr Anil Negi",
      grade: "",
      title: "Joint Organizing Secretary",
      image:
        "https://vitap.ac.in/wp-content/uploads/2020/08/anilnegi_70156.jpg",
    },
    {
      name: "Dr M Varun Kumar",
      grade: "",
      title: "Joint Organizing Secretar",
      image:
        "https://vitap.ac.in/wp-content/uploads/2022/06/Varun-Kumar-Merugu.jpg",
    },
  ];

  return (
    <div
      id="organizers"
      className="wrapper bg-secondary flex flex-col pt-24 pb-12 justify-center"
    >
      <div className="w-2/3 mx-auto">
        <h4 className="text-primary text-3xl sm:text-5xl mb-24 text-center">
          Organizers
        </h4>
        <div className=" flex justify-around flex-wrap items-center ">
          {organizers.map((item) => {
            return (
              <div className="bg-primary px-6 py-8 mb-8 flex w-[20rem] flex-col items-center space-y-4  rounded-xl">
                <img src={item.image} className="rounded-full w-32 h-32" />
                <div className="text-center">
                  <h4 className="text-xl">{item.name}</h4>
                  <h4 className="text-lg italic">{item.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Organizers;

//categorized
