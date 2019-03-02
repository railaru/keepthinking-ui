import React from "react";

function MobileMenu() {
    
  document.addEventListener("DOMContentLoaded", function() {
    handleMobileMenu();
  });

  const handleMobileMenu = () => {
    document.querySelector(
      ".top-nav__elements__mobile-menu__icon"
    ).onclick = () => {
      document.querySelector(".mobile-menu").classList.toggle("display-none");
    };
  };

  return (
    <div className="mobile-menu position-fixed z-index-2 width-100-perc height-100-perc bg-1 display-none">
      <div className="wrapper">
        <div className="container">
          <div className="container__inner font-e color-6">
            <div className="spacing-top-2">
              <div className="spacing-bottom-1 cursor-pointer hover-color-6">
                Utility-first
              </div>
              <div className="spacing-bottom-1 cursor-pointer hover-color-6">
                Component-friendly
              </div>
              <div className="spacing-bottom-1 cursor-pointer hover-color-6">
                Responsive to the core
              </div>
              <div className="spacing-bottom-1 cursor-pointer hover-color-6">
                Sepererate layout, design and colours
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
