import React, { useEffect } from 'react';
import bg from '../images/ne3-bg.jpeg';
import {lang} from '../utils/languageConstants.jsx'
import { useSelector } from 'react-redux';

const GptSearch = () => {
  const handleGptSearchForm = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  useEffect(() => {
    // Disable scrolling when this component is mounted
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden'; // Prevent scroll on the html tag

    // Re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  const langKey = useSelector(store => store.config.lang)

  return (
    <>
      <div className="overflow-hidden w-full h-screen relative">
        {/* Background image */}
        <img
          src={bg}
          alt="Netflix Background"
          className="w-full h-full object-cover object-center"
        />

        {/* Semi-transparent overlay to make the form visible */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Centered form with 30px translation up */}
        <div className="absolute inset-0 flex justify-center items-center translate-y-[-30px]">
          <form
            className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-[90%] md:w-[80%] lg:w-[600px] z-10"  // Responsive width
            onSubmit={handleGptSearchForm}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            {lang[langKey]?.formHeading}
            </h2>

            {/* Form Row with Full Width Input and Button */}
            <div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-300 text-gray-800"
                placeholder={lang[langKey]?.gptSearchPlaceHolder}
              />
              <button
                type="submit"
                className="py-4 px-8 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              >
            {lang[langKey]?.search}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GptSearch;
