import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import { Card } from 'react-bootstrap';
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
const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateX(-40px);
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
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



const Section3 = () => {

    return (
      <section className="container" id="integration" style={{marginTop:100}}>
      <div className="row align-items-center">
            <Reveal className='onStep' style={{textAlign:"center"}} keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
                <h2 className="col-white">Integrations</h2>
                <h5 style={{marginTop:40,paddingLeft:200, paddingRight:200, color:'gray'}}>Our staking services and tokens are integrated with the leading protocols and apps in DeFi.</h5>
              </Reveal>
          <div className="col-md-12 xs-hide">
            <div className="row align-items-center">
              
              <div className='col-md-4 xs-hide' style={{marginTop:100}}>
              <img style={{height:80}} src="./img/misc/1inch-logo.png"className="img-fluid" alt=""/>
              </div>
              <div className='col-md-4 xs-hide' style={{marginTop:100}}>
              <img style={{height:80}}src="./img/misc/gnosis-safe-logo.png"className="img-fluid" alt=""/>
              </div>
              <div className='col-md-4 xs-hide' style={{marginTop:100}}>
              <img style={{height:80}}src="./img/misc/uniswap-logo.png"className="img-fluid" alt=""/>
              </div>
            </div>
          </div>
      </div>
    </section>
    );
}
export default Section3;