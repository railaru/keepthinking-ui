import React, { Component } from 'react'

export class LeftSidebar extends Component {
  render() {
    return (
        <div data-searchable className = "height-100-perc overflow-y-scroll color-6 font-d content-container__left">
        <div className = "spacing-top-1 position-fixed">
             <div id="vertical-fullpage-slider" className = "search-reference spacing-bottom-1 cursor-pointer underline-on-hover">
                vertical fullpage slider
            </div>    
             <div id="horizontal-fullpage-slider" className = "search-reference spacing-bottom-1 cursor-pointer underline-on-hover">
                horizontal fullpage slider
            </div>    
        </div>             
      </div>
    )
  }
}

export default LeftSidebar
