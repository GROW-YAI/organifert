import React from "react";
import PropTypes from "prop-types";
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
    title: "Organic Banana Fertilizer",
    description:
      "A natural fertilizer made from organic banana residues, rich in potassium and nitrogen. Ideal for improving soil structure and promoting healthy plant growth.",
    image: Cola,
  },
  {
    id: 2,
    title: "Moringa Leaf Compost",
    description:
      "An organic compost made from nutrient-dense Moringa leaves, offering balanced nutrition for sustainable farming. Enhances soil fertility and boosts crop resilience.",
    image: Mila,
  },
  {
    id: 3,
    title: "Citrus-Based Organic Fertilizer",
    description:
      "Derived from orange peels and citrus residues, this fertilizer enriches soil with natural nutrients and supports microbial activity for healthier yields.",
    image: Vita,
  },
  {
    id: 4,
    title: "Animal Manure Compost",
    description:
      "A traditional organic fertilizer made from composted animal droppings. Provides a slow release of essential nutrients, improving soil texture and fertility naturally.",
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
  color: #b80000;
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
    <Container className="mt-0 max-w-full mx-auto">
      <MainContent>
        {/* Breadcrumb */}
        {showBreadCrumb && (
          <BreadcrumbContainer className="py-2">
            <Breadcrumb href="/">Home</Breadcrumb>
            <Breadcrumb href="/">Crop nutrition</Breadcrumb>
            <Breadcrumb>Fertilisers</Breadcrumb>
          </BreadcrumbContainer>
        )}

        {/* Section Title */}
        <h1 className="text-[#B80000] text-2xl md:text-3xl font-bold mb-4">
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
                <h3 className="text-lg font-semibold text-[#B80000] mb-2">
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

// Props Validation
ProductSection.propTypes = {
  showBreadCrumb: PropTypes.bool, // Validates that showBreadCrumb is a boolean
};

export default ProductSection;
