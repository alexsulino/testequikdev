import React from "react";
import Logo from "./Logo";
import Social from "./Social";
import { Container, Row, Col} from 'reactstrap';

class Footer extends React.Component{
    render(){
        return(
        <div className="footer">

            <div className="container-full" style={{backgroundColor: "#2e2457", color: "#fff", padding:"20px", textAlign:"center"}}>
                <div className="container">
                    <Container>
                        <Row>
                            <Col>
                                <Logo/>
                            </Col>
                            <Col>
                                Alex Sulino
                            </Col>
                            <Col>
                                <Social />
                            </Col>
                        </Row>       
                    </Container>
                </div>
                
            </div>
            <div style={{backgroundColor: "#2b234e", color: "#fff", padding:"20px", textAlign:"center"}} >
                <p>Todos os direitos reservados à QuikDev – 2022.</p>
            </div>

        </div>    
        );

    }
}
export default Footer;