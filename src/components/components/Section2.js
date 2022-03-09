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



const Responsive = () => {

    return (
      <div className="container" id="token" style={{marginTop:100}}>
      <div className="row align-items-center">
          <div className="col-md-6">
              <div className="spacer-single"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
              <h1 className="col-white">Tokenized staking</h1>
              <h5 style={{marginTop:40}}>Explore the world of DeFi together with StakeWise!
We mint Deposit Tokens and Reward Tokens for every ESLVR you deposit & earn. Use them to store, exchange and transfer your deposit & rewards in just about any protocol and wallet that supports ESLVR.</h5>
              <br></br>
              <h5 style={{padding:1}}><i className="fa fa-check-circle" style={{padding:5, color:'green'}}></i>Enables exit from staking before Phase 2</h5><br></br>
              <h5 style={{padding:1}}><i className="fa fa-check-circle" style={{padding:5, color:'green'}}></i>Opens opportunities to generate additional yield</h5><br></br>
              </Reveal>
              <div className="spacer-10"></div>

          </div>
          
        <div className="col-md-6 xs-hide" keyframes={fadeInUp}>
          <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
              <img src="./img/misc/1111.png" className="img-fluid" alt=""/>
          </Reveal>
          </div>
      </div>
    </div>
    );
}
export default Responsive;