import React, {useState } from "react";

import { Link } from "react-router-dom";
import MenuCard from "./menuCard";

const Header = ({ darkMode, setDarkMode }) => {
  const [toggle, setToggle] = useState(false)




  // useEffect(()=>{
  //   if(toogle === false){
  //     document.querySelector(".links")
  //
  //   }else {
  //     document.querySelector(".menu").classList.add("link-active")
  //   }
  // },[toogle])
  // //


  const items = [
    {
      id: 1,
      title: "CV",
      route: "https://drive.google.com/file/d/1_U3-Mr25EK0LaRoFkZ_7LaEg4N6huV8T/view?usp=sharing",
    },
    {
      id: 2,
      title: "Snack Gallery",
      route: "https://snackgallery.netlify.app/"

    }
  ]
  return (
    <header>
      <div className="container">
        <div className="row space-between">
          <div className="logo">
            <Link to='/'>YOM</Link>
          </div>
          <div onClick={() => setDarkMode(prevMode =>!prevMode)} className='toggle'>
          <span>🌗</span>
          </div>
          <div className="menu"  onClick={() => setToggle(!toggle)}>WORK</div>
          <div className={`links ${toggle ? 'link-active' : ''}`}>

            {
              items.map((item)=>{
                return <MenuCard key={item.id} {...item}/>
              })
            }
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
