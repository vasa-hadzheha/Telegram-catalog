import React from 'react';
import "./Nav.css";


class Nav extends React.Component {
  // constructor(props){
  //   super(props)
    
  // }



  render(){
    return (
            <nav>
                <ul>
                    <li><a href="/"><i className="icon-home"></i>Home</a></li>
                    <li><a href="#"><i className="icon-user"></i>About</a></li>
                    <li><a href="https://github.com/vasa-hadzheha/Labs.git"><i className="icon-thumbs-up-alt"></i>Portfolio</a></li>
                    <li><a href="#"><i className="icon-gear"></i>API</a></li>
                    <li><a href="https://github.com/vasa-hadzheha/Project-interactive-data-base.git"><i className="icon-phone"></i>Project on Github</a></li>
                </ul>
            </nav>
      );
  }
}

export default Nav;
