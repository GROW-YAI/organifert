import React from "react";
import { useParams } from "react-router-dom";

const cropDetails = {
  1: {
    name: "Cabbage",
    details: "Cabbage is a leafy green vegetable rich in nutrients.",
  },
  2: {
    name: "Cocoa",
    details: "Cocoa is used to make chocolate and is rich in antioxidants.",
  },
  3: {
    name: "Maize",
    details: "Maize is a staple crop, also known as corn, grown worldwide.",
  },
  4: {
    name: "Onion",
    details: "Onions are used in cooking for their pungent flavor.",
  },
  5: {
    name: "Rice",
    details:
      "Rice is a cereal grain and a staple food for over half of the world's population.",
  },
  6: {
    name: "Tomato",
    details: "Tomatoes are a juicy fruit used in various dishes and sauces.",
  },
};

const CropDetails = () => {
  const { id } = useParams(); // Get the dynamic route parameter
  const crop = cropDetails[id];

  if (!crop) {
    return <h1>Crop not found!</h1>;
  }

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold text-blue-700">{crop.name}</h1>
      <p className="mt-4 text-gray-700">{crop.details}</p>
    </div>
  );
};

export default CropDetails;
