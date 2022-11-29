import React from "react";

function Committee() {
  const committees = {
    "Website Coordinators": [
      {
        name: "Dr. Asish Kumar Dalai",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Yada Nandukumar",
        title: "",
        image: "https://via.placeholder.com/300",
      },
    ],
    "Registration Committee": [
      {
        name: "Dr. Venkatrajam Marka",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Komandla Mahipal Reddy",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. R Sinuvasan",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Prashanth Maroju",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. V. Raja",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Davala Ravi Kumar",
        title: "",
        image: "https://via.placeholder.com/300",
      },
    ],
    "Publicity Committee": [
      {
        name: "Dr. Chandan Kumar Thakur",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Aswathy R K",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Ranjan Kumar",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Francis",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Lisna PC",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Sukanta Nayak",
        title: "",
        image: "https://via.placeholder.com/300",
      },
    ],
    "Organizing Members": [
      {
        name: "Dr. Nikunja Bihari Barik",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. M Sudhakar",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. M Phani Kumar",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Manoj Kumar Mishra",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Kiran Kumar Patra",
        title: "",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Gaddam Sharat",
        title: "",
        image: "https://via.placeholder.com/300",
      },
    ],
    "Advisory Committee": [
      {
        name: "Dr G Sreedhar Rao",
        title: "Professor, University of West Indies, West Indies",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr Anuj Mubayi",
        title: "Associate Professor, Arizona State university, USA",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr J V Ramana Reddy",
        title: "Assistant Professor, Tohoku University, Japan",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr Manoranjan Mishra",
        title: "Professor, IIT-Ropar",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr D Srinivasacharya",
        title: "Professor, NIT-Warangal",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr Ch Aswini Kumar",
        title: "Professor, VIT, Vellore",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr N Madhusudhan",
        title: "Dean Academics, VIT-AP University, Amaravati",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr Ravindra Dhuli",
        title: "Dean, Academic Research, VIT-AP University, Amaravati",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Pankaj Balakrishna Tambe",
        title: "Dean, SMEC, VIT-AP University, Amaravati",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Dr. Santanu Mandal",
        title: "Dean, SAS, VIT-AP University, Amaravati",
        image: "https://via.placeholder.com/300",
      },
    ],
  };
  return (
    <div
      id="committees"
      className="wrapper bg-secondary flex flex-col pt-12 pb-24 justify-center"
    >
      <div className="w-2/3 mx-auto">
        <h4 className="text-primary text-5xl mb-24 text-center">
          Co-ordinators & Committees
        </h4>
        <div className=" flex justify-around flex-wrap items-center ">
          {Object.keys(committees).map((committee) => {
            return committees[committee].map((item) => {
              return (
                <div className="bg-primary px-6 py-8 mb-8 flex w-[20rem] flex-col items-center space-y-4  rounded-xl">
                  <img src={item.image} className="rounded-full w-32" />
                  <div className="text-center">
                    <h4 className="text-xl">{item.name}</h4>
                    <h4 className="text-lg italic">{item.title}</h4>
                  </div>
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
}

export default Committee;
