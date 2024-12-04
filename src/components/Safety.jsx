import React from "react";
import { Link, useLocation } from "react-router-dom";

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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-red-900 font-bold mb-6">
            Fertiliser Handling and Safety
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed">
            Ensuring safety for our employees, customers, and the environment.
            <br />
            Committed to industry-leading standards and sustainable practices.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Employee Safety */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2920/2920587.png"
                alt="Employee Safety Icon"
                className="h-16 w-16 mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold text-red-900 mb-2">
              Employee Safety
            </h2>
            <p className="text-gray-600">
              Comprehensive training, personal protective equipment, and a safe
              work environment are our top priorities for employees.
            </p>
          </div>

          {/* Customer Safety */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png"
                alt="Customer Safety Icon"
                className="h-16 w-16 mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold text-red-900 mb-2">
              Customer Safety
            </h2>
            <p className="text-gray-600">
              We ensure our products meet the highest safety standards to
              protect customers.
            </p>
          </div>

          {/* Environmental Safety */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2062/2062075.png"
                alt="Environmental Safety Icon"
                className="h-16 w-16 mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold text-red-900 mb-2">
              Environmental Safety
            </h2>
            <p className="text-gray-600">
              We strive to minimize our impact on the environment through
              sustainable practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
