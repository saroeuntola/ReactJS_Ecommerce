import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between mt-3">
          {/* Left Section */}
          <div className="mb-2 md:mb-0">
            <h2 className="text-lg font-semibold">LA Collection</h2>
            <p className="text-sm text-gray-400">
              © 2024 Saroeun Tola. All rights reserved.
            </p>
          </div>

          {/* Center Section - Links */}
          <div className="flex space-x-4 mb-2 md:mb-0">
            <div className="mb-2 md:mb-0">
              <h2 className="text-lg font-semibold">Contact</h2>
              <p className="text-sm text-gray-400">
                Email: saroeuntola123@gmail.com
                <br />
                Phone: (+855) 889890692
                <br />
                Address: 1988 St, Khan Sensok, Phnom Penh.
              </p>
            </div>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex space-x-4">
            <div className="mb-2 md:mb-0">
              <h2 className="text-lg font-semibold mb-2.5">Follow us</h2>
              <div className="flex gap-2">
                <a
                  href="https://web.facebook.com/saroeun.tola123/"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <FaFacebook size={25} />
                </a>
                <a
                  href="https://www.instagram.com/la_smokeyy_/"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <FaInstagram size={25} />
                </a>
                <a
                  href="https://www.linkedin.com/in/saroeun-tola-24a619285/"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <FaLinkedin size={25} />
                </a>
                <a
                  href="https://github.com/saroeuntola"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <FaGithub size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
