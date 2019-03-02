import React from 'react'

function RightSidebar() {
  return (
    <div className="spacing-top-1 content-container__right">                           
        <div className="padding-left-50-perc">
            <div className="position-fixed color-4 font-d">
                <div className="spacing-bottom-1 cursor-pointer hover-color-6">
                    Based on core web technologies
                </div>
                <div className="spacing-bottom-1 cursor-pointer hover-color-6">
                    Component-friendly
                </div>
                <div className="spacing-bottom-1 cursor-pointer hover-color-6">
                    Mobile first & breakpoints
                </div>
                <div className="spacing-bottom-1 cursor-pointer hover-color-6">
                    Layout, typography and colours
                </div>
                <div className="spacing-bottom-1 cursor-pointer hover-color-6">
                    BEM
                </div>
            </div> 
        </div>           
    </div> 
  )
}

export default RightSidebar
