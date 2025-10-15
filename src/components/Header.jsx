import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "../assets/hero.png";
import CropInfo from "../assets/cropinfo.png";
import Safety from "../assets/bg-safety.png";
import FarmerToolbox from "../assets/farmertoolbox.png";
import Logo from "../assets/logo/high-resolution-logo.png";

// Hero navigation links
const links = [
  { name: "Crop Information", path: "/crop-info" },
  { name: "Fertilisers", path: "/fertilisers" },
  { name: "Farmer's toolbox", path: "/toolbox" },
  { name: "Fertiliser handling and safety", path: "/safety" },
];

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect: adds background + shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Evans Okyere Farms Logo"
            className="h-14 w-auto sm:h-20 md:h-24"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 text-red-900 font-semibold">
          <li>
            <Link to="/" className="hover:underline text-lg">
              Crop Nutrition Solution
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:underline text-lg">
              About EvansOkyereFarms
            </Link>
          </li>
          <li>
            <button
              onClick={() =>
                document
                  .getElementById("search")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-lg hover:underline"
            >
              🔍 Search
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-red-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu Items */}
          <ul className="absolute top-[72px] left-0 w-full bg-white text-red-900 font-semibold shadow-lg z-50 px-10 py-6 space-y-4">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg hover:bg-gray-100 py-2"
              >
                Crop Nutrition Solution
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg hover:bg-gray-100 py-2"
              >
                About Us
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  document
                    .getElementById("search")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full text-left text-lg hover:bg-gray-100 py-2"
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

// Hero Section Component
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
          "Discover eco-friendly practices to boost the quality and yield of your crops."
        );
        break;
      case "/fertilisers":
        setBgImage(Hero);
        setHeroHeader("Organic fertilisers");
        setHeroText(
          "Explore EvansOkyereFarms' organic fertilisers crafted from natural ingredients."
        );
        break;
      case "/toolbox":
        setBgImage(FarmerToolbox);
        setHeroHeader("Eco-friendly farmer's toolbox");
        setHeroText(
          "Access tools and services to optimise nutrient application and maximise yields."
        );
        break;
      case "/safety":
        setBgImage(Safety);
        setHeroHeader("Fertiliser handling and safety");
        setHeroText(
          "Learn best practices for safely handling organic fertilisers."
        );
        break;
      case "/about-us":
        setBgImage(Hero);
        setHeroHeader("Welcome to Evans Farms");
        setHeroText(
          "At Evans Okyere Farms, we produce organic fertilisers using natural ingredients to support sustainable farming."
        );
        break;
      default:
        setBgImage(FarmerToolbox);
        setHeroHeader("Crop nutrition solutions");
        setHeroText(
          "Increase crop quality sustainably. Get expert advice and organic solutions for eco-friendly farming."
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

      {/* Hero Content */}
      <div className="relative z-10 text-white px-6 py-10 md:py-48 max-w-5xl mx-auto">
        <div
          className="relative flex flex-col items-start justify-center 
          bg-red-500 bg-opacity-80 px-6 py-4 rounded-md 
          md:flex-row md:justify-between md:px-6 md:py-6 mx-auto w-full 
          max-w-lg md:max-w-2xl transform translate-y-4"
        >
          <div className="md:max-w-3xl">
            <h1 className="text-2xl font-bold md:text-4xl">{heroHeader}</h1>
            <p className="text-sm md:text-lg mt-2">{heroText}</p>
          </div>

          {/* Mobile Menu Toggle in Hero */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute bottom-4 right-4 md:hidden"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4"
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

        {/* Desktop Submenu */}
        <div className="bg-white shadow-md rounded-sm hidden md:block mt-10">
          <div className="flex flex-wrap justify-center pb-1">
            {links.map((link, index) => (
              <Link
                key={index}
                className={`px-4 py-2 text-lg border-b-2 transition-colors duration-200 ${
                  pathname === link.path
                    ? "border-b-red-800 text-red-600"
                    : "border-b-transparent text-red-900 hover:text-red-600"
                }`}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-25 z-10"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="fixed top-12 left-0 w-full bg-black bg-opacity-80 p-4 shadow-md z-20">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="block text-lg px-6 py-2 text-white hover:bg-gray-100 hover:text-black rounded-md"
                onClick={() => setMenuOpen(false)}
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
