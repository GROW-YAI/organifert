// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import Cola from "../assets/evanscola.png";
// import Mila from "../assets/evansmila.png";
// import Vita from "../assets/evansvita.png";
// import Calci from "../assets/evanscalci.png";

// const products = [
//   {
//     id: 1,
//     title: "EvansCola - Nitrate fertilisers",
//     description:
//       "EvansCola nitrogen and sulphur fertilisers contain ammonium nitrate or calcium ammonium nitrate for use on grassland and arable crops.",
//     image: Cola,
//   },
//   {
//     id: 2,
//     title: "EvansMila - Compound fertilisers",
//     description:
//       "EvansMila fertilisers are uniform compound products for high efficiency and balanced nutrition.",
//     image: Mila,
//   },
//   {
//     id: 3,
//     title: "EvansBela - Nitrate fertilisers",
//     description:
//       "EvansBela nitrogen and sulphur fertilisers contain ammonium nitrate or calcium ammonium nitrate for use on grassland and arable crops.",
//     image: Vita,
//   },
//   {
//     id: 4,
//     title: "EvansArable - Compound fertilisers",
//     description:
//       "EvansArable fertilisers are uniform compound products for high efficiency and balanced nutrition.",
//     image: Calci,
//   },
// ];

// const Container = styled.div`
//   font-family: Arial, sans-serif;
//   color: #333;
//   background-color: #ffffff;
// `;

// const MainContent = styled.main`
//   padding: 40px 0;
//   // max-width: 800px; /* Restricts the width */
//   margin: 0 auto; /* Centers the content */
// `;

// const BreadcrumbContainer = styled.div`
//   margin-bottom: 20px;
// `;

// const Breadcrumb = styled.a`
//   color: #1e4a98;
//   text-decoration: none;
//   font-size: 14px;

//   &:not(:last-child)::after {
//     content: " > ";
//     color: #333;
//   }
// `;

// const ProductSection = ({ showBreadCrumb = true }) => {
//   return (
//     <Container className="mt-10 max-w-6xl mx-auto">
//       <MainContent>
//         {showBreadCrumb && (
//           <BreadcrumbContainer>
//             <Breadcrumb href="#">Home</Breadcrumb>
//             <Breadcrumb href="#">Crop nutrition</Breadcrumb>
//             <Breadcrumb>Fertilisers</Breadcrumb>
//           </BreadcrumbContainer>
//         )}
//         <h1 className="text-blue-700 text-2xl font-bold mb-4">
//           How to choose the right fertiliser
//         </h1>
//         <p className="text-gray-700 mb-6">
//           Our fertilisers are grouped into product families to make it easier to
//           choose the right one. Or you can see all fertilisers together and use
//           filters to find a specific fertiliser.
//         </p>
//         <div className="grid grid-cols-1 gap-6 pt-8">
//           {products.map((product) => (
//             <Link
//               key={product.id}
//               to={`/product/${product.id}`} // Dynamic route to the product details page
//               className="flex items-center bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
//             >
//               {/* Product Image */}
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-1/4 h-auto object-contain p-4"
//               />

//               {/* Product Content */}
//               <div className="p-6 w-3/4">
//                 <h3 className="text-lg font-semibold text-blue-600 mb-2">
//                   {product.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {product.description}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </MainContent>
//     </Container>
//   );
// };

// export default ProductSection;

import styled from "styled-components";
import { Link } from "react-router-dom";
import Cola from "../assets/evanscola.png";
import Mila from "../assets/evansmila.png";
import Vita from "../assets/evansvita.png";
import Calci from "../assets/evanscalci.png";

// Product data
const products = [
  {
    id: 1,
    title: "EvansCola - Nitrate fertilisers",
    description:
      "EvansCola nitrogen and sulphur fertilisers contain ammonium nitrate or calcium ammonium nitrate for use on grassland and arable crops.",
    image: Cola,
  },
  {
    id: 2,
    title: "EvansMila - Compound fertilisers",
    description:
      "EvansMila fertilisers are uniform compound products for high efficiency and balanced nutrition.",
    image: Mila,
  },
  {
    id: 3,
    title: "EvansBela - Nitrate fertilisers",
    description:
      "EvansBela nitrogen and sulphur fertilisers contain ammonium nitrate or calcium ammonium nitrate for use on grassland and arable crops.",
    image: Vita,
  },
  {
    id: 4,
    title: "EvansArable - Compound fertilisers",
    description:
      "EvansArable fertilisers are uniform compound products for high efficiency and balanced nutrition.",
    image: Calci,
  },
];

// Styled container for consistent design
const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #ffffff;
`;

// Main content styling
const MainContent = styled.main`
  padding: 40px 16px;
  margin: 0 auto;
  max-width: 1200px;
`;

// Breadcrumb styles
const BreadcrumbContainer = styled.div`
  margin-bottom: 20px;
`;
const Breadcrumb = styled.a`
  color: #1e4a98;
  text-decoration: none;
  font-size: 14px;

  &:not(:last-child)::after {
    content: " > ";
    color: #333;
  }
`;

// Responsive Product Section Component
const ProductSection = ({ showBreadCrumb = true }) => {
  return (
    <Container className="mt-0">
      <MainContent>
        {/* Breadcrumb */}
        {showBreadCrumb && (
          <BreadcrumbContainer className="bg-gray-100 py-3 shadow-sm">
            <Breadcrumb href="/">Home</Breadcrumb>
            {/* <Breadcrumb href="#">Crop nutrition</Breadcrumb> */}
            <Breadcrumb>Fertilisers</Breadcrumb>
          </BreadcrumbContainer>
        )}

        {/* Section Title */}
        <h1 className="text-[#1E4A98] text-2xl md:text-3xl font-bold mb-4">
          How to choose the right fertiliser
        </h1>
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Our fertilisers are grouped into product families to make it easier to
          choose the right one. Or you can see all fertilisers together and use
          filters to find a specific fertiliser.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`} // Dynamic route to the product details page
              className="flex flex-col sm:flex-row bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full sm:w-1/3 h-40 object-contain p-4"
              />

              {/* Product Content */}
              <div className="p-4 sm:p-6 w-full">
                <h3 className="text-lg font-semibold text-[#1E4A98] mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </MainContent>
    </Container>
  );
};

export default ProductSection;
