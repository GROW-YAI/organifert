// import React from "react";
// import { Link } from "react-router-dom";

// const AboutUs = () => {
//   return (
//     <section className="bg-white py-16">
//       {/* Main container with max-w-7xl */}
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Hero Section */}
//         <div className="text-left mb-16">
//           <h1 className="text-4xl font-bold text-red-900 mb-4 leading-snug">
//             Responsibly feed the world and protect the planet
//           </h1>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             EvansOkyereFarms grows knowledge to responsibly feed the world and
//             protect the planet, fulfilling our vision of sustainable agriculture
//             and a collaborative future where farmers thrive.
//           </p>
//         </div>

//         {/* Mission Statement Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
//           <div>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               To meet these commitments, we lead in developing organic liquid
//               fertilizers that improve soil health and boost productivity. We
//               collaborate with farmers and partners to ensure sustainable
//               farming practices are accessible to all.
//             </p>
//             <p className="text-gray-600 text-lg leading-relaxed mt-4">
//               Our mission includes promoting safety and diversity among our
//               employees, farmers, and stakeholders while reducing environmental
//               impact and dependency on chemical fertilizers.
//             </p>
//           </div>
//           <div>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               EvansOkyereFarms was founded with the goal of transforming
//               agriculture for the better. By 2023, we had positively impacted
//               over 5,000 farmers, reducing waste and improving sustainable
//               outcomes globally.
//             </p>
//             <p className="text-gray-600 text-lg leading-relaxed mt-4">
//               Our commitment aligns with the UN’s Sustainable Development Goals
//               to tackle food security, climate change, and economic resilience
//               for farmers worldwide.
//             </p>
//           </div>
//         </div>

//         {/* Read More Section */}
//         <div className="text-start mb-16">
//           <Link
//             to="/learn-more"
//             className="inline-block px-8 py-3 border border-red-900 text-red-900 font-medium rounded-lg shadow hover:bg-red-100 transition"
//           >
//             Read about EvansOkyereFarms worldwide
//           </Link>
//         </div>

//         {/* Additional Info Section */}
//         <div>
//           <h2 className="text-3xl font-bold text-red-900 text-start mb-8">
//             Find out more about EvansOkyereFarms
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Card 1 */}
//             <div className="bg-gray-100 rounded-lg shadow p-6">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/4245/4245760.png"
//                 alt="Environment"
//                 className="h-12 w-12 mb-4"
//               />
//               <h3 className="text-xl font-semibold text-red-900 mb-2">
//                 Environment
//               </h3>
//               <p className="text-gray-600">
//                 Our sustainable products reduce environmental impact and improve
//                 soil health, prioritizing nature in all our farming solutions.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-gray-100 rounded-lg shadow p-6">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/2521/2521656.png"
//                 alt="At a Glance"
//                 className="h-12 w-12 mb-4"
//               />
//               <h3 className="text-xl font-semibold text-red-900 mb-2">
//                 At a Glance
//               </h3>
//               <p className="text-gray-600">
//                 Empowering over 5,000 farmers, reducing waste, and fostering
//                 sustainable farming globally to enhance productivity.
//               </p>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-gray-100 rounded-lg shadow p-6">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/1476/1476870.png"
//                 alt="Our History"
//                 className="h-12 w-12 mb-4"
//               />
//               <h3 className="text-xl font-semibold text-red-900 mb-2">
//                 Our History
//               </h3>
//               <p className="text-gray-600">
//                 Founded with a mission to revolutionize agriculture, we’ve been
//                 a trusted partner for sustainable farming since inception.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
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
            Explore EvansOkyereFarms' Organic Solutions
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
