import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "../assets/hero.png";
import CropInfo from "../assets/cropinfo.png";
import Safety from "../assets/bg-safety.png";
import FarmerToolbox from "../assets/farmertoolbox.png";
import Logo from "../assets/logo/high-resolution-logo.png";

const links = [
  { name: "Crop Information", path: "/crop-info" },
  { name: "Fertilisers", path: "/fertilisers" },
  { name: "Farmer's toolbox", path: "/toolbox" },
  { name: "Fertiliser handling and safety", path: "/safety" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="top-0 left-0 w-full bg-white md:bg-transparent z-20 shadow-md md:shadow-none transition-all duration-300">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center justify-start">
          <Link to="/" className="inline-block">
            <img
              src={Logo}
              alt="Evans Okyere Farms Logo"
              className="h-14 w-auto sm:h-24 md:h-28 lg:h-36 rounded-sm"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 text-black md:text-white font-semibold px-32">
          <li>
            <a href="/" className="hover:underline text-xl md:text-lg">
              Crop Nutrition Solution
            </a>
          </li>
          <li>
            <a href="/about-us" className="hover:underline text-xl md:text-lg">
              About EvansOkyereFarms
            </a>
          </li>
          <li>
            {/* <button
              onClick={() =>
                document
                  .getElementById("search")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="p-2 border rounded-full md:text-white text-black hover:bg-gray-200 md:hover:bg-white hover:text-blue-400 transition"
              aria-label="Search"
            >
              🔍
            </button> */}
            <a href="/" className="hover:underline text-xl md:text-lg">
              Search
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="4"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu */}
          <ul className="absolute top-16 left-0 w-full bg-black bg-opacity-80 text-white z-20 shadow-lg px-10 py-10 space-y-4">
            <li>
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-start text-lg hover:bg-gray-100 py-2"
              >
                Crop Nutrition Solution
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                onClick={() => setIsMenuOpen(false)}
                className="block text-start text-lg hover:bg-gray-100 py-2"
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
                className=" mx-auto text-left text-lg text-black hover:bg-gray-100 py-2"
              >
                🔍 Search
              </button>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

const HeroSection = () => {
  const [bgImage, setBgImage] = useState(Hero);
  const [heroHeader, setHeroHeader] = useState("Crop nutrition solutions");
  const [heroText, setHeroText] = useState(
    "Increase the quality and yield of your crops. EvansOkyereFarms agronomists are here to help with advice on all aspects of crop nutrition."
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
          "EvansOkyereFarms fertilisers, solid or liquid, supply all crop nutrients including nitrogen, sulphur, phosphate, potassium, and a full range of micronutrients."
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
      case "/about-us":
        setBgImage(Hero);
        setHeroHeader("Welcome to Evans Okyere Farms");
        setHeroText(
          "Evans Okyere Farms makes organic fertilizer that serves as pesticides. He uses peels from oranges, mangoes, pineapples, etc. and neem leaves and animal droppings."
        );
        break;
      default:
        setBgImage(Hero);
        setHeroHeader("Crop nutrition solutions");
        setHeroText(
          "Increase the quality and yield of your crops. EvansOkyereFarms agronomists are here to help with advice on all aspects of crop nutrition."
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
        <div
          className="
    relative 
    flex flex-col 
    items-start 
    justify-center 
    bg-red-500 
    bg-opacity-80 
    px-6 
    py-4 
    rounded-sm 
    md:flex-row 
    md:justify-between 
    md:px-8 
    md:py-6 
    mx-auto 
    m-10 
    md:mt-12 
    w-full 
    max-w-lg 
    md:max-w-2xl
    transform 
    translate-y-4 
    translate-x-2
  "
        >
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
              strokeWidth="4"
              stroke="currentColor"
              className="w-7 h-8 text-white"
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
                    ? "border-b-red-800 text-red-600"
                    : "border-b-transparent text-red-900"
                } hover:bg-gray-100 md:px-6 md:py-3`}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-25 z-10" // Fullscreen backdrop
            onClick={() => setMenuOpen(false)} // Close menu on backdrop click
          ></div>

          {/* Mobile Tabs Menu */}
          <div className="fixed top-12 left-0 w-full bg-black bg-opacity-80 p-4 rounded-sm shadow-md z-20">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="block text-lg px-6 py-2 text-white hover:bg-gray-100 rounded-md"
                onClick={() => setMenuOpen(false)} // Close menu on navigation
              >
                {link.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default HeroSection;
