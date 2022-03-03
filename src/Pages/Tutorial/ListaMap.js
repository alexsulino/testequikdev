import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';

function ListaMap (){

    const carros=[
        {categoria: "Esporte", preco: "10.00", modelo: "BMW"},
        {categoria: "luxo", preco: "10.00", modelo: "Volvo"},
        {categoria: "Passeio", preco: "10.00", modelo: "Golf"},
        {categoria: "Esporte", preco: "40.00", modelo: "Fiat"},
        {categoria: "Lama", preco: "100.00", modelo: "Trator ford"}
    ];
    
    const listaCarros=carros.map(
        (c,i)=>
        <ListGroupItem key={i}>{i} - {c.categoria} - {c.preco} - {c.modelo}</ListGroupItem>
    )

    return(
        <div className="container">
                <div className="container-fluid">

                <h2>Manipular listas - função map</h2>
                <h5>Trabalhando com LISTA em React usando a função MAP - Curso de React - Aula 13</h5> 
                
                <br/>

                <div  style={{margin: "5px auto", maxWidth:"600px", borderRadius: "5px", backgroundColor:"#eee", padding:"20px", textAlign:"left"}}>               
                    <ListGroup  flush >
                    {listaCarros}
                    </ListGroup>
                </div>

                <br/>
                <br/>
                <hr/>
                <p><em><b>Acesse o Link dessa aula: <a href="https://www.youtube.com/watch?v=6iJABCS34Jk&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=14&ab_channel=CFBCursos" target="_blank" rel="noopener noreferrer">Aqui</a></b></em></p>

                </div>
            </div>

            

    );

};
export default ListaMap;