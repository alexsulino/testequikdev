import React from "react";
//import './Banner1.css';
//import Banner1a from '../../Layout/Banners/img/banner-1.jpg';

function Banner1() {
    
        return(
            <>
                <div className="banner1" style={{backgroundColor: "#eee", color: "#fff", width: "100%", minHeight: "280px", backgroundSize: "cover", margin: "10px auto", borderRadius: "10px", padding:"20px", backgroundImage:"url(https://www.c6bank.com.br/static/46fb94a6e4565be4a3babda2787f1586/dfaba/techinvest.webp)"}}>
                    <h4 className="jss92 jss706 jss41 jss52">Seja você mesmo seu assessor de investimentos</h4>
                    <p className="">Montamos uma carteira diversificada em busca do melhor retorno de <br/>acordo com os seus objetivos.</p>
                </div>
            </>

        )
}
export default Banner1;
