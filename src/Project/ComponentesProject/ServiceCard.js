
function ServiceCard ({id, name, description, cost, handleRemove}) {
    

    const remove = (e) => { 
        e.preventDefault()
        handleRemove(id, cost)
     }

    return(
        <div className="sub_itens">

            <div className="coluna1">
                <div className="id">{id}</div>
                <h1 className="title">{name}</h1>
                <div className="description">{description}</div>
                <div className="custo"><b>Orçamento:</b> R$ {cost}</div>
            </div>
            <div className="coluna2">
                <div className="remover"> <button onClick={remove}> Remover </button> </div>
            </div>


        </div>

        
    )
}
export default ServiceCard;