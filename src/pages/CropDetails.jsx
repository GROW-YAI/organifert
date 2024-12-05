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
      "Cabbage is a nutrient-rich leafy vegetable, ideal for organic farming. It thrives in cool climates with organic soil amendments, requiring compost and natural fertilizers to promote robust growth. Rich in vitamins C and K, cabbage is a staple for eco-conscious growers and consumers.",
    image: Cabbage,
    articles: [
      "Organic methods to boost cabbage yield",
      "Natural solutions for cabbage nutrient deficiencies",
    ],
    nutrients: ["N", "P", "K", "Ca", "Mg", "S", "B", "Zn", "Mn"],
  },
  2: {
    name: "Cocoa",
    details:
      "Cocoa, the foundation of organic chocolate production, benefits from natural farming methods. It thrives in tropical climates with the use of organic mulch, compost, and pest control practices, ensuring sustainable yields and improved soil health.",
    image: Cocoa,
    articles: [
      "Organic cocoa farming best practices",
      "Improving soil health for sustainable cocoa production",
    ],
    nutrients: ["N", "P", "K", "Ca", "Mg", "S", "Zn", "Cu", "B"],
  },
  3: {
    name: "Maize",
    details:
      "Maize, a vital cereal crop, grows optimally with organic fertilizers rich in nitrogen and phosphorus. Employing compost, green manure, and crop rotation can enhance its sustainability, making maize farming more eco-friendly.",
    image: Maize,
    articles: [
      "Sustainable techniques to improve maize yield",
      "Organic pest and disease management in maize farming",
    ],
    nutrients: ["N", "P", "K", "Mg", "S", "Zn", "Cu", "Fe", "Mn", "B"],
  },
  6: {
    name: "Tomato",
    details:
      "Tomatoes flourish with organic farming methods, utilizing compost, vermicompost, and natural pest repellents. Rich in nutrients like lycopene and potassium, tomatoes are a perfect fit for eco-friendly cultivation practices.",
    image: Tomato,
    articles: [
      "Growing healthy tomatoes organically",
      "Avoiding tomato blight with natural solutions",
    ],
    nutrients: ["N", "P", "K", "Ca", "Mg", "S", "B", "Zn", "Cu"],
  },
  4: {
    name: "Onion",
    details:
      "Onions benefit significantly from organic soil enhancements like well-rotted manure and bio-fertilizers. These practices ensure healthy bulb development while reducing the environmental impact of conventional farming.",
    image: Onion,
    articles: [
      "Enhancing onion growth with organic methods",
      "Managing onion nutrient deficiencies naturally",
    ],
    nutrients: ["N", "P", "K", "S", "Zn", "B", "Cu"],
  },
  5: {
    name: "Rice",
    details:
      "Rice thrives with organic methods such as natural water management, bio-fertilizers, and organic pest control. These techniques ensure sustainability while preserving biodiversity in paddy ecosystems.",
    image: Rice,
    articles: [
      "Sustainable practices for organic rice farming",
      "Optimizing nutrient management in organic paddy fields",
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

      <div className="relative bg-gradient-to-r from-gray-50 to-red-100 text  py-12">
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
