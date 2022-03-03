//import './message.module.css';
import loading from './loading.svg';

function Loading() {
    
    return (
        <div style={{justifyContent: "center",  alignItems: "center", display: "flex", width: "100%", height: "100%", textAlign:"center"}}>
           <img src={loading} alt="Loading" style={{height: "100px", margin:"20px auto" }}/>
        </div>
    )
}
export default Loading;