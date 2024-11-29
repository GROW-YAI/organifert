import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container  mx-auto px-6">
        {/* Hero Section */}
        <div className=" text-left max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4 leading-snug">
            Responsibly feed the world and protect the planet
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            OrganiFert grows knowledge to responsibly feed the world and protect
            the planet, fulfilling our vision of sustainable agriculture and a
            collaborative future where farmers thrive.
          </p>
        </div>

        {/* Mission Statement Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To meet these commitments, we lead in developing organic liquid
              fertilizers that improve soil health and boost productivity. We
              collaborate with farmers and partners to ensure sustainable
              farming practices are accessible to all.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Our mission includes promoting safety and diversity among our
              employees, farmers, and stakeholders while reducing environmental
              impact and dependency on chemical fertilizers.
            </p>
          </div>
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              OrganiFert was founded with the goal of transforming agriculture
              for the better. By 2023, we had positively impacted over 5,000
              farmers, reducing waste and improving sustainable outcomes
              globally.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Our commitment aligns with the UN’s Sustainable Development Goals
              to tackle food security, climate change, and economic resilience
              for farmers worldwide.
            </p>
          </div>
        </div>

        {/* Read More Section */}
        <div className="text-center mb-16">
          <Link
            to="/learn-more"
            className="inline-block px-8 py-3 border border-blue-900 text-blue-900 font-medium rounded-lg shadow hover:bg-blue-100 transition"
          >
            Read about OrganiFert worldwide
          </Link>
        </div>

        {/* Additional Info Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Find out more about OrganiFert
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-lg shadow p-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4245/4245760.png"
                alt="Environment"
                className="h-12 w-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Environment
              </h3>
              <p className="text-gray-600">
                Our sustainable products reduce environmental impact and improve
                soil health, prioritizing nature in all our farming solutions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-lg shadow p-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2521/2521656.png"
                alt="At a Glance"
                className="h-12 w-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                At a Glance
              </h3>
              <p className="text-gray-600">
                Empowering over 5,000 farmers, reducing waste, and fostering
                sustainable farming globally to enhance productivity.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 rounded-lg shadow p-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1476/1476870.png"
                alt="Our History"
                className="h-12 w-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Our History
              </h3>
              <p className="text-gray-600">
                Founded with a mission to revolutionize agriculture, we’ve been
                a trusted partner for sustainable farming since inception.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
