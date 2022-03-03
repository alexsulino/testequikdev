import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';

function Tutorial (){
    return(
        <div className="container">
                <div className="container-fluid">

                <h2>Tutoriais</h2>

                <div  style={{margin: "25px auto", maxWidth:"100%", borderRadius: "5px", backgroundColor:"#eee", padding:"20px"}}>
                <ListGroup  flush  numbered>
                    <ListGroupItem>
                        CRUD - Como criar o apagar com React e como criar a API com PHP
                        <a href="https://www.youtube.com/watch?v=NdCEcDz9v8c" target="_blank" rel="noopener noreferrer"> Aqui</a>
                    </ListGroupItem>
                    <ListGroupItem>
                        Curso React: Conectando com API pelo React - #23 
                        <a href="https://www.youtube.com/watch?v=KCcSzv1RmuI&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=24" target="_blank" rel="noopener noreferrer"> Aqui</a>              
                    </ListGroupItem>
                    <ListGroupItem>
                        Como implementar um LOGIN em React.JS Com React Router e Context API em 20 minutos
                        <a href="https://www.youtube.com/watch?v=FVxdFxxkdDI" target="_blank" rel="noopener noreferrer"> Aqui</a>
                        <b> Indicado por Wellington Fialho</b>
                    </ListGroupItem>
                    <ListGroupItem>
                        ...
                    </ListGroupItem>
                    <ListGroupItem>
                        ...
                    </ListGroupItem>
                </ListGroup>
                </div>


                </div>
            </div>
    );
};
export default Tutorial;