// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a1d29] text-white w-full py-16 px-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="flex items-start gap-6">
            <img src="/logo.svg" alt="Logo" className="w-16 h-16" />
            <div>
              <h2 className="text-4xl font-bold text-green-400">Work <span className="text-white">zone</span></h2>
              <p className="text-lg text-gray-300 mt-4 max-w-lg">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using lorem varius sit amet ipsum.
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-lg text-gray-300 mb-6">We will keep you updated with the best new jobs.</p>
            <div className="flex bg-[#15232e] rounded-full overflow-hidden max-w-xl">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-transparent px-6 py-4 text-white text-lg placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-12" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-lg text-gray-300">
          {/* Contact */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">Contact Us</h4>
            <p className="mb-3">📞 123-343-4444</p>
            <p className="mb-3">✉️ workzone@gmail.com</p>
            <p>📍 Los Angeles, CA, USA</p>
          </div>

          {/* Service Categories */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">Service Categories</h4>
            <ul className="space-y-2">
              <li>→ Marketing</li>
              <li>→ Architecture</li>
              <li>→ Web Design</li>
              <li>→ AI Services</li>
              <li>→ Business Style</li>
              <li>→ Development & IT</li>
              <li>→ Photography</li>
            </ul>
          </div>

          {/* Blog Categories */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">Blog Categories</h4>
            <ul className="space-y-2">
              <li>→ Flutter Apps</li>
              <li>→ Technology</li>
              <li>→ WordPress</li>
              <li>→ Laravel</li>
              <li>→ Web Design</li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">Important Links</h4>
            <ul className="space-y-2">
              <li>→ Terms & Conditions</li>
              <li>→ Privacy Policy</li>
              <li>→ About Us</li>
              <li>→ Contact Us</li>
              <li>→ My Dashboard</li>
              <li>→ FAQ</li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">Download App</h4>
            <div className="flex flex-col gap-4">
              <img src="https://icon-library.com/images/google-play-icon-png/google-play-icon-png-7.jpg" alt="Google Play" className="w-40" />
              <img src="https://w7.pngwing.com/pngs/422/842/png-transparent-apple-store-logo-app-store-android-google-play-get-started-now-button-text-logo-black.png" alt="App Store" className="w-40" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
