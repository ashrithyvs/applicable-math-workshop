import React from "react";

function Organizers() {
  const organizers = [
    {
      name: "Prof S Srinivas",
      grade: "",
      title: "Convernor",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Dr Satyanarayana Badeti",
      grade: "",
      title: "Convernor",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Dr V Ramakrishna Reddy",
      grade: "",
      title: "Organizing Secretary",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Dr N Rajashekar",
      grade: "",
      title: "Organizing Secretary",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Dr Anil Negi",
      grade: "",
      title: "Joint Organizing Secretary",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Dr Varun Kumar",
      grade: "",
      title: "Joint Organizing Secretar",
      image: "https://via.placeholder.com/300",
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
                <img src={item.image} className="rounded-full w-32" />
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
