// import React from "react";
// import Cola from "../assets/evanscola.png";
// import Bela from "../assets/evansbela.png";
// // import Vita from "../assets/evansvita.png";
// // import Calci from "../assets/evanscalci.png";
// const ProductDetails = () => {
//   const product = {
//     name: "EvansBela SULFAN",
//     description:
//       "EvansBela nitrate based fertilisers are pure nutrients, offering the required precision efficiency and reliability to meet the agronomic and environmental imperatives of modern agriculture. Nitrate nitrogen has been proven to be the best form of nitrogen for Ghanaian farming conditions.",
//     image: Bela, // Replace with actual image path
//     nutrients: [
//       { symbol: "N", name: "Nitrogen" },
//       { symbol: "S", name: "Sulfur" },
//     ],
//     relatedProducts: [
//       {
//         id: 1,
//         name: "EvansBela SULFAN",
//         description: "An improved alternative to SA",
//         image: Cola, // Replace with actual image path
//       },
//       //   {
//       //     id: 2,
//       //     name: "EvansMila COMPOUND",
//       //     description: "A balanced compound fertiliser for higher efficiency",
//       //     image: Mila, // Replace with actual image path
//       //   },
//       //   {
//       //     id: 3,
//       //     name: "EvansCola NITRATE",
//       //     description: "Nitrogen fertiliser with ammonium nitrate for grassland",
//       //     image: Vita, // Replace with actual image path
//       //   },
//       //   {
//       //     id: 4,
//       //     name: "EvansArable BALANCED",
//       //     description: "Uniform compound for balanced crop nutrition",
//       //     image: Calci, // Replace with actual image path
//       //   },
//     ],
//   };

//   return (
//     <div className="py-12 bg-gray-50">
//       {/* Container */}
//       <div className="container mx-auto px-4">
//         {/* Breadcrumb */}
//         <nav className="text-sm text-gray-500 mb-6">
//           <a href="/" className="text-red-600 hover:underline">
//             Home
//           </a>{" "}
//           &gt;{" "}
//           <a href="/crop-nutrition" className="text-red-600 hover:underline">
//             Crop nutrition
//           </a>{" "}
//           &gt;{" "}
//           <a href="/fertilisers" className="text-red-600 hover:underline">
//             Fertilisers
//           </a>{" "}
//           &gt; <span className="text-gray-900">{product.name}</span>
//         </nav>

//         {/* Product Header */}
//         <div className="flex flex-wrap items-center bg-white p-6 rounded-lg shadow">
//           {/* Product Information */}
//           <div className="w-full md:w-2/3 md:pl-8">
//             <h1 className="text-2xl font-semibold text-gray-900 mb-4">
//               {product.name}
//             </h1>
//             <p className="text-gray-700">{product.description}</p>
//           </div>{" "}
//           {/* Product Image */}
//           <div className="w-full md:w-1/3 flex justify-center">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="h-52 w-auto object-contain"
//             />
//           </div>
//         </div>

