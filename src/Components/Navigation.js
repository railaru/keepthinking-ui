import React from "react";
import logo from './../static-img/logo.png'

function Navigation() {

    document.addEventListener('DOMContentLoaded', function() {      
        handleFilterSearch();
    });
    
    
    const handleFilterSearch = () => {
      document.querySelector('[data-search]').addEventListener('keyup', filter)
      function filter(){
        var term = document.querySelector('[data-search]').value
        var tag = document.querySelectorAll('[data-searchable] .search-reference')
        for (let i=0;i<tag.length;i++){
          if (tag[i].innerHTML.indexOf(term) !== -1){
            tag[i].style.display = 'block'
          } else {
            tag[i].style.display = 'none'
          }
        }
      }
    } 
    
    
  return (
    <div className="full-screen-wrapper top-nav position-sticky z-index-1 top-0 bg-1 shadow-bottom-1">
      <div className="wrapper">
        <div className="container">
          <div className="container__inner top-nav__elements">
            <div className="top-nav__elements__logo width-50-perc-on-large">
              <div
                
                className="centered-parent width-100-perc height-100-perc"
              >
                <img
                  src={logo}
                  className="centered-child responsive-img"
                  alt=''
                />
              </div>
            </div>
            <div className="top-nav__elements__search centered-parent">
              <input
                placeholder="Type to search"
                type="text"
                className="no-input-focus-outline font-b top-nav__elements__search__input centered-child padding-tline top-nav__elements__search__input centered-child padding-1 padding-left-0"
                data-search
              />
            </div>
            <div className="top-nav__elements__socials">
              <div className="height-100-perc centered-parent width-50-perc margin-left-50-perc color-4">
                <a 
                  href={"https://github.com/keepthinking"}
                  target='_blank'
                  rel="noopener noreferrer"
                  className='
                  centered-child 
                  margin-left-0 
                  cursor-pointer
                  color-4
                  hover-color-6
                  '>
                  <i className=" fab fa-github " />
                </a>                
                <a 
                  href={"https://twitter.com/keepthinking_uk"}
                  target='_blank'
                  rel="noopener noreferrer"
                  className='
                  centered-child 
                  margin-left-0 
                  cursor-pointer
                  color-4
                  hover-color-6
                  '>
                  <i className=" fab fa-twitter " />
                </a>
                <a 
                  href={"https://keepthinking.slack.com/"}
                  target='_blank'
                  rel="noopener noreferrer"
                  className='
                  centered-child 
                  margin-left-0 
                  cursor-pointer
                  color-4
                  hover-color-6
                  '>
                  <i className=" fab fa-slack " />
                </a>
              </div>
            </div>

            <div className="top-nav__elements__mobile-menu">
              <div className="centered-parent height-100-perc mobileMenuToggler">
                <div className="centered-child margin-right-0">
                  <i id='mobileMenuToggler' className="fas fa-bars top-nav__elements__mobile-menu__icon cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
