import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import Me from "../assets/me.jpg";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className="container">
        <div className="row center">
          <div className="image-container">
            <div
              className="thumbnail"
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}
            >
              <div className="frame">
                <Link to={`details/oluwakemi-yusuf`}>
                  <ProgressiveImage
                  src='https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'
                  placeholder={Me}
                  >
                 {(src)=> (
                   <motion.img 
                   src={src}
                   alt="kemi"
                   whileHover={{ scale: 1.1 }}
                        transition={transition}
                   />

                 )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div 
            exit={{opacity: 0}}
            transition={transition}
            className="information"
            
            >
              <div className="title">Oluwakemi Yusuf</div>
              <div className="location">
                <span>Lagos,</span>
                <span>Nigeria</span>
              </div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);
export default Home;
