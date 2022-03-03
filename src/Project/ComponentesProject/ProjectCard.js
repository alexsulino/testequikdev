import {Link} from "react-router-dom";
function ProjectCard ({ id, name, budget, category, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className="cardBox">
            <div className="cardBoxContainer">
            <div>{id}</div>
                <h1>{name}</h1>
                <div><b>Orçamento:</b> R$ {budget}</div>
                <div><b>Cat: </b> {category}</div>
                <div><Link ink to={'/project/project/'+(id)}> Editar </Link> <button onClick={remove}> Remover </button> </div>
           </div>
        </div>
    )
}
export default ProjectCard;