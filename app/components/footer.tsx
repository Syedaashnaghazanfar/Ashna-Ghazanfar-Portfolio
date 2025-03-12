import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center border-b-4 border-yellow-400 pb-4">
          <h2 className="text-2xl font-bold text-center w-full sm:w-auto mb-4 sm:mb-0">Ashna Ghazanfar</h2>
          <h2 className="text-md font-bold text-center w-full sm:w-auto mb-4 sm:mb-0">Let us create together!
          </h2>
        </div>

        {/* About Me */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-300">About Me</h3>
          <p className="mt-2 text-gray-400 text-sm font-bold">
            Web Developer | UI/UX Enthusiast | Pre-Med Student
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
