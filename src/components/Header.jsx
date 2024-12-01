// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Hero from "../assets/hero.png";
// import CropInfo from "../assets/cropinfo.png";
// import Safety from "../assets/bg-safety.png";
// import FarmerToolbox from "../assets/farmertoolbox.png";

// // Links for navigation tabs
// const links = [
//   { name: "Crop Information", path: "/crop-info" },
//   { name: "Fertilizers", path: "/fertilisers" },
//   { name: "Farmer's toolbox", path: "/toolbox" },
//   { name: "Fertiliser handling and safety", path: "/safety" },
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="absolute top-0 left-0 w-full bg-transparent z-20">
//       <div className="max-w-8xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="text-white font-extrabold text-2xl">OrganiFert</div>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex items-center space-x-6 text-white font-extrabold">
//           <li>
//             <a href="/" className="hover:underline text-xl md:text-lg">
//               Crop Nutrition Solution
//             </a>
//           </li>
//           <li>
//             <a href="/about" className="hover:underline text-xl md:text-lg">
//               About Us
//             </a>
//           </li>
//           <li>
//             <button
//               onClick={() =>
//                 document
//                   .getElementById("search")
//                   .scrollIntoView({ behavior: "smooth" })
//               }
//               className="p-2 border rounded-full text-white hover:bg-white hover:text-blue-400 transition"
//               aria-label="Search"
//             >
//               🔍
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className={`block md:hidden text-white ${isMenuOpen ? "hidden" : ""}`}
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Links */}
//       {isMenuOpen && (
//         <ul className="flex flex-col bg-black bg-opacity-80 text-white space-y-4 px-6 py-4 md:hidden">
//           <li>
//             <a
//               href="/"
//               onClick={() => setIsMenuOpen(false)} // Close menu on navigation
//               className="block text-sm md:text-lg hover:underline"
//             >
//               Crop Nutrition Solution
//             </a>
//           </li>
//           <li>
//             <a
//               href="/about"
//               onClick={() => setIsMenuOpen(false)} // Close menu on navigation
//               className="block text-sm md:text-lg hover:underline"
//             >
//               About Us
//             </a>
//           </li>
//           <li>
//             <button
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 document
//                   .getElementById("search")
//                   .scrollIntoView({ behavior: "smooth" });
//               }}
//               className="p-2 border rounded-full text-white hover:bg-white hover:text-blue-500 transition"
//               aria-label="Search"
//             >
//               🔍
//             </button>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// const HeroSection = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [bgImage, setBgImage] = useState(Hero);
//   const [heroHeader, setHeroHeader] = useState("Crop nutrition solutions");
//   const [heroText, setHeroText] = useState(
//     "Increase the quality and yield of your crops. OrganiFert agronomists are here to help with advice on all aspects of crop nutrition."
//   );

//   const { pathname } = useLocation();

//   // Dynamically update content based on the current URL path
//   useEffect(() => {
//     switch (pathname) {
//       case "/crop-info":
//         setBgImage(CropInfo); // Use the imported CropInfo image
//         setHeroHeader("Crop information");
//         setHeroText(
//           "Are you looking to increase the quality and yield of a particular crop or just need more general advice on any aspect of crop nutrition? Search through our crop information to find useful tips and advice on all aspects of crop nutrition."
//         );
//         break;
//       case "/fertilisers":
//         setBgImage(Hero); // Use the imported Hero image
//         setHeroHeader("Fertilisers");
//         setHeroText(
//           "OrganiFert fertilisers, solid or liquid, supply all crop nutrients including nitrogen, sulphur, phosphate, potassium, and a full range of micronutrients."
//         );
//         break;
//       case "/toolbox":
//         setBgImage(FarmerToolbox); // Use the imported FarmerToolbox image
//         setHeroHeader("Farmer's toolbox");
//         setHeroText(
//           "A collection of tools and services that allow fertilisers and nutrients to be used more efficiently to maximise crop yield and quality whilst avoiding over-fertilisation and protecting the environment."
//         );
//         break;
//       case "/safety":
//         setBgImage(Safety); // Use the imported Safety image
//         setHeroHeader("Fertiliser handling and safety");
//         setHeroText(
//           "Information about the safe use of fertilisers and best practice advice to people working with fertilisers in the supply chain and as end users."
//         );
//         break;
//       default:
//         setBgImage(Hero); // Use the imported Hero image
//         setHeroHeader("Crop nutrition solutions");
//         setHeroText(
//           "Increase the quality and yield of your crops. OrganiFert agronomists are here to help with advice on all aspects of crop nutrition."
//         );
//         break;
//     }
//   }, [pathname]);

