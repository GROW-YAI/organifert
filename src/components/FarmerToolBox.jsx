// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import NTester from "../assets/ntester.png";
// import ChectIt from "../assets/checkit.png";
// import ImageIt from "../assets/imageit.png";
// import SoilAnalysis from "../assets/soilanalysis.png";
// import LeafAnalysis from "../assets/leaf-analysis.png";
// import Megalab from "../assets/megalab.png";
// const FarmerToolBox = ({ showBreadCrumb = true }) => {
//   const navigate = useNavigate();

//   const handleToolClick = (tool) => {
//     // Navigate to the detailed page for the selected tool
//     navigate(`/tool/${tool.id}`);
//   };

//   const tools = [
//     {
//       id: "n-tester",
//       image: NTester,
//       title: "N-Tester - to measure leaf nitrogen",
//       description:
//         "The N-Tester is a hand held leaf nitrogen measurement tool which enables quick and easy readings to be taken in a growing crop to establish its exact nitrogen status.",
//     },
//     {
//       id: "checkitapp",
//       image: ChectIt,
//       title: "CheckIT - to identify nutrient deficiencies",
//       description:
//         "Yara CheckIT is an agricultural mobile device app that gives farmers a simple and fast identification of possible nutrient deficiencies.",
//     },
//     {
//       id: "imageit",
//       image: ImageIt,
//       title: "ImageIT - for gai based nitrogen recommendations",
//       description:
//         "ImageIT is an application for smartphones that evaluates biomass and the amount of nitrogen taken up by your cereal or oilseed rape crops with computer processing of digital photographs.",
//     },
//     {
//       id: "soil-analysis",
//       image: SoilAnalysis,
//       title: "Soil analysis - to identify limiting factors",
//       description:
//         "Soil analysis gives the background knowledge on the chemical, physical and biological status of a soil that we need in order to properly manage our soils and crops.",
//     },
//     {
//       id: "leaf-analysis",
//       image: LeafAnalysis,
//       title: "Leaf analysis - to identify nutrient deficiencies",
//       description:
//         "Leaf analysis is the only sure way to determine the nutritional requirements of a plant and to identify if it is suffering from a nutrient deficiency.",
//     },
//     {
//       id: "megalab",
//       image: Megalab,
//       title: "Megalab™",
//       description:
//         "Yara Megalab™ is an Internet based, secure system offering interpretation and biometric data services from agricultural analysis.",
//     },
//   ];
//   const getBreadcrumbItems = () => {
//     const pathnames = location.pathname.split("/").filter((x) => x);
//     return [
//       { label: "Home", path: "/" }, // Always show "Home"
//       { label: "Crop Nutition", path: "/" }, // Always show "Home"
//       ...pathnames.map((_, index) => {
//         const href = `/${pathnames.slice(0, index + 1).join("/")}`;
//         const label = href
//           .split("/")
//           .slice(-1)[0]
//           .replace(/-/g, " ") // Replace dashes with spaces for readability
//           .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize words
//         return { href, label };
//       }),
//     ];
//   };

//   const breadcrumbItems = getBreadcrumbItems();
//   return (
//     <div className="max-w-6xl mx-auto py-8">
//       {showBreadCrumb && (
//         <nav
//           aria-label="Breadcrumb"
//           className="bg-gray-100 py-3 shadow-sm mb-6"
//         >
//           <div className="max-w-7xl mx-auto px-6">
//             <ol className="flex items-center space-x-2 text-gray-500 text-sm">
//               {breadcrumbItems.map((item, index) => (
//                 <React.Fragment key={index}>
//                   {index > 0 && (
//                     <li>
//                       <svg
//                         className="h-5 w-5 text-gray-400"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </li>
//                   )}
//                   <li>
//                     {index === breadcrumbItems.length - 1 ? (
//                       <span className="text-blue-900 font-semibold">
//                         {item.label}
//                       </span>
//                     ) : (
//                       <Link to={item.path} className="hover:text-blue-700">
//                         {item.label}
//                       </Link>
//                     )}
//                   </li>
//                 </React.Fragment>
//               ))}
//             </ol>
//           </div>
//         </nav>
//       )}

