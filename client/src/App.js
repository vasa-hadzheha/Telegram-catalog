import React from "react";
// import  {BrowserRouter as Router, Routes, Route, Link}  from 'react-router-dom';
// import About from "./About/About"
// import NotFound from "./NotFound/NotFound"
import "./App.css"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import InfinityListChannels from "./InfinityListChannels/List"
import Layout from "./Layout/Layout";
import Sider from "./Menu/Sider";


class App extends React.Component{

  render(){
    return(
      <div className="body">
        <div className="site">
            <Header/>
          <div className="siteBody">
            <Sider/>
            <InfinityListChannels/>
          </div>
            <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