//         {/* Nutrients Section */}
//         <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">
//             Nutrients
//           </h2>
//           <div className="flex space-x-4">
//             {product.nutrients.map((nutrient) => (
//               <div
//                 key={nutrient.symbol}
//                 className="bg-white text-center p-4 shadow-md rounded-sm"
//               >
//                 <div className="text-2xl font-bold text-red-600">
//                   {nutrient.symbol}
//                 </div>
//                 <div className="text-gray-600 text-sm">{nutrient.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Related Products */}
//         <div className="mt-12">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">
//             {product.relatedProducts.length} products found
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {product.relatedProducts.map((related) => (
//               <div
//                 key={related.id}
//                 className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
//               >
//                 <img
//                   src={related.image}
//                   alt={related.name}
//                   className="w-full h-48 object-contain bg-gray-100 p-4"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-red-600 mb-2">
//                     {related.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm">{related.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React from "react";
import Cola from "../assets/evanscola.png";
import Bela from "../assets/evansbela.png";
// import Vita from "../assets/evansvita.png";
// import Calci from "../assets/evanscalci.png";

const ProductDetails = () => {
  const product = {
    name: "Organic Banana Fertilizer",
    description:
      "This organic fertilizer is made from nutrient-rich banana residues, which are an excellent source of potassium and nitrogen. It is designed to enrich soil health, improve plant growth, and increase crop yields sustainably without harming the environment. Ideal for eco-conscious farmers looking for organic alternatives.",
    image: Bela, // Replace with actual image path
    nutrients: [
      { symbol: "K", name: "Potassium" },
      { symbol: "N", name: "Nitrogen" },
    ],
    relatedProducts: [
      {
        id: 1,
        name: "Organic Moringa Compost",
        description:
          "Moringa leaves, known for their high nutrient content, are turned into a compost that enhances soil fertility and promotes sustainable farming practices.",
        image: Cola, // Replace with actual image path
      },
      {
        id: 2,
        name: "Citrus Peel Organic Fertilizer",
        description:
          "Made from composted citrus peels, this natural fertilizer adds vital minerals to the soil, improving water retention and boosting plant health.",
        image: Bela, // Replace with actual image path
      },
      {
        id: 3,
        name: "Animal Manure Organic Fertilizer",
        description:
          "This slow-release organic fertilizer is made from composted animal manure, offering balanced nutrition for crops and improving soil structure over time.",
        image: Cola, // Replace with actual image path
      },
    ],
  };

  return (
    <div className="py-12 bg-gray-50">
      {/* Container */}
      <div className="container max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="text-red-600 hover:underline">
            Home
          </a>{" "}
          &gt;{" "}
          <a href="/crop-nutrition" className="text-red-600 hover:underline">
            Crop Nutrition
          </a>{" "}
          &gt;{" "}
          <a href="/fertilisers" className="text-red-600 hover:underline">
            Fertilizers
          </a>{" "}
          &gt; <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Product Header */}
        <div className="flex flex-wrap items-center bg-white p-6 rounded-lg shadow">
          {/* Product Information */}
          <div className="w-full md:w-2/3 md:pl-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-700">{product.description}</p>
          </div>{" "}
          {/* Product Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="h-52 w-auto object-contain"
            />
          </div>
        </div>

        {/* Nutrients Section */}
        <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Nutrients
          </h2>
          <div className="flex space-x-4">
            {product.nutrients.map((nutrient) => (
              <div
                key={nutrient.symbol}
                className="bg-white text-center p-4 shadow-md rounded-sm"
              >
                <div className="text-2xl font-bold text-red-600">
                  {nutrient.symbol}
                </div>
                <div className="text-gray-600 text-sm">{nutrient.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {product.relatedProducts.length} Related Organic Fertilizers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.relatedProducts.map((related) => (
              <div
                key={related.id}
                className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-48 object-contain bg-gray-100 p-4"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">
                    {related.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{related.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// import { useState, useEffect } from "react";
// import Cola from "../assets/evanscola.png";
// import Bela from "../assets/evansbela.png";
// // import Vita from "../assets/evansvita.png";
// // import Calci from "../assets/evanscalci.png";

// const ProductDetails = ({ selectedFertilizerType }) => {
//   // Default data for organic fertilizers
//   const [product, setProduct] = useState({
//     name: "Organic Banana Fertilizer",
//     description:
//       "This organic fertilizer is made from nutrient-rich banana residues, which are an excellent source of potassium and nitrogen. It is designed to enrich soil health, improve plant growth, and increase crop yields sustainably without harming the environment. Ideal for eco-conscious farmers looking for organic alternatives.",
//     image: Bela,
//     nutrients: [
//       { symbol: "K", name: "Potassium" },
//       { symbol: "N", name: "Nitrogen" },
//     ],
//     relatedProducts: [
//       {
//         id: 1,
//         name: "Organic Moringa Compost",
//         description:
//           "Moringa leaves, known for their high nutrient content, are turned into a compost that enhances soil fertility and promotes sustainable farming practices.",
//         image: Cola,
//       },
//       {
//         id: 2,
//         name: "Citrus Peel Organic Fertilizer",
//         description:
//           "Made from composted citrus peels, this natural fertilizer adds vital minerals to the soil, improving water retention and boosting plant health.",
//         image: Bela,
//       },
//       {
//         id: 3,
//         name: "Animal Manure Organic Fertilizer",
//         description:
//           "This slow-release organic fertilizer is made from composted animal manure, offering balanced nutrition for crops and improving soil structure over time.",
//         image: Cola,
//       },
//     ],
//   });

//   // Example of different fertilizer types
//   const fertilizerData = {
//     organicBanana: {
//       name: "Organic Banana Fertilizer",
//       description:
//         "This organic fertilizer is made from nutrient-rich banana residues, which are an excellent source of potassium and nitrogen. It enriches soil health, improves plant growth, and increases crop yields sustainably.",
//       image: Bela,
//       nutrients: [
//         { symbol: "K", name: "Potassium" },
//         { symbol: "N", name: "Nitrogen" },
//       ],
//     },
//     organicMoringa: {
//       name: "Organic Moringa Fertilizer",
//       description:
//         "Moringa-based fertilizer enhances soil fertility by providing essential micronutrients and nitrogen. Moringa is a rich source of vitamins and minerals, ideal for sustainable farming.",
//       image: Cola,
//       nutrients: [
//         { symbol: "N", name: "Nitrogen" },
//         { symbol: "Mg", name: "Magnesium" },
//       ],
//     },
//     organicAnimalManure: {
//       name: "Organic Animal Manure Fertilizer",
//       description:
//         "Animal manure, when composted properly, makes an excellent organic fertilizer. It adds essential nutrients to the soil, improves soil structure, and encourages beneficial microbes.",
//       image: Bela, // Replace with actual image path
//       nutrients: [
//         { symbol: "P", name: "Phosphorus" },
//         { symbol: "K", name: "Potassium" },
//         { symbol: "N", name: "Nitrogen" },
//       ],
//     },
//   };

//   // Effect to update product details based on selected fertilizer type
//   useEffect(() => {
//     if (selectedFertilizerType && fertilizerData[selectedFertilizerType]) {
//       setProduct(fertilizerData[selectedFertilizerType]);
//     }
//   }, [selectedFertilizerType]);

//   return (
//     <div className="py-12 bg-gray-50">
//       {/* Container */}
//       <div className="container mx-auto px-4">
//         {/* Breadcrumb */}
//         <nav className="text-sm text-gray-500 mb-6">
//           <a href="/" className="text-red-600 hover:underline">
//             Home
//           </a>{" "}
//           &gt;{" "}
//           <a href="/crop-nutrition" className="text-red-600 hover:underline">
//             Crop Nutrition
//           </a>{" "}
//           &gt;{" "}
//           <a href="/fertilisers" className="text-red-600 hover:underline">
//             Fertilizers
//           </a>{" "}
//           &gt; <span className="text-gray-900">{product.name}</span>
//         </nav>

//         {/* Product Header */}
//         <div className="flex flex-wrap items-center bg-white p-6 rounded-lg shadow">
//           {/* Product Information */}
//           <div className="w-full md:w-2/3 md:pl-8">
//             <h1 className="text-2xl font-semibold text-gray-900 mb-4">
//               {product.name}
//             </h1>
//             <p className="text-gray-700">{product.description}</p>
//           </div>{" "}
//           {/* Product Image */}
//           <div className="w-full md:w-1/3 flex justify-center">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="h-52 w-auto object-contain"
//             />
//           </div>
//         </div>

//         {/* Nutrients Section */}
//         <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">
//             Nutrients
//           </h2>
//           <div className="flex space-x-4">
//             {product.nutrients.map((nutrient) => (
//               <div
//                 key={nutrient.symbol}
//                 className="bg-white text-center p-4 shadow-md rounded-sm"
//               >
//                 <div className="text-2xl font-bold text-red-600">
//                   {nutrient.symbol}
//                 </div>
//                 <div className="text-gray-600 text-sm">{nutrient.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Related Products */}
//         <div className="mt-12">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">
//             {product.relatedProducts.length} Related Organic Fertilizers
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {product.relatedProducts.map((related) => (
//               <div
//                 key={related.id}
//                 className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
//               >
//                 <img
//                   src={related.image}
//                   alt={related.name}
//                   className="w-full h-48 object-contain bg-gray-100 p-4"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-red-600 mb-2">
//                     {related.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm">{related.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
