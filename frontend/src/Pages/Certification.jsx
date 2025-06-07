import React from "react";
import { useState, useEffect } from "react";
import img1 from "../assets/Intern.png";
import img2 from "../assets/IntroductionToNet.png";
import img3 from "../assets/NetworkEssential.png";
import img4 from "../assets/Routing.png";
import img5 from "../assets/Hackathon.png";
import img6 from "../assets/UX.png";

const Certification = () => {
  const Certificates = [
    {
      id: 1,
      Title: "Codex Intern",
      short: "Frontend",
      desc: "Completed an intensive 4-week internship focused on frontend web development.Worked on real-time projects using HTML, CSS, JavaScript, and React, gaining strong hands-on exposure.Learned to implement responsive UI components, design principles, and code optimization practices.Collaborated in a professional setting, enhancing project management and team communication skills.",
      img: img1,
    },
    {
      id: 2,
      Title: "Introduction to Networks",
      short: "Networking",
      desc: "Completed Cisco's foundational networking course, gaining hands-on skills in configuring devices. Prepared for network infrastructure roles. This marks a key step in mastering network essentials.",
      img: img2,
    },
    {
      id: 3,
      Title: "Cisco Networking Essentials",
      short: "Networking",
      desc: "Achieved proficiency in core network concepts, from home setups to communication protocols. Mastered IP addressing and secure internet access configuration. This certificate showcases a solid networking foundation",
      img: img3,
    },
    {
      id: 4,
      Title: "Switching, Routing, and Wireless Essentials ",
      short: "Network Routing",
      desc: "Validated expertise in advanced switching, routing, and wireless LANs, including VLANs and STP. Skilled in troubleshooting, dynamic addressing, and robust network security. This highlights a versatile network management skill set",
      img: img4,
    },
    {
      id: 5,
      Title: "Hackathon ",
      short: "Participation",
      desc: "Actively participated in a 2-day national-level hackathon aimed at fostering innovation and collaboration.Contributed to a tech-driven problem-solving environment with a team-focused approach.Gained hands-on experience in rapid prototyping, brainstorming, and building scalable solutions under time constraints.",
      img: img5,
    },
    {
      id: 6,
      Title: "User Experience (UX) Design",
      short: "UX Design",
      desc: "Earned Google's certificate in UX Design fundamentals, focusing on user-centered principles. Equipped to craft intuitive and engaging digital experiences. This marks a foundational step in shaping user interactions with technology",
      img: img6,
    },
  ];

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isPopupvisible, setIsPopupvisible] = useState(false);

  const openPopup = (cert) => {
    setSelectedCertificate(cert);
    console.log(selectedCertificate);

    setIsPopupvisible(true);
  };

  const closePopup = () => {
    setIsPopupvisible(false);
    setSelectedCertificate(null);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedCertificate) {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <>
      <div className="border border-white/40 m-5 rounded-xl shadow text-white">
        <h2 className="text-4xl font-semibold text-center p-8  hover:text-sky-300 transition-colors duration-500">
          Certificates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 ">
          {Certificates.map((cert) => (
            <div
              key={cert.id}
              className=" group relative rounded-xl overflow-hidden  transform transition-all duration-300 hover:scale-105 cursor-pointer "
              onClick={() => openPopup(cert)}
            >
              <img
                src={cert.img}
                alt="Img"
                className="w-full h-50 sm:h-52 md:h-70 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                <h3 className="text-lg sm:text-xl font-semibold text-white ">
                  {cert.Title}
                </h3>
                <p className="text-xs  text-light sm:text-sm text-gray-300 mt-1 ">
                  {cert.short}
                </p>
                {/* <p className="hidden sm:block text-xs text-gray-400 mt-1 truncate" title={cert.desc}>
                {cert.desc}
              </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCertificate && (
        <div
          className={`fixed inset-0 bg-black/80 z-50 transition-opacity duration-300 flex items-center justify-center backdrop-filter backdrop-blur-sm transform ${
            isPopupvisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => closePopup()}
        >
          <div
            className="info text-white bg-black/50 border border-white/50 p-5 rounded-xl shadow-lg h-150 lg:h-180 lg:w-200 sm:h-150 w-180 m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                className="bg-gray-800  px-3 py-2 rounded-2xl hover:bg-gray-600 transition"
                onClick={() => closePopup()}
              >
                X
              </button>
            </div>
            <div className="mb-4 w-full  rounded-xl shadow-lg p-4 flex flex-col items-center text-center">
              <div className="h-65 sm:h-90  lg:h-120 w-full  flex items-center justify-center rounded-md overflow-hidden mb-4">
                <img
                  src={selectedCertificate.img}
                  alt="Certificate"
                  className="h-full w-full  object-contain"
                />
              </div>
              <div className="info text-white">
                <h1 className="text-xl font-bold mb-2">
                  {selectedCertificate.Title}
                </h1>
                <h3 className="text-sm text-gray-400">
                  {selectedCertificate.desc}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certification;
