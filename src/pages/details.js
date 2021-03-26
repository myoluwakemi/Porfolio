import React,{ useEffect, useState} from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import ScrollMore from "../components/ScrollMore";

const transition = { duration: 1.4, ease:[0.6, 0.01,-0.5, 0.9] }


const firstName ={
  
  animate:{
    y: 0,
    transition: {
      delayChildren: .6,
      staggerChildren: .04,
      staggerDirection: -1
    
    }
  },
}
const letter ={
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition}
  }
}

const lasttName ={

  animate:{
    y: 0,
    transition: {
      delayChildren: .6,
      staggerChildren: .04,
      staggerDirection: 1
    
    }
  },
}

const Details = ({ imageDetails }) => {
  const {scrollYProgress} = useViewportScroll();

  const scale = useTransform(scrollYProgress, [0,1], [1, 1.34])

    const [canScrol, setCanScroll] = useState(false)

    useEffect(()=>{
      if(canScrol ===false){
        document.querySelector('body').classList.add("no-scroll")
      }else{
        document.querySelector('body').classList.remove("no-scroll")
      }

    }, [canScrol])
  return (
    <motion.div
    onAnimationComplete ={()=>setCanScroll(true)} 

    initial="initial"
    animate="animate"
    exit="exit"
    className="single">
      <div className="container">
        <div className="row center top-row">
          <div className="top">
            <motion.div 
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0,
               transition:{delay: 1.2, ...transition} }}
            className="details">
              <div className="location">
                <span>Lagos,</span>
                <span>Nigeria</span>
              </div>
              <div className="role">Frontend Engineer</div>
            </motion.div>
            <motion.div className="name">
              <motion.span variants={firstName} className="first">
                <motion.span variants={letter}>K</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>i</motion.span>
              </motion.span>
              <motion.span  variants={lasttName} className="last">
                <motion.span variants={letter}>Y</motion.span>
                <motion.span variants={letter}>u</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>u</motion.span>
                <motion.span variants={letter}>f</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <div className="image-container-single">
              <motion.div  
              initial={{
               y:"-50%", 
                width : imageDetails.width,
               height: imageDetails.height}}

               animate={{y: "0",
               width: "100%",
               height: window.innerWidth > 1440 ? 800 : 400,
               transition:{delay: .2, ...transition}
               
              }}
               className="thumbnail-single">
                <div className="frame-single">
                  <motion.img
                  style={{scale: scale}}
                  initial= {{scale: 1.1}}
                  animate={{
                    y: window.innerWidth > 1440? -1200: -600,
                    transition:{delay: .2, ...transition}
                  }}
                  
                    src="https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
                    alt="model"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollMore />
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">Intro</h2>
            <p>
              Tech enthusiast, strong in problem-solving skills, JavaScript,
              React, database analysis and design. Skilled in developing
              business plan requirements specifications, user documentation.
              Proficient in written and verbal communications.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Details;
