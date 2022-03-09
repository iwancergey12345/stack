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
      <div className="container" id="join"style={{marginTop:100}}>
      <div className="row align-items-center">
          <div className="col-md-6">
              <div className="spacer-single"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
              <h1 className="col-white">Join staking pool</h1>
              <h5 style={{marginTop:40}}>Deposit ESLVR together with others to share a validator.</h5>
              <br></br>
              <h5 style={{padding:1}}><i className="fa fa-check-circle" style={{padding:5, color:'green'}}></i>No limits - stake any amount</h5><br></br>
              <h5 style={{padding:1}}><i className="fa fa-check-circle" style={{padding:5, color:'green'}}></i>Track your earnings in real time</h5><br></br>
              <h5 style={{padding:1}}><i className="fa fa-check-circle" style={{padding:5, color:'green'}}></i>Use your stake in DeFi with StakeWise tokens</h5>
              </Reveal>
              <div className="spacer-10"></div>
              <Reveal className='onStep d-inline' keyframes={inline} delay={800} duration={900} triggerOnce>
              <span onClick={()=> window.open("#", "_self")} className="btn-main inline lead">Find out more >></span>
              <div className="mb-sm-30"></div>
              </Reveal>

          </div>
          
        <div className="col-md-6 xs-hide" keyframes={fadeInUp}>
          <Reveal className='onStep d-inline' style={{position:'absolute'}}keyframes={inline} delay={300} duration={1200} triggerOnce>
              <img src="./img/misc/addPoolDeposit.png" style={{width:530}}className="img-fluid" alt=""/>
          </Reveal>
          <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
              <img src="./img/misc/poolDeposits.png" style={{marginLeft:'-90px', marginTop:80}}className="img-fluid" alt=""/>
          </Reveal>
          </div>
      </div>
    </div>
    );
}
export default Responsive;