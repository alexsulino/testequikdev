import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin} from 'react-icons/fa';
import './Social.css';
class Social extends React.Component {
    render(){
        return(
            <>
                <div className="socialList">
                    <li> <FaInstagram /> </li>
                    <li> <FaFacebook /> </li>
                    <li> <FaLinkedin /> </li>
                </div>
            </>

        )
}
}
export default Social;