//   return (
//     <section
//       className="relative h-[400px] bg-cover bg-center md:h-[650px]"
//       style={{
//         backgroundImage: `linear-gradient(to bottom, rgba(30, 74, 152, 0.6), transparent), url(${bgImage})`,
//       }}
//     >
//       <Navbar />

//       {/* Main Content */}
//       <div className="relative z-10 text-white px-6 py-20 max-w-6xl mx-auto">
//         <div className="relative flex flex-col items-start justify-center bg-blue-500 bg-opacity-80 p-6 rounded-sm md:flex-row md:justify-between md:p-10 mt-12 md:mt-40 max-w-max mx-auto">
//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className={`absolute bottom-2 right-2 block md:hidden text-white ${
//               isMenuOpen ? "hidden" : ""
//             }`}
//           >
//             {isMenuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             )}
//           </button>
//           <div className="md:max-w-3xl">
//             <h1 className="text-2xl font-bold m-1 md:text-4xl">{heroHeader}</h1>
//             <p className="text-sm mb-3 md:text-lg">{heroText}</p>
//           </div>
//         </div>

// {/* Navigation Tabs */}
{
  /* <div className="bg-white shadow-md mb-1 md:mt-32 rounded-sm">
  <div className="flex flex-wrap justify-center pb-4">
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
</div> */
}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Hero from "../assets/hero.png";
// import CropInfo from "../assets/cropinfo.png";
// import Safety from "../assets/bg-safety.png";
// import FarmerToolbox from "../assets/farmertoolbox.png";

// // Links for navigation tabs
// const links = [
//   { name: "Crop Information", path: "/crop-info" },
//   { name: "Fertilizers", path: "/fertilisers" },
//   { name: "Farmer's toolbox", path: "/toolbox" },
//   { name: "Fertiliser handling and safety", path: "/safety" },
// ];

