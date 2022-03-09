import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const slidermainparticle= () => (
 <div className="container">
    <div className="row">
              <div className="spacer-single "></div>
              <Reveal className='onStep' style={{textAlign:"center"}} keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
              <h1 style={{fontSize:80}}className="col-white">Silver staking<br></br>made effortless</h1>
              </Reveal>
              <div className="spacer-10"></div>
              <Reveal className='onStep d-inline'  style={{textAlign:"center"}}  keyframes={inline} delay={800} duration={900} triggerOnce>
              <span onClick={()=> window.open("#", "_self")} style={{fontSize:30,borderRadius:10}} className="btn-main inline lead">START STAKING</span>
              <div className="mb-sm-30"></div>
              </Reveal>

      </div>
    </div>
);
export default slidermainparticle;