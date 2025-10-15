import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <ScrollToTopButton />
      {/* Main container with max-w-7xl */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-left mb-16">
          <h1 className="text-4xl font-bold text-red-900 mb-4 leading-snug">
            Cultivating Sustainability with Organic Fertilizers
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            At EvansOkyereFarms, we are committed to nurturing a healthier
            planet through innovative organic fertilizers that enrich the soil
            naturally, enhance biodiversity, and empower farmers to grow
            sustainably.
          </p>
        </div>

        {/* Mission Statement Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to promote sustainable farming practices that rely
              on organic nutrients and natural resources to boost soil health,
              reduce environmental harm, and foster a resilient ecosystem.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              We strive to replace synthetic fertilizers with eco-friendly
              alternatives, ensuring farmers can achieve high yields while
              preserving the integrity of their land for generations to come.
            </p>
          </div>
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Since our founding, EvansOkyereFarms has been dedicated to
              transforming agriculture through organic solutions. By 2024, we
              had helped over 1,000 farmers adopt sustainable practices,
              significantly reducing dependency on harmful chemicals.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Our efforts align with global sustainability goals, ensuring food
              security, combating climate change, and fostering environmental
              stewardship.
            </p>
          </div>
        </div>

        {/* Read More Section */}
        <div className="text-start mb-16">
          <Link
            to="/learn-more"
            className="inline-block px-8 py-3 border border-red-900 text-red-900 font-medium rounded-lg shadow hover:bg-red-100 transition"
          >
            Learn More About Our Organic Farming Practices
          </Link>
        </div>

        {/* Additional Info Section */}
        <div>
          <h2 className="text-3xl font-bold text-red-900 text-start mb-8">
            Explore EvansOkyereFarms Organic Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-lg shadow p-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4245/4245760.png"
                alt="Sustainability"
                className="h-12 w-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-red-900 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Our organic fertilizers are designed to reduce environmental
                impact, restore soil fertility, and foster harmony with nature.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-lg shadow p-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2521/2521656.png"
                alt="Our Impact"
                className="h-12 w-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-red-900 mb-2">
                Our Impact
              </h3>
              <p className="text-gray-600">
                Helping farmers adopt organic methods, reduce waste, and grow
                healthier crops for a sustainable future.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 rounded-lg shadow p-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1476/1476870.png"
                alt="Our Vision"
                className="h-12 w-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-red-900 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To lead the way in organic farming by providing natural,
                sustainable solutions that enhance soil and crop health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
