import React,{useState,useEffect} from "react";

export default function ListaCarros (){

    const [carros,setCarros]=useState([])
    
    useEffect(()=>{
        fetch('https://apireactsulino01.alexsulino.repl.co')
        .then((res)=>res.json())
        .then(
            (resultado)=>{
                setCarros(resultado)
            }
            
        )
     }
    )

    return(
        <section>
            <div className="container">
                <div className="container-fluid">

                    <h2>Como usar FETCH para consumir API NODE? [API NODE] - Curso de React - Aula 41</h2>

                    <div  style={{margin: "5px auto", maxWidth:"300px", borderRadius: "5px", backgroundColor:"#eee", padding:"20px", textAlign:"center"}}>
                        
                        {carros.map(
                            carro => <div key={carro.id}> {carro.id} - {carro.marca} - {carro.modelo} - {carro.cor} </div>

                        )}
                        
                    </div>


                    <br/>
                    <hr/>
                    <h5>Recursos usados</h5><br/>
                    <p>
                        https://apireactsulino01.alexsulino.repl.co<br/>
                        https://replit.com/@AlexSulino/apireactsulino01#index.js
                        
                    </p><br/>
                    <div  style={{margin: "5px auto", maxWidth:"300px", borderRadius: "5px", backgroundColor:"#eee", padding:"20px", textAlign:"center"}}>
                        
                        
                    </div>
                    

                    <br/>
                    <br/>
                    <hr/>

                    <p><em><b>Acesse o Link dessa aula: <a href="https://www.youtube.com/watch?v=fTqOfPfOFJE&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=42&ab_channel=CFBCursos" target="_blank" rel="noopener noreferrer">Aqui</a></b></em></p>
                
                </div>
            </div>
        </section>
    )
}