import React from "react";
import logotipo from '../../src/images/quikdev-logo-footer.png';

function Logo() {
        return(
                <div className="logo">
                    <a href="/"><img src={logotipo} alt="logo"/></a>
            </div>
        );
}
export default Logo;
