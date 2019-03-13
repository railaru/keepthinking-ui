import React from "react";

function LeftSidebar() {
    
  document.addEventListener("DOMContentLoaded", function() {
    handleElementScrollIntoView();
  });

  const handleElementScrollIntoView = () => {
    document
      .querySelectorAll(".search-reference")
      .forEach(function(componentName) {
        componentName.addEventListener("click", function(e) {
          let componentNameIdTarget = this.id + "_Target";
          document.getElementById(componentNameIdTarget).scrollIntoView();
          window.scrollBy(0, -100);
        });
      });
  };

  return (
    <div
      data-searchable
      className="height-100-perc overflow-y-scroll color-6 font-d content-container__left"
    >
      <div className="spacing-top-1 position-fixed">
     
     
        <div
          id="progressive-loading-grid"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          progressive loading grid
        </div>
        <div
          id="double-cta"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          double cta
        </div>
        <div
          id="hero-cta"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          hero cta
        </div>
        <div
          id="masonry-grid"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          masonry grid
        </div>
        <div
          id="see-more-slider"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          see more slider
        </div>
        <div
          id="image-tagging-with-zoom"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          image tagging with zoom
        </div>
        <div
          id="vertical-fullpage-slider"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          vertical fullpage slider
        </div>
        <div
          id="horizontal-fullpage-slider"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          horizontal fullpage slider
        </div>
        <div
          id="folder-view"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          folder view
        </div>
        <div
          id="float-grid"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          float grid
        </div>
        <div
          id="loading-dots"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          loading dots
        </div>
        <div
          id="image-tagging"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          image tagging
        </div>
        <div
          id="footnote-popups"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          footnote popups
        </div>
        <div
          id="accordion"
          className="search-reference spacing-bottom-1 cursor-pointer underline-on-hover"
        >
          accordion
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
