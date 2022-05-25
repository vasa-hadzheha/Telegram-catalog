import React from "react";
// import  {BrowserRouter as Router, Routes, Route, Link}  from 'react-router-dom';
// import About from "./About/About"
// import NotFound from "./NotFound/NotFound"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

class App extends React.Component{

  render(){
    return(
      <div className="site">
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
