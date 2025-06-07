import React from "react";
import ChromaGrid from "../Reactbits/ChromaGrid/ChromaGrid";

const Project = () => {
  const items = [
    {
      image:
        "https://github.com/Prasanthgadde-17/Portfolio-website/blob/main/src/assets/shopping.png?raw=true",
      title: "Shopping Site",
      subtitle: "HTML5, CSS3, JS",
      handle: "Frontend",
      borderColor: "#6366F1",
      gradient: "linear-gradient(180deg, #6366F1, #000)",
      url: "https://github.com/Prasanthgadde-17/shoppingsite",
    },
    {
      image:
        "https://github.com/Prasanthgadde-17/Portfolio-website/blob/main/src/assets/todo.jpg?raw=true",
      title: "TO-DO Backend",
      subtitle: "React, Node, Express.js, MongoDB",
      handle: "Full Stack",
      borderColor: "#14B8A6",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://github.com/Prasanthgadde-17/Backend-todo",
    },
    {
      image:
        "https://github.com/Prasanthgadde-17/Portfolio-website/blob/main/src/assets/Social.png?raw=true",
      title: "Social Network",
      subtitle: "MERN Stack, Material-UI, Tailwind",
      handle: "Full Stack",
      borderColor: "#ffff",
      gradient: "linear-gradient(180deg, #ffff, #000)",
      url: "https://github.com/Prasanthgadde-17/Social-Network",
    },
    {
      image:
        "https://github.com/Prasanthgadde-17/Portfolio-website/blob/main/src/assets/login.png?raw=true",
      title: "Login",
      subtitle: "Backend, Password Validation",
      handle: "Full Stack",
      borderColor: "#0EA5E9",
      gradient: "linear-gradient(180deg, #0EA5E9, #000)",
      url: " ",
    },
    {
      image:
        "https://github.com/Prasanthgadde-17/Portfolio-website/blob/main/src/assets/todo2.png?raw=true",
      title: "To-Do Application",
      subtitle: "HTML5, CSS3, JS",
      handle: "Frontend Project",
      borderColor: "#D97706",
      gradient: "linear-gradient(190deg, #D97706, #000)",
      url: "https://github.com/Prasanthgadde-17/TO-DO-",
    },
  ];

  return (
    <>
      <div
        className="border border-white/40 m-5 sm:m-10 md:sm-15 rounded-xl shadow h-[1800px] sm:h-[1200px] md:h-[1050px]  "
        id="project"
      >
        <div className="text-white font-bold mt-10  text-center">
          <div className="font-light text-lg">Projects</div>
          <div className="text-4xl mt-4 hover:text-sky-300 transition-colors duration-500">
            What I’ve Built
          </div>
          <p className="mt-5 w-full md:w-1/3 text-gray-400 mx-auto text-md px-4 ">
            From learning the basics to building full-stack applications, here
            are some of the key projects that helped me grow as a developer.
          </p>
        </div>

        <div className="mt-10 p-5 flex justify-center">
          <div className="relative h-[1500px] sm:h-[1000px] md:h-[700px] overflow-auto ml-3">
            <ChromaGrid
              items={items}
              radius={300}
              damping={0.45}
              fadeOut={0.4}
              ease="power3.out"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