//       <h2 className="text-2xl font-bold mb-4">
//         Make better informed nutrient decisions
//       </h2>
//       <p className="mb-8">
//         Information and knowledge is fundamental to making better informed
//         nutrient decisions. Our collection of tools help you to make better
//         nutrient decisions in making the right fertiliser choice and applying
//         the right amount of nutrients at the right time and in the right place
//         so that the crop yield and quality can be maximised whilst still keeping
//         costs in check, avoiding over-fertilisation and protecting the
//         environment.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {tools.map((tool) => (
//           <div
//             key={tool.id}
//             className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer"
//             onClick={() => handleToolClick(tool)}
//           >
//             <img
//               src={tool.image}
//               alt={tool.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-medium mb-2">{tool.title}</h3>
//               <p>{tool.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FarmerToolBox;

/* eslint-disable react/prop-types */
// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import NTester from "../assets/ntester.png";
// import ChectIt from "../assets/checkit.png";
// import ImageIt from "../assets/imageit.png";
// import SoilAnalysis from "../assets/soilanalysis.png";
// import LeafAnalysis from "../assets/leaf-analysis.png";
// import Megalab from "../assets/megalab.png";

// const FarmerToolBox = ({ showBreadCrumb = true }) => {
//   const navigate = useNavigate();

//   const handleToolClick = (tool) => {
//     // Navigate to the detailed page for the selected tool
//     navigate(`/tool/${tool.id}`);
//   };

//   const tools = [
//     {
//       id: "n-tester",
//       image: NTester,
//       title: "N-Tester - to measure leaf nitrogen",
//       description:
//         "The N-Tester is a handheld leaf nitrogen measurement tool which enables quick and easy readings to be taken in a growing crop to establish its exact nitrogen status.",
//     },
//     {
//       id: "checkitapp",
//       image: ChectIt,
//       title: "CheckIT - to identify nutrient deficiencies",
//       description:
//         "Yara CheckIT is an agricultural mobile device app that gives farmers a simple and fast identification of possible nutrient deficiencies.",
//     },
//     {
//       id: "imageit",
//       image: ImageIt,
//       title: "ImageIT - for GAI-based nitrogen recommendations",
//       description:
//         "ImageIT is an application for smartphones that evaluates biomass and the amount of nitrogen taken up by your cereal or oilseed rape crops with computer processing of digital photographs.",
//     },
//     {
//       id: "soil-analysis",
//       image: SoilAnalysis,
//       title: "Soil Analysis - to identify limiting factors",
//       description:
//         "Soil analysis provides the background knowledge on the chemical, physical, and biological status of a soil that we need to properly manage our soils and crops.",
//     },
//     {
//       id: "leaf-analysis",
//       image: LeafAnalysis,
//       title: "Leaf Analysis - to identify nutrient deficiencies",
//       description:
//         "Leaf analysis is the only sure way to determine the nutritional requirements of a plant and to identify if it is suffering from a nutrient deficiency.",
//     },
//     {
//       id: "megalab",
//       image: Megalab,
//       title: "Megalab™",
//       description:
//         "Yara Megalab™ is an Internet-based, secure system offering interpretation and biometric data services from agricultural analysis.",
//     },
//   ];

//   const getBreadcrumbItems = () => {
//     const pathnames = location.pathname.split("/").filter((x) => x);
//     return [
//       { label: "Home", path: "/" }, // Always show "Home"
//       // { label: "Crop Nutrition", path: "/" }, // Always show "Crop Nutrition"
//       ...pathnames.map((_, index) => {
//         const href = `/${pathnames.slice(0, index + 1).join("/")}`;
//         const label = href
//           .split("/")
//           .slice(-1)[0]
//           .replace(/-/g, " ") // Replace dashes with spaces for readability
//           .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize words
//         return { href, label };
//       }),
//     ];
//   };

//   const breadcrumbItems = getBreadcrumbItems();

//   return (
//     <div className="max-w-6xl mx-auto py-8 px-4">
//       {/* Breadcrumb Navigation */}
//       {showBreadCrumb && (
//         <nav aria-label="Breadcrumb" className="bg-gray-100 py-3 shadow-sm">
//           <div className="max-w-7xl mx-auto px-6">
//             <ol className="flex items-center space-x-2 text-gray-500 text-sm">
//               {breadcrumbItems.map((item, index) => (
//                 <React.Fragment key={index}>
//                   {index > 0 && (
//                     <li>
//                       <svg
//                         className="h-5 w-5 text-gray-400"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </li>
//                   )}
//                   <li>
//                     {index === breadcrumbItems.length - 1 ? (
//                       <span className="text-blue-900 font-semibold">
//                         {item.label}
//                       </span>
//                     ) : (
//                       <Link to={item.path} className="hover:text-blue-700">
//                         {item.label}
//                       </Link>
//                     )}
//                   </li>
//                 </React.Fragment>
//               ))}
//             </ol>
//           </div>
//         </nav>
//       )}