// // Transparent Navbar Component
// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="absolute top-0 left-0 w-full bg-transparent z-20">
//       <div className="max-w-8xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="text-white font-extrabold text-2xl">OrganiFert</div>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex items-center space-x-6 text-white font-extrabold">
//           <li>
//             <a href="/" className="hover:underline text-xl md:text-lg">
//               Crop Nutrition Solution
//             </a>
//           </li>
//           <li>
//             <a href="/about" className="hover:underline text-xl md:text-lg">
//               About Us
//             </a>
//           </li>
//           <li>
//             <button
//               onClick={() =>
//                 document
//                   .getElementById("search")
//                   .scrollIntoView({ behavior: "smooth" })
//               }
//               className="p-2 border rounded-full text-white hover:bg-white hover:text-blue-400 transition"
//               aria-label="Search"
//             >
//               🔍
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="block md:hidden text-white"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Links */}
//       {isMenuOpen && (
//         <ul className="flex flex-col bg-black bg-opacity-80 text-white space-y-4 px-6 py-4 md:hidden">
//           <li>
//             <a
//               href="/"
//               onClick={() => setIsMenuOpen(false)} // Close menu on navigation
//               className="block text-sm md:text-lg hover:underline"
//             >
//               Crop Nutrition Solution
//             </a>
//           </li>
//           <li>
//             <a
//               href="/about"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-sm md:text-lg hover:underline"
//             >
//               About Us
//             </a>
//           </li>
//           <li>
//             <button
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 document
//                   .getElementById("search")
//                   .scrollIntoView({ behavior: "smooth" });
//               }}
//               className="p-2 border rounded-full text-white hover:bg-white hover:text-blue-500 transition"
//               aria-label="Search"
//             >
//               🔍
//             </button>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// const HeroSection = () => {
//   const [bgImage, setBgImage] = useState(Hero);
//   const [heroHeader, setHeroHeader] = useState("Crop nutrition solutions");
//   const [heroText, setHeroText] = useState(
//     "Increase the quality and yield of your crops. OrganiFert agronomists are here to help with advice on all aspects of crop nutrition."
//   );
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     switch (pathname) {
//       case "/crop-info":
//         setBgImage(CropInfo);
//         setHeroHeader("Crop information");
//         setHeroText(
//           "Are you looking to increase the quality and yield of a particular crop or just need more general advice on any aspect of crop nutrition? Search through our crop information to find useful tips and advice on all aspects of crop nutrition."
//         );
//         break;
//       case "/fertilisers":
//         setBgImage(Hero);
//         setHeroHeader("Fertilisers");
//         setHeroText(
//           "OrganiFert fertilisers, solid or liquid, supply all crop nutrients including nitrogen, sulphur, phosphate, potassium, and a full range of micronutrients."
//         );
//         break;
//       case "/toolbox":
//         setBgImage(FarmerToolbox);
//         setHeroHeader("Farmer's toolbox");
//         setHeroText(
//           "A collection of tools and services that allow fertilisers and nutrients to be used more efficiently to maximise crop yield and quality whilst avoiding over-fertilisation and protecting the environment."
//         );
//         break;
//       case "/safety":
//         setBgImage(Safety);
//         setHeroHeader("Fertiliser handling and safety");
//         setHeroText(
//           "Information about the safe use of fertilisers and best practice advice to people working with fertilisers in the supply chain and as end users."
//         );
//         break;
//       default:
//         setBgImage(Hero);
//         setHeroHeader("Crop nutrition solutions");
//         setHeroText(
//           "Increase the quality and yield of your crops. OrganiFert agronomists are here to help with advice on all aspects of crop nutrition."
//         );
//         break;
//     }
//   }, [pathname]);

//   return (
//     <section
//       className="relative h-[400px] bg-cover bg-center md:h-[650px]"
//       style={{
//         backgroundImage: `linear-gradient(to bottom, rgba(30, 74, 152, 0.6), transparent), url(${bgImage})`,
//       }}
//     >
//       <Navbar />
//       <div className="relative z-10 text-white px-6 py-20 max-w-4xl mx-auto">
//         <div className="flex flex-col items-start justify-center bg-blue-500 bg-opacity-80 p-6 rounded-lg md:flex-row md:justify-between md:p-10 relative">
//           {/* Hero Header and Text */}
//           <div className="md:max-w-3xl">
//             <h1 className="text-2xl font-bold m-1 md:text-4xl">{heroHeader}</h1>
//             <p className="text-sm mb-3 md:text-lg">{heroText}</p>
//           </div>

//           {/* Top-right Menu Icon */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="absolute top-4 right-4 md:hidden p-2"
//             aria-label="Toggle Menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//               stroke="currentColor"
//               className="w-8 h-8 text-white"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>

//           {/* Bottom-right Menu Icon */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="absolute bottom-4 right-4 md:hidden p-2"
//             aria-label="Toggle Menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//               stroke="currentColor"
//               className="w-8 h-8 text-white"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Tabs Menu */}
//       {/* Navigation Tabs */}
//       <div className="bg-white shadow-md mb-1 md:mt-32 rounded-sm">
//         <div className="flex flex-wrap justify-center pb-4">
//           {links.map((link, index) => (
//             <Link
//               key={index}
//               className={`px-4 py-2 text-sm border-b-2 ${
//                 pathname === link.path
//                   ? "border-b-blue-800 text-blue-600"
//                   : "border-b-transparent text-blue-900"
//               } hover:bg-gray-100 md:px-6 md:py-3`}
//               to={link.path}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//       {menuOpen && (
//         <div className="absolute top-40 left-6 right-6 bg-white p-4 rounded-lg shadow-lg md:hidden z-20">
//           {links.map((link, index) => (
//             <Link
//               key={index}
//               to={link.path}
//               className="block text-sm px-2 py-1 text-blue-700 hover:bg-gray-100 rounded-md"
//               onClick={() => setMenuOpen(false)} // Close menu on navigation
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default HeroSection;
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "../assets/hero.png";
import CropInfo from "../assets/cropinfo.png";
import Safety from "../assets/bg-safety.png";
import FarmerToolbox from "../assets/farmertoolbox.png";

// Links for navigation tabs
const links = [
  { name: "Crop Information", path: "/crop-info" },
  { name: "Fertilizers", path: "/fertilisers" },
  { name: "Farmer's toolbox", path: "/toolbox" },
  { name: "Fertiliser handling and safety", path: "/safety" },
];

// Transparent Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-20">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-white font-extrabold text-2xl">OrganiFert</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 text-white font-extrabold">
          <li>
            <a href="/" className="hover:underline text-xl md:text-lg">
              Crop Nutrition Solution
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline text-xl md:text-lg">
              About Us
            </a>
          </li>
          <li>
            <button
              onClick={() =>
                document
                  .getElementById("search")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="p-2 border rounded-full text-white hover:bg-white hover:text-blue-400 transition"
              aria-label="Search"
            >
              🔍
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <ul className="flex flex-col bg-black bg-opacity-80 text-white space-y-4 px-6 py-4 md:hidden">
          <li>
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)} // Close menu on navigation
              className="block text-sm md:text-lg hover:underline"
            >
              Crop Nutrition Solution
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm md:text-lg hover:underline"
            >
              About Us
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                document
                  .getElementById("search")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="p-2 border rounded-full text-white hover:bg-white hover:text-blue-500 transition"
              aria-label="Search"
            >
              🔍
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

