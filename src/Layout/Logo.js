import React from "react";
import logotipo from '../../src/images/alexsulinoo.png';

function Logo() {
        return(
                <div className="logo">
                    <a href="/" ><img src={logotipo} alt="logoTipo" style={{height: "40px"}}/></a>
            </div>
        );
}
export default Logo;
