// import React from "react";
// import { useParams } from "react-router-dom";

// const cropDetails = {
//   1: {
//     name: "Cabbage",
//     details: "Cabbage is a leafy green vegetable rich in nutrients.",
//   },
//   2: {
//     name: "Cocoa",
//     details: "Cocoa is used to make chocolate and is rich in antioxidants.",
//   },
//   3: {
//     name: "Maize",
//     details: "Maize is a staple crop, also known as corn, grown worldwide.",
//   },
//   4: {
//     name: "Onion",
//     details: "Onions are used in cooking for their pungent flavor.",
//   },
//   5: {
//     name: "Rice",
//     details:
//       "Rice is a cereal grain and a staple food for over half of the world's population.",
//   },
//   6: {
//     name: "Tomato",
//     details: "Tomatoes are a juicy fruit used in various dishes and sauces.",
//   },
// };

// const CropDetails = () => {
//   const { id } = useParams(); // Get the dynamic route parameter
//   const crop = cropDetails[id];

//   if (!crop) {
//     return <h1>Crop not found!</h1>;
//   }

//   return (
//     <div className="container mx-auto p-10">
//       <h1 className="text-2xl font-bold text-red-700">{crop.name}</h1>
//       <p className="mt-4 text-gray-700">{crop.details}</p>
//     </div>
//   );
// };

// export default CropDetails;

// import React from "react";
// import { useParams } from "react-router-dom";

// const cropDetails = {
//   1: {
//     name: "Cabbage",
//     details: "Cabbage is a leafy green vegetable rich in nutrients.",
//     image: "cabbage.jpg",
//     articles: [
//       "How to increase cabbage yield",
//       "Identifying nutrient deficiencies in cabbage",
//     ],
//     nutrients: ["N", "P", "K", "Mg", "Ca", "S"],
//   },
//   2: {
//     name: "Cocoa",
//     details: "Cocoa is used to make chocolate and is rich in antioxidants.",
//     image: "cocoa.jpg",
//     articles: ["Best practices for cocoa farming", "Cocoa and soil health"],
//     nutrients: ["N", "K", "S", "Zn"],
//   },
//   // Add more crop details as needed
// };

// const CropDetails = () => {
//   const { id } = useParams(); // Get the dynamic route parameter
//   const crop = cropDetails[id];

//   if (!crop) {
//     return <h1>Crop not found!</h1>;
//   }

//   return (
//     <div className="bg-gray-50 text-gray-900">
//       {/* Header Section */}
//       <div className="relative bg-blue-600 text-white py-16">
//         <div className="container mx-auto px-6 md:px-20">
//           <h1 className="text-4xl font-bold">{crop.name}</h1>
//           <p className="mt-4 text-lg">{crop.details}</p>
//         </div>
//       </div>

//       {/* Nutrient Deficiency Section */}
//       <div className="container mx-auto px-6 md:px-20 py-16">
//         <h2 className="text-2xl font-semibold mb-8 text-center">
//           Do your {crop.name.toLowerCase()}s have a nutrient deficiency?
//         </h2>
//         <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
//           {crop.nutrients.map((nutrient, index) => (
//             <div
//               key={index}
//               className="border rounded-md text-center py-4 text-blue-600 border-blue-400"
//             >
//               <span className="font-bold text-xl">{nutrient}</span>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//             See all
//           </button>
//         </div>
//       </div>

