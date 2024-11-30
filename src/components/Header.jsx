// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Safety from "../assets/bg-safety.png";
// import Hero from "../assets/hero.png";
// import Toolbox from "../assets/farmertoolbox.png";
// import CropInfo from "../assets/cropinfo.png";
// import { useEffect, useState } from "react";

// const links = [
//   { name: "Crop Information", path: "/crop-info" },
//   { name: "Fertilizers", path: "/fertilisers" },
//   { name: "Farmer's toolbox", path: "/toolbox" },
//   { name: "Fertiliser handling and safety", path: "/safety" },
// ];
// const HeroSection = () => {
//   const [bgImage, setBgImage] = useState("./src/assets/cropinfo.png");
//   const [heroHeader, setHeroHeader] = useState("Crop nutrition solutions");
//   const [heroText, setHeroText] = useState(
//     "Increase the quality and yield of your crops. Yara agronomists are here to help with advice on all aspects of crop nutrition."
//   );
//   const navigate = useNavigate();
//   const { pathname } = useLocation();
//   console.log(pathname);

//   useEffect(() => {
//     // Update the background image based on the current pathname
//     switch (pathname) {
//       case "/crop-info":
//         setBgImage("./src/assets/cropinfo.png");
//         setHeroHeader("Crop information");
//         setHeroText(
//           "Are you are looking to increase the quality and yield of a particular crop or just need more general advice on any aspect of crop nutrition? Search through our crop information to find useful tips and advice on all aspects of crop nutrition."
//         );
//         break;
//       case "/fertilisers":
//         setBgImage("./src/assets/hero.png");
//         setHeroHeader("Fertilisers");
//         setHeroText(
//           "OrganiFert fertilisers, solid or liquid, supply all crop nutrients including nitrogen, sulphur, phosphate, potassium and a full range of micronutrients"
//         );
//         break;
//       case "/toolbox":
//         setBgImage("./src/assets/farmertoolbox.png");
//         setHeroHeader("Farmer's toolbox");
//         setHeroText(
//           "A collection of tools and services that allow fertilisers and nutrients to be used more efficiently to maximise crop yield and quality whilst avoiding over-fertilisation and protecting the environment."
//         );
//         break;
//       case "/safety":
//         setBgImage("./src/assets/bg-safety.png");
//         setHeroHeader("Fertiliser handling and safety");
//         setHeroText(
//           "Information about the safe use of fertilisers and best practice advice to people working with fertilisers in the supply chain and as end users"
//         );
//         break;
//       default:
//         setBgImage("./src/assets/cropinfo.png"); // Default or fallback image
//         setHeroHeader("Crop nutrition solutions");
//         setHeroText(
//           "Increase the quality and yield of your crops. Yara agronomists are here to help with advice on all aspects of crop nutrition."
//         );
//         break;
//     }
//   }, [pathname]); // Runs whenever the pathname changes

//   return (
//     <section
//       className="relative h-[400px] bg-cover bg-center"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0  opacity-70"></div>

//       {/* Content */}
//       <div className="relative z-10 text-white px-8 py-12 max-w-6xl mx-auto">
//         <div className="flex justify-between items-center bg-blue-500 max-w-2xl p-4 ">
//           <div>
//             <h1 className="text-4xl font-bold mb-4">{heroHeader}</h1>
//             <p className="text-lg mb-6">{heroText}</p>
//           </div>
//           {/* <img src="/logo.png" alt="OrganiFert" className="h-16" /> */}
//         </div>

//         {/* Tabs */}
//         <div className="bg-white shadow-md mt-44">
//           <div className="flex justify-center py-4">
//             {links.map((link, index) => {
//               return (
//                 <Link
//                   key={index}
//                   className={`px-6 py-3 border-b-2 ${
//                     pathname === link.path
//                       ? "border-b-blue-800 text-blue-600"
//                       : "border-b-transparent text-blue-900"
//                   }  rounded-l hover:bg-gray-100`}
//                   to={link.path}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";

// const links = [
//   { name: "Crop Information", path: "/crop-info" },
//   { name: "Fertilizers", path: "/fertilisers" },
//   { name: "Farmer's toolbox", path: "/toolbox" },
//   { name: "Fertiliser handling and safety", path: "/safety" },
// ];

// const HeroSection = () => {
//   const [bgImage, setBgImage] = useState("./src/assets/cropinfo.png");
//   const [heroHeader, setHeroHeader] = useState("Crop nutrition solutions");
//   const [heroText, setHeroText] = useState(
//     "Increase the quality and yield of your crops. Yara agronomists are here to help with advice on all aspects of crop nutrition."
//   );

//   const { pathname } = useLocation();

//   useEffect(() => {
//     switch (pathname) {
//       case "/crop-info":
//         setBgImage("./src/assets/cropinfo.png");
//         setHeroHeader("Crop information");
//         setHeroText(
//           "Are you looking to increase the quality and yield of a particular crop or just need more general advice on any aspect of crop nutrition? Search through our crop information to find useful tips and advice on all aspects of crop nutrition."
//         );
//         break;
//       case "/fertilisers":
//         setBgImage("./src/assets/hero.png");
//         setHeroHeader("Fertilisers");
//         setHeroText(
//           "OrganiFert fertilisers, solid or liquid, supply all crop nutrients including nitrogen, sulphur, phosphate, potassium, and a full range of micronutrients."
//         );
//         break;
//       case "/toolbox":
//         setBgImage("./src/assets/farmertoolbox.png");
//         setHeroHeader("Farmer's toolbox");
//         setHeroText(
//           "A collection of tools and services that allow fertilisers and nutrients to be used more efficiently to maximise crop yield and quality whilst avoiding over-fertilisation and protecting the environment."
//         );
//         break;
//       case "/safety":
//         setBgImage("./src/assets/bg-safety.png");
//         setHeroHeader("Fertiliser handling and safety");
//         setHeroText(
//           "Information about the safe use of fertilisers and best practice advice to people working with fertilisers in the supply chain and as end users."
//         );
//         break;
//       default:
//         setBgImage("./src/assets/cropinfo.png");
//         setHeroHeader("Crop nutrition solutions");
//         setHeroText(
//           "Increase the quality and yield of your crops. Yara agronomists are here to help with advice on all aspects of crop nutrition."
//         );
//         break;
//     }
//   }, [pathname]);

