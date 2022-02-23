import React from "react";
import image from '../../src/images/quikdev-logo-footer.png';

class Footer extends React.Component{
    render(){
        return(
        <div className="footer">

            <div className="container-full" style={{backgroundColor: "#2e2457", color: "#fff", padding:"20px", textAlign:"center"}}>
                <div className="container">
                 <div className="logo"> <img src={image} alt="logo"/> </div>
                </div>
            </div>
            <div style={{backgroundColor: "#2b234e", color: "#fff", padding:"20px", textAlign:"center"}} >
                <p>Todos os direitos reservados à QuikDev – 2022. Teste Alex Sulino</p>
            </div>

        </div>    
        );

    }
}
export default Footer;