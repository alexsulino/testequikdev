import React from "react";

export default function Dados (props){
    
    const n1=10
    const n2=20

    return(
        <div>
        <section>
            <div  style={{margin: "40px auto", padding:"20px", textAlign:"center"}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CsCP8ZFySg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <p>Canal: {props.canal}</p>
            <p>Youtube: {props.youtube}</p>
            <p>Cursos: {props.cursos}</p>
            <p><em><b>Acesse o Link dessa aula: <a href={props.linkaula} target="_blank" rel="noopener noreferrer">Aqui</a></b></em></p>

            <br/>
            <hr/>
            <br/>
            <h5>Enviar funções para os componentes - Curso de React - Aula 07</h5>

            <div  style={{margin: "40px auto", padding:"20px", textAlign:"center"}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6T6AM9VbLMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <p>{'A soma de ' + n1 + ' com ' + n2 + ' e igual = '  + props.somar(n1,n2)}</p>
            <p><em><b>Acesse o Link dessa aula: <a href={props.linkaula2} target="_blank" rel="noopener noreferrer" >Aqui</a></b></em></p>

            <br/>
            <hr/>
            <br/>
            <h2>Ver Amanhã</h2>
            <h5>Trabalhando com LISTA em React usando a função MAP - Curso de React - Aula 13</h5>
            <p><em><b>Executar esse video amanhã: <a href="https://www.youtube.com/watch?v=6iJABCS34Jk&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=13" target="_blank" rel="noopener noreferrer" >Aqui</a></b></em></p>

        </section>
        </div>
    )
}