const HeroSection = () => {
  const [bgImage, setBgImage] = useState(Hero);
  const [heroHeader, setHeroHeader] = useState("Crop nutrition solutions");
  const [heroText, setHeroText] = useState(
    "Increase the quality and yield of your crops. OrganiFert agronomists are here to help with advice on all aspects of crop nutrition."
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/crop-info":
        setBgImage(CropInfo);
        setHeroHeader("Crop information");
        setHeroText(
          "Are you looking to increase the quality and yield of a particular crop or just need more general advice on any aspect of crop nutrition? Search through our crop information to find useful tips and advice on all aspects of crop nutrition."
        );
        break;
      case "/fertilisers":
        setBgImage(Hero);
        setHeroHeader("Fertilisers");
        setHeroText(
          "OrganiFert fertilisers, solid or liquid, supply all crop nutrients including nitrogen, sulphur, phosphate, potassium, and a full range of micronutrients."
        );
        break;
      case "/toolbox":
        setBgImage(FarmerToolbox);
        setHeroHeader("Farmer's toolbox");
        setHeroText(
          "A collection of tools and services that allow fertilisers and nutrients to be used more efficiently to maximise crop yield and quality whilst avoiding over-fertilisation and protecting the environment."
        );
        break;
      case "/safety":
        setBgImage(Safety);
        setHeroHeader("Fertiliser handling and safety");
        setHeroText(
          "Information about the safe use of fertilisers and best practice advice to people working with fertilisers in the supply chain and as end users."
        );
        break;
      case "/about":
        setBgImage(Hero);
        setHeroHeader("Welcome to OrganiFert");
        setHeroText(
          "OrganiFert Ghana was established in 2024 to strengthen the quality and depth of input supply and related services along agricultural value chains to increase the productivity of Ghanaian farmers."
        );
        break;
      default:
        setBgImage(Hero);
        setHeroHeader("Crop nutrition solutions");
        setHeroText(
          "Increase the quality and yield of your crops. OrganiFert agronomists are here to help with advice on all aspects of crop nutrition."
        );
        break;
    }
  }, [pathname]);

  return (
    <section
      className="relative h-[400px] bg-cover bg-center md:h-[650px]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(30, 74, 152, 0.6), transparent), url(${bgImage})`,
      }}
    >
      <Navbar />
      <div className="relative z-10 text-white px-6 py-20 max-w-5xl mx-auto">
        <div className="relative flex flex-col items-start justify-center bg-blue-500 bg-opacity-80 px-9 rounded-lg md:flex-row md:justify-between md:p-10 mx-auto m-40 md:mt-44 w-full max-w-3xl">
          {/* Hero Header and Text */}
          <div className="md:max-w-3xl">
            <h1 className="text-2xl font-bold m-1 md:text-4xl">{heroHeader}</h1>
            <p className="text-sm mb-3 md:text-lg">{heroText}</p>
          </div>

          {/* Bottom-right Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute bottom-4 right-4 md:hidden p-0"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="bg-white shadow-md mb-64 md:-scroll-mt-3.5 rounded-sm hidden md:block">
          <div className="flex flex-wrap justify-center pb-1">
            {links.map((link, index) => (
              <Link
                key={index}
                className={`px-4 py-1 text-lg border-b-2 ${
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

      {/* Mobile Tabs Menu */}
      {menuOpen && (
        <div className="absolute top-40 left-6 right-6 bg-white p-4 rounded-lg shadow-lg md:hidden z-20">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block text-sm px-2 py-1 text-blue-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMenuOpen(false)} // Close menu on navigation
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
