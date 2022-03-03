import Input from './Form/Input';
import Textarea from './Form/Textarea';
import SubmitButton from './Form/SubmitButton';
import {useState} from "react";

function ServiceForm ({handleSubmit, btnText, projectData}) {
    

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange (e) {
        setService({...service, [e.target.name]: e.target.value })
    }

   

    return(
        <form onSubmit={submit} className="ServiceForm">
            <Input
             type="text"
             text="Nome do projeto"
             name="name"
             placeholder="Insira o nome do projeto"
             handleOnChange={handleChange}
             //value={project.name ? project.name: ""}
             />

             <Input
             type="number"
             text="Custo do Serviço"
             name="cost"
             placeholder="Valor total"
             handleOnChange={handleChange}
            //value={project.cost ? project.cost: ""}
             />
            
            {/*<Input
            type="text" 
            text="Descrição do Serviço"
            name="description"
            placeholder="Descreva o serviço"
            handleOnChange={handleChange}
            >*/}

             <Textarea name="description" text="Descrição do Serviço" placeholder="Descreva o serviço" handleOnChange={handleChange} />

             
             <SubmitButton text={btnText} />

        </form>

    )
}
export default ServiceForm;