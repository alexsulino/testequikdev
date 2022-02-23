import React, {useState} from "react";

export default function ManipulandoElementosForm (){

    const [name,setName]=useState('')
    const [carro,setCarro]=useState('Escolha')

    return(
        <section>
            <div className="container">
                <div className="container-fluid">

                    <h2>Manipulando elementos de formulário com React - Curso de React - Aula 14</h2>

                    <div  style={{margin: "5px auto", maxWidth:"300px", borderRadius: "5px", backgroundColor:"#eee", padding:"20px", textAlign:"center"}}>
                        <input type='text' name='fname' value={name} onChange={(e)=>setName(e.target.value)}/>
                        <br/>
                        <label>Nome: {name}</label>
                    </div>

                    <div  style={{margin: "5px auto", maxWidth:"300px", borderRadius: "5px", backgroundColor:"#eee", padding:"20px", textAlign:"center"}}>
                        <br/>
                        <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
                            <option value="Escolha">Escolha</option>
                            <option value="Fusca">Fusca</option>
                            <option value="Ford ka">Ford ka</option>
                            <option value="Opala">Opala</option>
                            <option value="Belina">Belina</option>
                        </select>
                        <br/>
                        <label>Carro: {carro}</label>
                    </div>

                    <div  style={{margin: "5px auto", maxWidth:"300px", borderRadius: "5px", backgroundColor:"#eee", padding:"20px", textAlign:"center"}}>
                        <p style={{margin: "5px auto", borderRadius: "5px", backgroundColor:"#fff", padding:"10px", textAlign:"center"}}>Nome: {name} | Carro: {carro}</p>
                    </div>

                    <br/>
                    <br/>
                    <hr/>

                    <p><em><b>Acesse o Link dessa aula: <a href="https://www.youtube.com/watch?v=CmdBwXsbGOs&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=14&ab_channel=CFBCursos" target="_blank" rel="noopener noreferrer">Aqui</a></b></em></p>
                
                </div>
            </div>
        </section>
    )
}