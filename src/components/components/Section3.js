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
      <section className="container" id="about" style={{marginTop:100}}>
      <div className="row align-items-center">
            <Reveal className='onStep' style={{textAlign:"center"}} keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
                <h2 className="col-white">Earn rewards from staking ESLVR</h2>
                <h5 style={{marginTop:40,paddingLeft:100, paddingRight:100, color:'gray'}}>By depositing ETH into StakeWise, you will participate in Ethereum 2.0's Proof-of-Stake consensus mechanism (staking) and receive ETH rewards in return.</h5>
              </Reveal>
          <div className="col-md-12 xs-hide">
            <div className="row align-items-center">
              
              <div className='col-md-6 xs-hide' style={{marginTop:100}}>
               <Reveal className='onStep' keyframes={fadeInLeft} delay={300} duration={900} triggerOnce>
                <Card className="carded">
                    <Card.Body style={{textAlign:'center'}}>
                    <div className="row">
                        <div className="col-md-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><g transform="matrix(.7742 0 0 .7742 -8.71 -8.71)" fill="#fd5d93"><path d="M68.046 31.793h-36.09a3.797 3.797 0 00-2.703 1.117 3.7 3.7 0 00-.663.885 3.784 3.784 0 00-.463 1.828v5.016l-.002.012v26.306c0 .69.56 1.25 1.25 1.25h41.249c.69 0 1.25-.56 1.25-1.25V61.95l.001-.005-.001-.005V40.66l.001-.005v-5.033a3.833 3.833 0 00-3.829-3.83zm-6.774 28.903h-2.99v-9.285h2.99v9.285zm1.25-11.785h-5.49c-.691 0-1.25.56-1.25 1.25v10.535h-1.786v-15.25c0-.69-.56-1.25-1.25-1.25h-5.492c-.69 0-1.25.56-1.25 1.25v15.25H44.22V50.161c0-.69-.56-1.25-1.25-1.25h-5.491c-.69 0-1.25.56-1.25 1.25v10.535h-5.603v-18.79h38.749v18.79h-5.602V50.161c0-.69-.56-1.25-1.25-1.25zM51.496 60.696h-2.992v-14h2.992v14zm-9.777 0h-2.991v-9.285h2.99v9.285zM30.794 34.974a1.27 1.27 0 01.226-.295c.249-.248.581-.386.936-.386h36.09a1.33 1.33 0 011.329 1.33V39.4H30.627v-3.778c0-.226.054-.44.167-.649zm-.169 30.733v-2.51h38.749v2.51H30.625z"></path><circle cx="36.316" cy="36.85" r="1.25"></circle><circle cx="40.482" cy="36.85" r="1.25"></circle><circle cx="44.649" cy="36.85" r="1.25"></circle><path d="M87.5 51.25a1.25 1.25 0 100-2.5H76.964V37.679H87.5a1.25 1.25 0 100-2.5H76.964V24.286c0-.69-.56-1.25-1.25-1.25H64.821V12.5a1.25 1.25 0 10-2.5 0v10.536H51.25V12.5a1.25 1.25 0 10-2.5 0v10.536H37.679V12.5a1.25 1.25 0 10-2.5 0v10.536H24.286c-.69 0-1.25.56-1.25 1.25v10.893H12.5a1.25 1.25 0 100 2.5h10.536V48.75H12.5a1.25 1.25 0 100 2.5h10.536v11.071H12.5a1.25 1.25 0 100 2.5h10.536v10.893c0 .69.56 1.25 1.25 1.25h10.893V87.5a1.25 1.25 0 102.5 0V76.964H48.75V87.5a1.25 1.25 0 102.5 0V76.964h11.071V87.5a1.25 1.25 0 102.5 0V76.964h10.893c.69 0 1.25-.56 1.25-1.25V64.821H87.5a1.25 1.25 0 100-2.5H76.964V51.25H87.5zM74.464 74.464H25.536V25.536h48.928v48.928z"></path></g></svg>
                        </div>  
                        <div className="col-md-10">
                        <h4 style={{textAlign:"left"}}>Maximum stability & uptime</h4>
                        <p style={{color:'gray',textAlign:"left"}}>StakeWise node operators run a highly available and secure infrastructure to ensure validators are never penalized.</p>
                        </div>  
                      </div>
                    </Card.Body>
                </Card>
                </Reveal>
              </div>
              <div className='col-md-6 xs-hide' style={{marginTop:100}}>
               <Reveal className='onStep' keyframes={fadeInLeft} delay={300} duration={900} triggerOnce>
                <Card className="carded">
                    <Card.Body style={{textAlign:'center'}}>
                      <div className="row">
                        <div className="col-md-2">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.002 60"><path d="M70.32 31.258a5.68 5.68 0 00-2.294.502 5.723 5.723 0 00-4.481-2.154 5.768 5.768 0 00-2.553.612l-.078.042-2.327 1.355a5.717 5.717 0 00-4.36-2.01 5.768 5.768 0 00-2.552.613l-.093.052-8.91 5.354a633.2 633.2 0 00-6.406-1.824 235.682 235.682 0 00-6.223-1.658 56.28 56.28 0 00-2.276-.523c-.28-.058-.56-.108-.843-.152a4.79 4.79 0 00-.699-.063c-.183 0-.341.016-.521.038-.657.085-1.59.28-2.691.534-2.25.519-5.12 1.273-6.707 1.697v-2.634c0-1.828-1.524-3.324-3.387-3.324H3.602c-1.863 0-3.387 1.496-3.387 3.324v25.759c0 1.828 1.524 3.323 3.387 3.323h9.317c1.863 0 3.387-1.495 3.387-3.323v-2c2.01.43 6.473 1.375 11.178 2.323 3.182.64 6.47 1.282 9.186 1.765 1.359.242 2.574.444 3.57.587 1.003.142 1.75.23 2.32.234.444-.002.865-.084 1.318-.207.845-.234 1.806-.63 2.906-1.154 3.83-1.832 9.328-5.263 14.516-8.658 5.178-3.39 10.021-6.74 12.394-8.343 1.486-1.005 2.32-2.702 2.32-4.499 0-3.085-2.55-5.585-5.694-5.588zm-56.555 25.54a.85.85 0 01-.846.831H3.602a.85.85 0 01-.846-.83v-25.76c0-.45.387-.83.846-.83h9.317a.85.85 0 01.846.83zm58.489-17.506c-2.919 1.972-9.45 6.497-15.77 10.525-3.159 2.012-6.265 3.9-8.811 5.267-1.272.684-2.407 1.237-3.314 1.606-.453.185-.85.324-1.164.41a2.718 2.718 0 01-.633.114c-.277.002-1.01-.07-1.953-.207-3.337-.48-9.583-1.703-14.961-2.804-2.692-.551-5.17-1.072-6.977-1.454l-2.364-.502V36.258l.964-.258c1.733-.464 3.472-.908 5.215-1.334.82-.2 1.642-.387 2.467-.56.342-.07.641-.126.87-.161.226-.037.401-.05.403-.048.004 0 .137.008.319.035.7.103 2.138.433 3.889.883 5.275 1.352 13.594 3.795 16.954 4.797 1.163.344 2.216.862 2.907 1.491.347.314.608.65.783 1.013.175.365.275.76.276 1.242a3.478 3.478 0 01-1.053 2.495 3.619 3.619 0 01-2.513 1.03l-3.279-.314-11.188-1.41c-1.679-.21-2.003 2.26-.325 2.473l11.225 1.414 3.475.334h.062c3.39-.001 6.136-2.696 6.137-6.021a5.26 5.26 0 00-.522-2.312c-.504-1.038-1.314-1.842-2.23-2.453-.92-.613-1.959-1.05-3.016-1.366-.589-.176-1.332-.397-2.18-.647l6.894-4.144a3.168 3.168 0 011.39-.339c.787 0 1.546.292 2.123.817l-3.406 1.982c-1.457.849-.16 2.992 1.298 2.144l7.906-4.601c.45-.219.91-.342 1.396-.342a3.16 3.16 0 012.237.926l-9.207 5.357c-1.457.849-.16 2.992 1.297 2.144l9.956-5.793c.097-.016.194-.04.289-.08.204-.084.37-.219.498-.378l.31-.181c.45-.219.91-.342 1.396-.342a3.173 3.173 0 012.23.907c.592.58.925 1.367.923 2.188-.004 1.045-.492 1.957-1.223 2.446z" fill="#00f2c3"></path><switch transform="matrix(.29333 0 0 .29333 26.898 1.287)" fill="#00f2c3"><g><path d="M18.842 50.52c.005.202.048.394.129.579.026.062.046.122.082.179.125.209.284.4.508.536l.012.004c.004.002.005.007.009.009l29.756 17.435c.023.014.05.007.075.021.214.11.45.192.711.192.261 0 .497-.082.713-.196.027-.011.058-.007.084-.021L80.148 51.82c.229-.136.389-.331.519-.544.035-.059.057-.114.082-.177.082-.186.125-.377.132-.579 0-.043.028-.078.025-.119 0-.019-.015-.032-.019-.051a1.501 1.501 0 00-.2-.663L51.459.758c-.011-.02-.03-.028-.043-.047-.035-.056-.078-.1-.121-.15a1.774 1.774 0 00-.172-.175c-.048-.039-.091-.082-.142-.114-.02-.014-.03-.034-.05-.046-.034-.021-.071-.021-.105-.038A1.463 1.463 0 0050.615.1c-.062-.022-.124-.044-.191-.057a1.088 1.088 0 00-.196-.021C50.192.018 50.16 0 50.124 0c-.036 0-.064.018-.1.02-.064.006-.124.007-.186.02-.071.013-.136.036-.206.059a1.421 1.421 0 00-.209.088c-.031.017-.066.017-.097.034-.018.011-.029.03-.046.041-.055.036-.102.08-.154.125a1.623 1.623 0 00-.172.17c-.039.048-.082.091-.114.142-.015.02-.034.03-.047.05l-29.755 48.93c-.129.21-.186.439-.206.672-.002.02-.016.033-.018.054-.001.038.026.074.028.115zM51.68 7.191l23.767 39.791L51.68 36.08zm-3.111 28.88L24.308 47.002 48.569 7.107zm0 3.414v25.718L23.754 50.665zm3.111 25.693V39.501l24.332 11.164z"></path><path d="M80.773 55.836c-.493-.54-1.305-.647-1.935-.286L50.124 72.503 21.421 55.55a1.571 1.571 0 00-1.938.286 1.558 1.558 0 00-.124 1.955l29.495 41.555c.023.032.061.042.084.071.061.074.122.139.193.2.034.028.054.071.091.096.029.021.066.012.097.032.05.029.093.071.148.098.198.096.417.157.651.157h.01c.234 0 .452-.062.651-.157.055-.026.098-.068.148-.098.03-.021.067-.011.097-.032.037-.024.057-.067.091-.096.071-.062.133-.126.192-.2.023-.029.062-.039.084-.071l29.506-41.555a1.554 1.554 0 00-.124-1.955zM48.569 75.202v18.362L26.123 61.942zm3.111 18.362V75.202l22.455-13.26z"></path></g></switch></svg>
                        </div>  
                        <div className="col-md-10">
                        <h4 style={{textAlign:"left"}}>DeFi strategies</h4>
                        <p style={{color:'gray',textAlign:"left"}}>StakeWise is integrated with many DeFi projects that can help you boost your staked ESLVR earnings.<br></br><br></br></p>
                        </div>  
                      </div>
                    </Card.Body>
                </Card>
                </Reveal>
              </div>
            </div>
            <div className="row align-items-center">
              
              <div className='col-md-6 xs-hide'>
               <Reveal className='onStep' keyframes={fadeInLeft} delay={300} duration={900} triggerOnce>
                <Card className="carded">
                    <Card.Body style={{textAlign:'center'}}>
                    <div className="row">
                        <div className="col-md-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.553 60"><g fill="#ff8d72"><path d="M61.915 0H.638A.638.638 0 000 .638v43.405a.638.638 0 00.638.638h30v14.042H18.511a.638.638 0 000 1.277h25.532a.638.638 0 000-1.277H31.915V44.681h30a.638.638 0 00.638-.638V.638A.638.638 0 0061.915 0zm-.638 43.404h-60V1.277h60v42.127z"></path><path d="M8.298 11.49h22.979a.638.638 0 000-1.277H8.297a.638.638 0 000 1.276zm0 5.106h22.979a.638.638 0 000-1.277H8.297a.638.638 0 000 1.277zm0 17.872h12.766a.638.638 0 00.638-.638v-5.107a.638.638 0 00-.638-.638H8.298a.638.638 0 00-.638.638v5.107a.638.638 0 00.638.638zm.638-5.106h11.49v3.83H8.936v-3.83zm-.638-7.66h12.766a.638.638 0 000-1.276H8.298a.638.638 0 000 1.276zM38.692 32.4a.645.645 0 00.696-.138l4.436-4.432 3.268 6.296a.638.638 0 00.858.273l2.664-1.379a.643.643 0 00.275-.862l-3.049-5.876h5.772a.636.636 0 00.431-1.11L39.368 11.707a.638.638 0 00-1.07.471V31.81a.638.638 0 00.394.59zm.882-18.77l12.397 11.374H46.79a.64.64 0 00-.568.932l3.237 6.243-1.53.791-3.376-6.503a.638.638 0 00-1.017-.158l-3.962 3.961V13.63z"></path></g></svg>
                        </div>  
                        <div className="col-md-10">
                        <h4 style={{textAlign:"left"}}>Real-time monitoring</h4>
                        <p style={{color:'gray',textAlign:"left"}}>StakeWise provides comprehensive details about validators to keep you aware of rewards & performance.</p>
                        </div>  
                      </div>
                    </Card.Body>
                </Card>
                </Reveal>
              </div>
              <div className='col-md-6 xs-hide'>
               <Reveal className='onStep' keyframes={fadeInLeft} delay={300} duration={900} triggerOnce>
                <Card className="carded">
                    <Card.Body style={{textAlign:'center'}}>
                      <div className="row">
                        <div className="col-md-2">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M26.68 33.32a4.67 4.67 0 01.063-6.64 4.67 4.67 0 016.639.063 4.67 4.67 0 01-.063 6.639c-1.879 1.754-4.822 1.754-6.638-.063zm-3.695-13.967a12.927 12.927 0 014.635-1.88v-2.38c0-.563.501-1.064 1.065-1.064h2.88c.564 0 1.065.501 1.065 1.065v2.38c1.629.313 3.195.94 4.573 1.941l1.69-1.69c.439-.439 1.065-.376 1.504 0l2.004 2.004c.438.438.376 1.064 0 1.503l-1.754 1.753a12.927 12.927 0 011.88 4.635h2.38c.563 0 1.064.501 1.064 1.065v2.88c0 .564-.501 1.065-1.065 1.065h-2.38c-.313 1.629-.94 3.195-1.941 4.573l1.69 1.69c.439.439.376 1.065 0 1.504L40.272 42.4c-.438.438-1.064.376-1.503 0l-1.753-1.754a12.927 12.927 0 01-4.635 1.88v2.38c0 .563-.501 1.064-1.065 1.064h-2.88c-.564 0-1.065-.501-1.065-1.065v-2.38c-1.629-.313-3.195-.94-4.573-1.941l-1.69 1.69c-.439.439-1.065.376-1.504 0L17.6 40.272c-.438-.438-.376-1.064 0-1.503l1.691-1.69a12.927 12.927 0 01-1.879-4.635h-2.38c-.563 0-1.064-.501-1.064-1.065v-2.881c0-.564.5-1.065 1.064-1.065h2.38c.313-1.628.94-3.194 1.942-4.572l-1.691-1.69c-.439-.44-.376-1.066 0-1.504l2.004-2.004c.438-.439 1.065-.376 1.503 0l1.816 1.69zm1.817 5.386a7.353 7.353 0 00-.063 10.46c2.881 2.88 7.578 2.943 10.522.062 2.881-2.881 2.944-7.578.063-10.522-2.944-2.881-7.641-2.881-10.522 0zm11.9-8.643H34.76v-7.64a5.32 5.32 0 015.324-5.324h1.628a4.096 4.096 0 013.946-3.07c2.254 0 4.07 1.817 4.07 4.072s-1.816 4.07-4.07 4.07a4.096 4.096 0 01-3.946-3.068H40.02a3.368 3.368 0 00-3.382 3.382v7.578zm6.764-12.025c0 1.19.939 2.13 2.129 2.13s2.13-.94 2.13-2.13-.94-2.13-2.13-2.13-2.13 1.003-2.13 2.13zm-14.468 7.954V8.08a4.096 4.096 0 01-3.069-3.945c0-2.255 1.816-4.071 4.071-4.071s4.071 1.816 4.071 4.07a4.096 4.096 0 01-3.069 3.946v3.946h-2.004zM30 6.2c1.19 0 2.13-.939 2.13-2.129s-.94-2.13-2.13-2.13-2.13.94-2.13 2.13.94 2.13 2.13 2.13zm-4.697 2.255v7.641H24.05c-.25 0-.438 0-.689.063V8.455a3.368 3.368 0 00-3.382-3.382h-1.628a4.096 4.096 0 01-3.946 3.069c-2.255 0-4.071-1.816-4.071-4.071S12.15 0 14.405 0a4.096 4.096 0 013.946 3.069h1.628c2.944.063 5.324 2.442 5.324 5.386zm-8.769-4.384c0-1.19-.939-2.13-2.129-2.13s-2.13.94-2.13 2.13.94 2.13 2.13 2.13 2.13-.94 2.13-2.13zM23.8 43.967h1.503v7.64a5.32 5.32 0 01-5.324 5.324h-1.628A4.096 4.096 0 0114.405 60c-2.255 0-4.071-1.816-4.071-4.071s1.816-4.071 4.071-4.071a4.096 4.096 0 013.946 3.069h1.628a3.368 3.368 0 003.382-3.382v-7.641c.125 0 .25.063.439.063zm-7.266 11.962c0-1.19-.939-2.13-2.129-2.13s-2.13.94-2.13 2.13.94 2.13 2.13 2.13 2.13-1.003 2.13-2.13zm17.537 0C34.071 58.184 32.255 60 30 60s-4.071-1.816-4.071-4.071a4.096 4.096 0 013.069-3.946v-3.945h1.941v3.883a4.101 4.101 0 013.132 4.008zm-1.942 0c0-1.19-.939-2.13-2.129-2.13s-2.13.94-2.13 2.13.94 2.13 2.13 2.13 2.13-1.003 2.13-2.13zm17.537 0A4.063 4.063 0 0145.595 60a4.096 4.096 0 01-3.946-3.069h-1.628a5.32 5.32 0 01-5.324-5.323v-7.641h1.253c.25 0 .438 0 .689-.063v7.704a3.368 3.368 0 003.382 3.382h1.628a4.096 4.096 0 013.946-3.07c2.255-.125 4.071 1.754 4.071 4.009zm-1.942 0c0-1.19-.939-2.13-2.129-2.13s-2.13.94-2.13 2.13.94 2.13 2.13 2.13 2.13-1.003 2.13-2.13zm-31.69-30.626H8.454a5.32 5.32 0 01-5.323-5.324v-1.628a4.096 4.096 0 01-3.07-3.946c0-2.255 1.817-4.071 4.072-4.071s4.07 1.816 4.07 4.071a4.096 4.096 0 01-3.068 3.946v1.628a3.368 3.368 0 003.382 3.382h7.64v1.942zM6.2 14.405c0-1.19-.939-2.13-2.129-2.13s-2.13.94-2.13 2.13.94 2.13 2.13 2.13 2.13-.94 2.13-2.13zm1.88 14.656h3.945v1.941H8.08a4.096 4.096 0 01-3.945 3.069C1.879 34.071.063 32.255.063 30s1.816-4.071 4.07-4.071c1.88 0 3.508 1.315 3.946 3.132zM6.2 30c0-1.19-.939-2.13-2.129-2.13s-2.067.94-2.067 2.13.94 2.13 2.13 2.13S6.2 31.19 6.2 30zM5.073 40.02v1.63a4.096 4.096 0 013.069 3.945c0 2.255-1.816 4.071-4.071 4.071S0 47.85 0 45.595a4.096 4.096 0 013.069-3.946v-1.628a5.32 5.32 0 015.323-5.324h7.641v1.253c0 .25 0 .438.063.689h-7.64c-1.88.062-3.383 1.566-3.383 3.382zm-1.002 3.446c-1.19 0-2.13.939-2.13 2.129s.94 2.13 2.13 2.13 2.13-.94 2.13-2.13-.94-2.13-2.13-2.13zM60 45.595c0 2.255-1.816 4.071-4.071 4.071s-4.071-1.816-4.071-4.071a4.096 4.096 0 013.069-3.946v-1.628a3.368 3.368 0 00-3.382-3.382h-7.641v-1.942h7.64a5.32 5.32 0 015.324 5.324v1.628c1.754.439 3.132 2.004 3.132 3.946zm-2.004 0c0-1.19-.94-2.13-2.13-2.13s-2.066.94-2.066 2.13.939 2.13 2.129 2.13 2.067-.94 2.067-2.13zM60 30a4.063 4.063 0 01-4.071 4.071 4.096 4.096 0 01-3.946-3.069h-3.945v-1.941h3.883a4.096 4.096 0 013.945-3.07C58.121 25.93 60 27.746 60 30zm-2.004 0c0-1.19-.94-2.13-2.13-2.13S53.8 28.81 53.8 30s.939 2.13 2.129 2.13 2.067-.94 2.067-2.13zM60 14.405a4.096 4.096 0 01-3.069 3.946v1.628a5.32 5.32 0 01-5.323 5.324h-7.641V24.05c0-.25 0-.438-.063-.689h7.704a3.368 3.368 0 003.382-3.382v-1.628a4.096 4.096 0 01-3.07-3.946 4.063 4.063 0 014.072-4.071c2.13 0 4.008 1.816 4.008 4.071zm-2.004 0c0-1.19-.94-2.13-2.13-2.13s-2.066.94-2.066 2.13.939 2.13 2.129 2.13 2.067-.94 2.067-2.13z" fill="#1d8cf8"></path></svg>
                        </div>  
                        <div className="col-md-10">
                        <h4 style={{textAlign:"left"}}>Integration with your application</h4>
                        <p style={{color:'gray',textAlign:"left"}}>StakeWise API and smart contracts can be integrated into your application to help your users stake ESLVR effortlessly.</p>
                        </div>  
                      </div>
                    </Card.Body>
                </Card>
                </Reveal>
              </div>
            </div>
          </div>
      </div>
    </section>
    );
}
export default Section3;