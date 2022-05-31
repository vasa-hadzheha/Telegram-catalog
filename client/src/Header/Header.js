import React from 'react';
import "./Header.css";
import Nav from "../Nav/Nav"
import { Input, Space } from 'antd';
const { Search } = Input;


const onSearch = (value) => console.log(value);


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

        <Space direction="vertical"  style={{
        width: "50%",
        marginLeft:"40px"
      }}>   
            <Search placeholder="input search text" onSearch={onSearch} enterButton size="large" allowClear
             style={{
                width: "80%",
              }}
            />
        </Space>
          

          <Nav/>
      </section>
  </header>
      );
  }
}

export default Header;
