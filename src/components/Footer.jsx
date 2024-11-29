const Footer = () => {
  return (
    <footer className="bg-[#0B1C3E] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact OrganiFert</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>OrganiFert </li>
            <li>No.2 Borteist Avenue</li>
            <li>Roman Ridge, Accra, Ghana</li>
            <li>
              Tel:{" "}
              <a
                href="tel:+233010101712"
                className="text-white hover:underline"
              >
                +233 0 101 101 712
              </a>
            </li>
            <li>
              <a
                href="mailto:kwame.okyere@organifert.com"
                className="text-white hover:underline"
              >
                evans.farmer@organifert.com
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About OrganiFert</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products & Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow OrganiFert</h3>
          <p className="text-sm text-gray-300 mb-4">
            Stay connected with us through social media.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="mt-12 border-t border-gray-700">
        <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center px-6">
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              Safety Data Sheets
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Ethics Hotline
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            © 2024 OrganiFert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
