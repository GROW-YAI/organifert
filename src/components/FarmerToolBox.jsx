import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import NTester from "../assets/ntester.png";
import ChectIt from "../assets/checkit.png";
import ImageIt from "../assets/imageit.png";
import SoilAnalysis from "../assets/soilanalysis.png";
import LeafAnalysis from "../assets/leaf-analysis.png";
import Megalab from "../assets/megalab.png";

const FarmerToolBox = ({ showBreadCrumb = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const getBreadcrumbItems = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    return [
      { label: "Home", path: "/" },
      ...pathnames.map((_, index) => {
        const href = `/${pathnames.slice(0, index + 1).join("/")}`;
        const label = href
          .split("/")
          .slice(-1)[0]
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        return { href, label };
      }),
    ];
  };

  const breadcrumbItems = getBreadcrumbItems();
  const handleToolClick = (tool) => {
    navigate(`/tool/${tool.id}`);
  };

  const tools = [
    {
      id: "n-tester",
      image: NTester,
      title: "Eco-Nitrogen Tester",
      description:
        "Measure leaf nitrogen levels organically to optimize nutrient use. Ensures healthy crop growth without chemical overloads.",
    },
    {
      id: "checkitapp",
      image: ChectIt,
      title: "CheckIT - Organic Nutrient Guide",
      description:
        "A mobile app that helps farmers identify organic nutrient deficiencies quickly and recommends natural remedies.",
    },
    {
      id: "imageit",
      image: ImageIt,
      title: "ImageIT - Sustainable Crop Insights",
      description:
        "Analyze crop health and biomass using eco-friendly data to guide nitrogen management and maintain soil integrity.",
    },
    {
      id: "soil-analysis",
      image: SoilAnalysis,
      title: "Organic Soil Analysis",
      description:
        "Understand your soil's natural nutrient profile to optimize organic inputs, improve fertility, and enhance soil biodiversity.",
    },
    {
      id: "leaf-analysis",
      image: LeafAnalysis,
      title: "Leaf Analysis - Organic Focus",
      description:
        "Accurately determine plant nutritional needs using eco-friendly analysis, ensuring sustainable growth and minimal waste.",
    },
    {
      id: "megalab",
      image: Megalab,
      title: "Megalab™ - Organic Data Insights",
      description:
        "An innovative platform offering insights and recommendations from soil and crop analysis tailored for organic practices.",
    },
  ];

  return (
    <div className="max-w-full mx-auto">
      {/* Breadcrumb Navigation */}
      {showBreadCrumb && (
        <nav aria-label="Breadcrumb" className="py-0 mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <ol className="flex items-center space-x-2 text-gray-500 text-sm">
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <li>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                  )}
                  <li>
                    {index === breadcrumbItems.length - 1 ? (
                      <span
                        className="text-red-800 font-semibold"
                        aria-current="page"
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link to={item.href} className="hover:text-red-700">
                        {item.label}
                      </Link>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </div>
        </nav>
      )}

      {/* Title and Description */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-red-800 font-bold mb-4">
          Grow Organically, Sustainably, and Successfully
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-8">
          Embrace sustainable farming with tools designed to help you make the
          most of organic fertilizers. From precise nutrient application to crop
          and soil health assessments, our toolbox empowers you to enhance
          productivity while protecting the planet.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto mb-14">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => handleToolClick(tool)}
          >
            <img
              src={tool.image}
              alt={tool.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-red-800 mb-2">
                {tool.title}
              </h3>
              <p className="text-gray-700 text-sm">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerToolBox;
