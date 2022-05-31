import React from 'react';
import "./Nav.css";
import {LoginOutlined} from '@ant-design/icons';

class Nav extends React.Component {
  // constructor(props){
  //   super(props)
    
  // }



  render(){
    return (
            <nav>
                <ul>
                    <li><a href="#"><i><LoginOutlined/></i>Sign in</a></li>
                </ul>
            </nav>
      );
  }
}

export default Nav;
