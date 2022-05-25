import React from 'react';
import "./Header.css";
import Nav from "../Nav/Nav"


class Header extends React.Component {
  // constructor(props){
  //   super(props)
    
  // }



  render(){
    return (
      <header>
      <section>
          <img src="https://img.icons8.com/nolan/64/telegram-app.png" height="70" alt="Home"
              loading="lazy"/>
          <a href="#" id="logo" target="_blank">Telegram-catalog</a>

          <label htmlFor="toggle-1" className="toggle-menu">
              <ul>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </label>
          <input type="checkbox" id="toggle-1"/>

          <Nav/>
      </section>
  </header>
      );
  }
}

export default Header;