//       {/* Title and Description */}
//       <h2 className="text-2xl text-[#1E4A98] md:text-3xl font-bold mb-4">
//         Make better-informed nutrient decisions
//       </h2>
//       <p className="text-sm md:text-base text-gray-600 mb-8">
//         Information and knowledge are fundamental to making better-informed
//         nutrient decisions. Our collection of tools helps you make the right
//         fertiliser choice, applying the right amount of nutrients at the right
//         time and place. This ensures crop yield and quality maximisation while
//         keeping costs in check, avoiding over-fertilisation, and protecting the
//         environment.
//       </p>

//       {/* Tools Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {tools.map((tool) => (
//           <div
//             key={tool.id}
//             className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
//             onClick={() => handleToolClick(tool)}
//           >
//             {/* Tool Image */}
//             <img
//               src={tool.image}
//               alt={tool.title}
//               className="w-full h-48 object-cover"
//             />
//             {/* Tool Details */}
//             <div className="p-4">
//               <h3 className="text-lg font-medium text-[#1E4A98] mb-2">
//                 {tool.title}
//               </h3>
//               <p className="text-gray-700 text-sm">{tool.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FarmerToolBox;

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
      { label: "Home", path: "#" }, // Always show "Home"
      // { label: "Crop Nutrition", path: "/" },
      ...pathnames.map((_, index) => {
        const href = `/${pathnames.slice(0, index + 1).join("/")}`;
        const label = href
          .split("/")
          .slice(-1)[0]
          .replace(/-/g, " ") // Replace dashes with spaces for readability
          .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize words
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
      title: "N-Tester - to measure leaf nitrogen",
      description:
        "The N-Tester is a handheld leaf nitrogen measurement tool which enables quick and easy readings to be taken in a growing crop to establish its exact nitrogen status.",
    },
    {
      id: "checkitapp",
      image: ChectIt,
      title: "CheckIT - to identify nutrient deficiencies",
      description:
        "Yara CheckIT is an agricultural mobile device app that gives farmers a simple and fast identification of possible nutrient deficiencies.",
    },
    {
      id: "imageit",
      image: ImageIt,
      title: "ImageIT - for GAI-based nitrogen recommendations",
      description:
        "ImageIT is an application for smartphones that evaluates biomass and the amount of nitrogen taken up by your cereal or oilseed rape crops with computer processing of digital photographs.",
    },
    {
      id: "soil-analysis",
      image: SoilAnalysis,
      title: "Soil Analysis - to identify limiting factors",
      description:
        "Soil analysis provides the background knowledge on the chemical, physical, and biological status of a soil that we need to properly manage our soils and crops.",
    },
    {
      id: "leaf-analysis",
      image: LeafAnalysis,
      title: "Leaf Analysis - to identify nutrient deficiencies",
      description:
        "Leaf analysis is the only sure way to determine the nutritional requirements of a plant and to identify if it is suffering from a nutrient deficiency.",
    },
    {
      id: "megalab",
      image: Megalab,
      title: "Megalab™",
      description:
        "Yara Megalab™ is an Internet-based, secure system offering interpretation and biometric data services from agricultural analysis.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      {showBreadCrumb && (
        <nav
          aria-label="Breadcrumb"
          className="bg-gray-100 py-3 shadow-sm mt-10"
        >
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
                        className="text-blue-900 font-semibold"
                        aria-current="page"
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link to={item.href} className="hover:text-blue-700">
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
      <div className="px-6 py-12">
        <h2 className="text-2xl md:text-3xl text-[#1E4A98] font-bold mb-4">
          Make better-informed nutrient decisions
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-8">
          Information and knowledge are fundamental to making better-informed
          nutrient decisions. Our collection of tools helps you make the right
          fertiliser choice, applying the right amount of nutrients at the right
          time and place. This ensures crop yield and quality maximisation while
          keeping costs in check, avoiding over-fertilisation, and protecting
          the environment.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
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
              <h3 className="text-lg font-medium text-[#1E4A98] mb-2">
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
