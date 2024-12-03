import React from "react";
import Cola from "../assets/evanscola.png";
import Bela from "../assets/evansbela.png";
// import Vita from "../assets/evansvita.png";
// import Calci from "../assets/evanscalci.png";
const ProductDetails = () => {
  const product = {
    name: "EvansBela SULFAN",
    description:
      "EvansBela nitrate based fertilisers are pure nutrients, offering the required precision efficiency and reliability to meet the agronomic and environmental imperatives of modern agriculture. Nitrate nitrogen has been proven to be the best form of nitrogen for Ghanaian farming conditions.",
    image: Bela, // Replace with actual image path
    nutrients: [
      { symbol: "N", name: "Nitrogen" },
      { symbol: "S", name: "Sulfur" },
    ],
    relatedProducts: [
      {
        id: 1,
        name: "EvansBela SULFAN",
        description: "An improved alternative to SA",
        image: Cola, // Replace with actual image path
      },
      //   {
      //     id: 2,
      //     name: "EvansMila COMPOUND",
      //     description: "A balanced compound fertiliser for higher efficiency",
      //     image: Mila, // Replace with actual image path
      //   },
      //   {
      //     id: 3,
      //     name: "EvansCola NITRATE",
      //     description: "Nitrogen fertiliser with ammonium nitrate for grassland",
      //     image: Vita, // Replace with actual image path
      //   },
      //   {
      //     id: 4,
      //     name: "EvansArable BALANCED",
      //     description: "Uniform compound for balanced crop nutrition",
      //     image: Calci, // Replace with actual image path
      //   },
    ],
  };

  return (
    <div className="py-12 bg-gray-50">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="text-red-600 hover:underline">
            Home
          </a>{" "}
          &gt;{" "}
          <a href="/crop-nutrition" className="text-red-600 hover:underline">
            Crop nutrition
          </a>{" "}
          &gt;{" "}
          <a href="/fertilisers" className="text-red-600 hover:underline">
            Fertilisers
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
            {product.relatedProducts.length} products found
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
