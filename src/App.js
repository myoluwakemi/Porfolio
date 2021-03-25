import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//pages
import Details from "./pages/details";
import Home from "./pages/home";

//component
import Header from "./components/header";

//styles
import "./App.scss";

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(()=>{
    localStorage.setItem("dark", JSON.stringify(darkMode))

  },[darkMode])

  function getInitialMode(){
    const isReturningUser = "dark" in localStorage
    const saveMode =JSON.parse(localStorage.getItem('dark'));
    const userPreference = getPreferColorScheme()
    //if mode was saved-> dark/light
    if(isReturningUser){
      return saveMode

      //if the perferred color scheme is dark -> dark

    }else if(userPreference){
      return true

      //otherwise -> light
    }else {
      return false
    }
  
  }

  function getPreferColorScheme(){
    if(!window.matchMedia)
      return;
       return window.matchMedia("(perfers-color-scheme: dark)").matches

    
    
  }
  

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Route
          render={({ location }) => (
            <AnimatePresence  exitBeforeEnter>
               
                <Route
                  exact
                  path="/"
                  render={() => <Home imageDetails={imageDetails} />}
                />
                <Route
                  exact
                  path="/details/:id"
                  render={() => <Details imageDetails={imageDetails} />}
                />
              
            </AnimatePresence>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
