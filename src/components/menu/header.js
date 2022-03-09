import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";




setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const Header= function() {
  

  const [showmenu, btn_icon] = useState(false);
  useEffect(() => {
  const header = document.getElementById("myHeader");
  const totop = document.getElementById("scroll-to-top");
  const sticky = header.offsetTop;
  const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");
        
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      } if (window.pageYOffset > sticky) {
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

    return (
    <header id="myHeader" className='navbar white'>
     <div className='container'>
       <div className='row w-100-nav'>

                    
              <BreakpointProvider>
                <Breakpoint xl>
                  <div className='menu'>
                    <div className='navbar-item'>
                      <a href="/">
                        HOME
                      </a>
                    </div>
                    <div className='navbar-item'>
                      <a href="#about">
                        About
                      </a>
                    </div>
                    <div className='navbar-item'>
                      <a href="#join">
                        Join Staking
                      </a>
                    </div>
                    <div className='navbar-item'>
                      <a href="#token">
                        Tokenize Stacking
                      </a>
                    </div>
                    
                    <div className='navbar-item'>
                      <a href="#integration">
                        Integration
                      </a>
                    </div>
                  </div>  
                </Breakpoint>
              </BreakpointProvider>

                  
      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>     
    </header>
    );
}
export default Header;