import React, { useState } from "react";

const NavbarFilterButton = (props) => {
  const [smallScreen, setSmallScreen] = useState(false);

  return (
    <div className="flex items-center py-2">
      {/* For small screens render hamburger menu  */}
      <section className="MOBILE-MENU flex lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setSmallScreen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
        <div className={smallScreen ? "showMenuNav" : "hideMenuNav"}>
          <button
            onClick={() => props.handleCategoryChange("pcat_shirts")}
            className={`flex-1 w-24 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded mb-2 sm:mr-2 ${
              props.category.includes("pcat_shirts")
                ? "active bg-purple-800 ring-2 ring-purple-300 ring-offset-2"
                : ""
            }`}
          >
            Shirts
          </button>
          <button
            onClick={() => props.handleCategoryChange("pcat_pants")}
            className={`flex-1 w-24  bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded mb-2 sm:mr-2 ${
              props.category.includes("pcat_pants")
                ? "active bg-purple-800 ring-2 ring-purple-300 ring-offset-2"
                : ""
            }`}
          >
            Pants
          </button>
          <button
            onClick={() => props.handleCategoryChange("pcat_merch")}
            className={`flex-1 w-24  bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded mb-2 sm:mr-2 ${
              props.category.includes("pcat_merch")
                ? "active bg-purple-800 ring-2 ring-purple-300 ring-offset-2"
                : ""
            }`}
          >
            Merch
          </button>
        </div>
      </section>
      {/* For the big screens render inline buttons */}
      <div className="DESKTOP-MENU hidden space-x-4 lg:flex">
        <button
          onClick={() => props.handleCategoryChange("pcat_shirts")}
          className={`flex-1 w-full sm:w-auto bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mr-0 ${
            props.category.includes("pcat_shirts")
              ? "active bg-purple-800 ring-2 ring-purple-300 ring-offset-2"
              : ""
          }`}
        >
          Shirts
        </button>
        <button
          onClick={() => props.handleCategoryChange("pcat_pants")}
          className={`flex-1 w-full sm:w-auto bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mr-0 ${
            props.category.includes("pcat_pants")
              ? "active bg-purple-800 ring-2 ring-purple-300 ring-offset-2"
              : ""
          }`}
        >
          Pants
        </button>
        <button
          onClick={() => props.handleCategoryChange("pcat_merch")}
          className={`flex-1 w-full sm:w-auto bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mr-0 ${
            props.category.includes("pcat_merch")
              ? "active bg-purple-800 ring-2 ring-purple-300 ring-offset-2"
              : ""
          }`}
        >
          Merch
        </button>
      </div>
      {/* For the simplicity I put styles in this component in style tag */}
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block !important;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 70px;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default NavbarFilterButton;