//   return (
//     <section
//       className="relative h-[400px] bg-cover bg-center md:h-[500px]"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-10 text-white px-6 py-12 max-w-6xl mx-auto">
//         <div className="flex flex-col items-start justify-center bg-blue-500 bg-opacity-80 p-6 rounded-lg md:flex-row md:justify-between md:p-10">
//           <div className="md:max-w-lg">
//             <h1 className="text-2xl font-bold mb-4 md:text-4xl">
//               {heroHeader}
//             </h1>
//             <p className="text-sm mb-6 md:text-lg">{heroText}</p>
//           </div>
//           {/* Optional: Add an image or logo */}
//           {/* <img src="/logo.png" alt="OrganiFert" className="h-16 hidden md:block" /> */}
//         </div>

//         {/* Tabs */}
//         <div className="bg-white shadow-md mt-12 md:mt-20 rounded-lg">
//           <div className="flex flex-wrap justify-center py-4">
//             {links.map((link, index) => {
//               return (
//                 <Link
//                   key={index}
//                   className={`px-4 py-2 text-sm border-b-2 ${
//                     pathname === link.path
//                       ? "border-b-blue-800 text-blue-600"
//                       : "border-b-transparent text-blue-900"
//                   } hover:bg-gray-100 md:px-6 md:py-3`}
//                   to={link.path}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Links for navigation tabs
const links = [
  { name: "Crop Information", path: "/crop-info" },
  { name: "Fertilizers", path: "/fertilisers" },
  { name: "Farmer's toolbox", path: "/toolbox" },
  { name: "Fertiliser handling and safety", path: "/safety" },
];

const HeroSection = () => {
  // State variables for dynamic content
  const [bgImage, setBgImage] = useState("./src/assets/cropinfo.png");
  const [heroHeader, setHeroHeader] = useState("Crop nutrition solutions");
  const [heroText, setHeroText] = useState(
    "Increase the quality and yield of your crops. Yara agronomists are here to help with advice on all aspects of crop nutrition."
  );

  const { pathname } = useLocation();

  // Dynamically update content based on the current URL path
  useEffect(() => {
    switch (pathname) {
      case "/crop-info":
        setBgImage("./src/assets/cropinfo.png");
        setHeroHeader("Crop information");
        setHeroText(
          "Are you looking to increase the quality and yield of a particular crop or just need more general advice on any aspect of crop nutrition? Search through our crop information to find useful tips and advice on all aspects of crop nutrition."
        );
        break;
      case "/fertilisers":
        setBgImage("./src/assets/hero.png");
        setHeroHeader("Fertilisers");
        setHeroText(
          "OrganiFert fertilisers, solid or liquid, supply all crop nutrients including nitrogen, sulphur, phosphate, potassium, and a full range of micronutrients."
        );
        break;
      case "/toolbox":
        setBgImage("./src/assets/farmertoolbox.png");
        setHeroHeader("Farmer's toolbox");
        setHeroText(
          "A collection of tools and services that allow fertilisers and nutrients to be used more efficiently to maximise crop yield and quality whilst avoiding over-fertilisation and protecting the environment."
        );
        break;
      case "/safety":
        setBgImage("./src/assets/bg-safety.png");
        setHeroHeader("Fertiliser handling and safety");
        setHeroText(
          "Information about the safe use of fertilisers and best practice advice to people working with fertilisers in the supply chain and as end users."
        );
        break;
      default:
        setBgImage("./src/assets/cropinfo.png"); // Default background image
        setHeroHeader("Crop nutrition solutions");
        setHeroText(
          "Increase the quality and yield of your crops. OrganiFert agronomists are here to help with advice on all aspects of crop nutrition."
        );
        break;
    }
  }, [pathname]); // Trigger when the URL path changes

  return (
    <section
      className="relative h-[400px] bg-cover bg-center md:h-[500px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Main Content */}
      <div className="relative z-10 text-white px-6 py-12 max-w-5xl mx-auto">
        <div className="flex flex-col items-start justify-center bg-blue-500 bg-opacity-80 p-6 rounded-lg md:flex-row md:justify-between md:p-10">
          <div className="md:max-w-lg">
            <h1 className="text-2xl font-bold mb-4 md:text-4xl">
              {heroHeader}
            </h1>
            <p className="text-sm mb-6 md:text-lg">{heroText}</p>
          </div>
          {/* Optional Logo Placeholder */}
          {/* <img src="/logo.png" alt="OrganiFert" className="h-16 hidden md:block" /> */}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white shadow-md mb-4 md:mt-0 rounded-lg">
          <div className="flex flex-wrap justify-center py-4">
            {links.map((link, index) => (
              <Link
                key={index}
                className={`px-4 py-2 text-sm border-b-2 ${
                  pathname === link.path
                    ? "border-b-blue-800 text-blue-600"
                    : "border-b-transparent text-blue-900"
                } hover:bg-gray-100 md:px-6 md:py-3`}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
