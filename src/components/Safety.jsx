import React from "react";
import { Link, useLocation } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Safety = ({ showBreadCrumb = true }) => {
  const location = useLocation();

  // Generate breadcrumb items dynamically
  const getBreadcrumbItems = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    return [
      { label: "Home", path: "/" }, // Always show "Home"
      { label: "Crop Nutrition", path: "/" },
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

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <ScrollToTopButton />

      {showBreadCrumb && (
        <nav aria-label="Breadcrumb" className="py-2 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        className="text-red-900 font-semibold"
                        aria-current="page"
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link to={item.path} className="hover:text-red-700">
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

      {/* Hero Section */}
      <header className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-red-800 font-bold mb-6">
            Organic Fertilizer Handling and Sustainability
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed">
            At the heart of sustainable farming lies our commitment to safety,
            purity, and environmental stewardship.
            <br />
            Our organic fertilizers are crafted to promote healthy ecosystems
            while ensuring safety for farmers, crops, and the planet.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Farmer Safety */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2645/2645477.png"
                alt="Farmer Safety Icon"
                className="h-16 w-16 mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              Farmer Safety
            </h2>
            <p className="text-gray-600">
              We prioritize farmer well-being by providing comprehensive
              training on handling organic fertilizers. With clear labeling and
              safe application techniques, farmers can protect their health
              while ensuring optimal crop performance.
            </p>
            <p className="text-gray-600 mt-4">
              Our products are designed to be user-friendly, minimizing the risk
              of exposure to harmful substances commonly found in chemical
              alternatives.
            </p>
          </div>

          {/* Product Integrity */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1543/1543150.png"
                alt="Product Integrity Icon"
                className="h-16 w-16 mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              Product Integrity
            </h2>
            <p className="text-gray-600">
              Each batch of our organic fertilizers is crafted with care,
              ensuring a perfect balance of nutrients for healthy soil and
              robust crops. By avoiding synthetic chemicals, our fertilizers
              enhance biodiversity and promote natural soil regeneration.
            </p>
            <p className="text-gray-600 mt-4">
              Our strict quality control ensures that farmers receive a product
              they can trust, one that aligns with their commitment to
              sustainable practices.
            </p>
          </div>

          {/* Environmental Care */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2909/2909821.png"
                alt="Environmental Care Icon"
                className="h-16 w-16 mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              Environmental Care
            </h2>
            <p className="text-gray-600">
              Protecting the planet is central to our mission. Our organic
              fertilizers are biodegradable and free from harmful runoff,
              helping to safeguard water bodies and surrounding ecosystems.
            </p>
            <p className="text-gray-600 mt-4">
              By supporting carbon sequestration and reducing soil erosion, we
              contribute to mitigating climate change and creating resilient
              agricultural systems.
            </p>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-red-800 font-bold mb-6">
            Why Choose Organic Fertilizers?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Organic fertilizers are not just an alternative; they are a
            necessity for sustainable agriculture. By enriching the soil with
            natural nutrients, they support long-term fertility, encourage
            microbial activity, and ensure that farming practices work in
            harmony with nature.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Enriches Soil Health
              </h3>
              <p className="text-gray-600">
                Organic fertilizers restore the natural balance of nutrients in
                the soil, fostering a thriving environment for beneficial
                microorganisms.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Reduces Environmental Impact
              </h3>
              <p className="text-gray-600">
                Free from synthetic chemicals, organic fertilizers reduce
                pollution and help combat the effects of climate change through
                sustainable farming methods.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Safe for All
              </h3>
              <p className="text-gray-600">
                Organic fertilizers are safe for farmers, consumers, and the
                environment, ensuring healthier ecosystems and food systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
