import React from "react";

function Logo({ logo }) {
    return ( <img 
        src={logo} 
        width={100} 
        height={100} 
        className="logo" 
        alt="" />
    );
}

export default Logo;