//       {/* Articles Section */}
//       <div className="bg-gray-100 py-16">
//         <div className="container mx-auto px-6 md:px-20">
//           <h2 className="text-2xl font-semibold mb-8 text-center">
//             Expert Advice on {crop.name}
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {crop.articles.map((article, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition"
//               >
//                 <h3 className="text-lg font-semibold mb-4">{article}</h3>
//                 <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//                   Read more
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Tools Section */}
//       <div className="container mx-auto px-6 md:px-20 py-16">
//         <h2 className="text-2xl font-semibold mb-8 text-center">
//           Make Better Informed Nutrient Decisions
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Example tools - customize these images and texts */}
//           <div className="bg-white shadow-md rounded-md overflow-hidden">
//             <img
//               src="/images/tool1.jpg"
//               alt="Tool 1"
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4">
//               <h4 className="font-semibold text-lg">Megalab™</h4>
//               <p className="mt-2 text-sm">
//                 Analyze your crop health with precision.
//               </p>
//             </div>
//           </div>
//           <div className="bg-white shadow-md rounded-md overflow-hidden">
//             <img
//               src="/images/tool2.jpg"
//               alt="Tool 2"
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4">
//               <h4 className="font-semibold text-lg">N-Tester</h4>
//               <p className="mt-2 text-sm">Measure leaf nitrogen levels.</p>
//             </div>
//           </div>
//           {/* Add more tools as needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CropDetails;

import React from "react";
import { useParams } from "react-router-dom";
import Cabbage from "../assets/cabbage.png";
import Cocoa from "../assets/cocoa.png";
import Maize from "../assets/maize.png";
import Onion from "../assets/onion.png";
import Rice from "../assets/rice.png";
import Tomato from "../assets/tomato.png";
import NTester from "../assets/ntester.png";
import Megalab from "../assets/megalab.png";
import ImageIt from "../assets/imageit.png";
import SoilAnalysis from "../assets/soilanalysis.png";

const cropDetails = {
  1: {
    name: "Cabbage",
    details:
      "Cabbage is a versatile and nutrient-rich leafy green vegetable that belongs to the Brassica family. It is cultivated worldwide and is valued for its high content of vitamins C and K, dietary fiber, and antioxidants. Cabbage is commonly used in salads, stir-fries, soups, and fermented products like sauerkraut and kimchi. It thrives in cool climates and requires consistent soil moisture and balanced nutrients for optimal growth.",
    image: Cabbage,
    articles: [
      "How to increase cabbage yield",
      "Identifying nutrient deficiencies in cabbage",
    ],
    nutrients: ["N", "P", "K", "Ca", "Mg", "S", "B", "Zn", "Mn"],
  },
  2: {
    name: "Cocoa",
    details:
      "Cocoa is the primary ingredient for chocolate production and is derived from the seeds of the cacao tree (Theobroma cacao). Indigenous to tropical regions, cocoa is a highly sought-after crop due to its unique flavor and health benefits, such as its high antioxidant content and potential cardiovascular benefits. Cocoa trees require a warm, humid climate, well-drained soils, and careful attention to pest and disease management to ensure healthy yields.",
    image: Cocoa,
    articles: ["Best practices for cocoa farming", "Cocoa and soil health"],
    nutrients: ["N", "P", "K", "Ca", "Mg", "S", "Zn", "Cu", "B"],
  },
  3: {
    name: "Maize",
    details:
      "Maize, also known as corn, is one of the world's most important cereal crops. It serves as a staple food for millions of people and is also widely used as animal feed and in industrial applications. Rich in carbohydrates, maize provides energy and essential nutrients. It grows best in warm climates with moderate rainfall and requires well-drained soil with adequate nitrogen and phosphorus for optimal growth.",
    image: Maize,
    articles: [
      "Improving maize yields sustainably",
      "Common pests and diseases in maize farming",
    ],
    nutrients: ["N", "P", "K", "Mg", "S", "Zn", "Cu", "Fe", "Mn", "B"],
  },
  6: {
    name: "Tomato",
    details:
      "Tomatoes are a widely consumed fruit that is integral to cuisines around the globe. Known for their juiciness and vibrant red color, tomatoes are rich in vitamins A and C, potassium, and antioxidants like lycopene. Tomatoes thrive in well-drained, fertile soils and require consistent watering and sunlight. Proper care, including staking and pest control, is essential to produce healthy and flavorful fruits.",
    image: Tomato,
    articles: [
      "Tips for growing healthy tomatoes",
      "How to avoid tomato blight",
    ],
    nutrients: ["N", "P", "K", "Ca", "Mg", "S", "B", "Zn", "Cu"],
  },
  4: {
    name: "Onion",
    details:
      "Onions are an essential culinary vegetable known for their sharp flavor and versatility in cooking. They are rich in dietary fiber, vitamins C and B6, and flavonoids that offer various health benefits. Onions are grown from seeds or bulbs and require well-drained soils, full sunlight, and consistent watering. Proper nutrient management is vital to ensure good bulb size and prevent common issues like splitting or rot.",
    image: Onion,
    articles: [
      "Enhancing onion bulb size",
      "Managing nutrient deficiencies in onions",
    ],
    nutrients: ["N", "P", "K", "S", "Zn", "B", "Cu"],
  },
  5: {
    name: "Rice",
    details:
      "Rice is a staple cereal crop and a primary source of energy for more than half the world's population. It thrives in warm, humid climates and is commonly cultivated in flooded fields or paddy systems. Rice grains are a rich source of carbohydrates, with moderate amounts of protein and essential micronutrients. Sustainable rice farming practices, such as efficient water use and balanced fertilization, are critical for maintaining productivity and environmental health.",
    image: Rice,
    articles: [
      "Increasing rice production in wet climates",
      "Nutrient management for paddy fields",
    ],
    nutrients: ["N", "P", "K", "S", "Zn", "Fe", "Mg", "Mn"],
  },
};

const CropDetails = () => {
  const { id } = useParams(); // Get the dynamic route parameter
  const crop = cropDetails[id];

  if (!crop) {
    return <h1 className="text-center text-red-600 mt-20">Crop not found!</h1>;
  }

  return (
    <div className="bg-gray-50 text-red-900 font-sans">
      {/* Header Section */}

      <div className="relative bg-gradient-to-r from-gray-50 to-red-100 text-Red py-12">
        <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-extrabold">{crop.name}</h1>
            <p className="mt-4 text-lg text-gray-700">{crop.details}</p>
          </div>
          {crop.image && (
            <img
              src={crop.image}
              alt={crop.name}
              className="md:w-80 w-60 mt-8 md:mt-0 md:ml-10 rounded-md shadow-lg"
            />
          )}
        </div>
      </div>

      {/* Nutrient Deficiency Section */}
      <div className="container mx-auto px-6 md:px-20 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
          Does your {crop.name.toLowerCase()} have a nutrient deficiency?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {crop.nutrients.map((nutrient, index) => (
            <div
              key={index}
              className="border rounded-lg text-center py-6 text-red-700 bg-white shadow-md hover:shadow-lg transition"
            >
              <span className="font-bold text-xl">{nutrient}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-700 transition">
            Explore Deficiency Solutions
          </button>
        </div>
      </div>

      {/* Articles Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-20">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
            Expert Advice on {crop.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {crop.articles.map((article, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-4">{article}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn actionable tips and insights for better {crop.name}{" "}
                  care.
                </p>
                <button className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-700 transition">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="container mx-auto px-6 md:px-20 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
          Advanced Tools for Better Farming
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Example tool cards */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={Megalab}
              alt="Megalab™"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">Megalab™</h4>
              <p className="mt-2 text-sm text-gray-600">
                Analyze your crop health with precision tools.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={NTester}
              alt="N-Tester"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">N-Tester</h4>
              <p className="mt-2 text-sm text-gray-600">
                Measure leaf nitrogen levels effortlessly.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={ImageIt}
              alt="Image-IT"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">ImageIT</h4>
              <p className="mt-2 text-sm text-gray-600">
                Evaluates biomass and the amount of nitrogen.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={SoilAnalysis}
              alt="Soil-Analysis"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">N-Tester</h4>
              <p className="mt-2 text-sm text-gray-600">
                Soil analysis - to identify limiting factors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetails;
