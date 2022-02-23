import React from "react";
import Dados from "./Dados";

function Contato (){
        // constant
        const cnl='Canal teste alex'
        const you='Canal teste alex'
        const crs='Canal teste alex'
        const link='https://www.youtube.com/watch?v=CsCP8ZFySg4&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=6'
        const link2='https://www.youtube.com/watch?v=6T6AM9VbLMY&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=7'
        // Fim aero constant

        //função 
        const somar=(v1,v2)=>{
            return v1+v2
        }
        //Fim função

        return(
            <div className="container">
                <div className="container-fluid">
                    <h2>Contato</h2>
                    <h5>Enviar propriedades para os componentes com PROPS - Curso de React - Aula 06</h5>
                    <Dados
                        canal={cnl}
                        youtube={you}
                        cursos={crs}
                        linkaula={link}
                        linkaula2={link2}
                        somar={somar}
                    />
                </div>
            </div>
        );
};
export default Contato;