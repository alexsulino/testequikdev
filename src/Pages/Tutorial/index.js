import React from "react";

function Tutorial (){
    return(
        <div className="container">
                <div className="container-fluid">

                <h2>Tutoriais</h2>

                <div  style={{margin: "25px auto", maxWidth:"100%", borderRadius: "5px", backgroundColor:"#eee", padding:"20px", textAlign:"center"}}>
                    <p> <b>CRUD - Como criar o apagar com React e como criar a API com PHP</b></p>
                    <em><a href="https://www.youtube.com/watch?v=NdCEcDz9v8c" target="_blank" rel="noopener noreferrer">Aqui</a></em>
                    <hr/>
                    <br/>

                    <p><b>Curso React: Conectando com API pelo React - #23</b></p>
                    <em><a href="https://www.youtube.com/watch?v=KCcSzv1RmuI&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=24" target="_blank" rel="noopener noreferrer">Aqui</a></em>
                    <p>Várias aulas nesse tutorial</p>
                    <hr/>
                    <br/>

                    <p><b>Como implementar um LOGIN em React.JS Com React Router e Context API em 20 minutos</b></p>
                    <em><a href="https://www.youtube.com/watch?v=FVxdFxxkdDI" target="_blank" rel="noopener noreferrer">Aqui</a></em>
                    <p>Indicado por Wellington Fialho</p>
                    <hr/>
                    <br/>
                </div>

                </div>
            </div>
    );
};
export default Tutorial;