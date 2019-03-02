import React, { Component } from "react";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import CenterPreview from "./CenterPreview";

export class Content extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="container">
          <div class="container__inner content-container">
            <LeftSidebar />
            <CenterPreview />
            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
