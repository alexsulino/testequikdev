import React from "react";

import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

//import '../styles/w3.css';

import { FaChevronRight, BiEdit, GrChapterAdd, CgSmileSad} from 'react-icons/fa';

import { parse, v4 as uuidv4 } from 'uuid';

import Message from "./ComponentesProject/Message";
import Loading from "./ComponentesProject/Loading";

import ProjectForm from "./ComponentesProject/ProjectForm";
import ServiceForm from "./ComponentesProject/ServiceForm";
import ServiceCard from "./ComponentesProject/ServiceCard";

function Project(){
    const {id} = useParams()
    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)

    const [message, setMessage] = useState()
    const [type, setType] = useState()

    //Get Project id
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects/'+(id), {
                method: "GET",
                headers:{
                    'Content-Type': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProject(data)
                setServices(data.services)
            })
            .catch((err) => console.log(err))
        }, 400)
    }, [id])

    //PATCH Atualizar Project id
    function editPost (project) {
        setMessage('')

        // Budget validation
        if (project.budget < project.cost) {
            setMessage('O Orçamento não pode ser menor que o custo do projeto!')
            setType ('error')
            return(false)
        }
            fetch('http://localhost:5000/projects/' +(project.id), {
                method: "PATCH",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(project),
            })
            .then((resp) => resp.json())
            .then((data) => {
                //console.log(data)
                setProject(data)
                setShowProjectForm(false)
                setMessage('Projeto Atualizado!')
                setType('sucecss')
            })
            .catch((err) => console.log(err))
    }

    // create Services
    function createService (project) {
        setMessage('')
        const lastService = project.services[project.services.length -1]
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        //maximum value validation
        if(newCost > parseFloat(project.budget)){
            setMessage ('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            project.services.pop()
            return false
        }

        //add service cost to project total cost
        project.cost = newCost

        fetch('http://localhost:5000/projects/'+(project.id), {
            method: "PATCH",
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
          //console.log(data)
          //setService(data)
          setShowServiceForm (false)
        })
        .catch((err) => console.log(err))
    }
    // End create Services

    // remover  Services
    function removeService(id, cost) {
       const servicesUpdated = project.services.filter(
           (service) => service.id !== id
       )

       const projectUpdated = project

       projectUpdated.services = servicesUpdated
       projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

       fetch('http://localhost:5000/projects/'+(projectUpdated.id), {
            method: "PATCH",
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(projectUpdated),
        })
        .then((resp) => resp.json())
        .then((data) => {
          //console.log(data)
          setProject(projectUpdated)
          setServices(servicesUpdated)
          setMessage("Serviço removido com sucesso!")
        })
        .catch((err) => console.log(err))


    }
    // End remover  Services

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <div className="container Project">
            <div className="container-fluid">
            
                <div className="">
                <h1 className="title"> Meus Projetos </h1>

                    <button className="btn" onClick={toggleProjectForm}>
                        {!showProjectForm ?  " Editar Projeto" : "Fechar"}
                    </button>
                                                   
                    {message && <Message type={type} msg={message}/>}

                    {!showProjectForm ? (
                        //if showProjectForm
                        <div className={project.id} > 
                            <p>{project.name ? <h2 className="title"> {project.name} </h2> : <Loading/>}</p>
                            <p><span>Categoria: </span> {project.category?.name}</p>
                            <p><span>Total Orçamento: </span> R$: {project.budget}</p>
                            <p><span>Total Utilizado: </span> R$: {project.cost}</p>                           
                        </div>

                    ) : (
                       // else showProjectForm
                        <div className="defaultContainer">
                            <p> <FaChevronRight /> Detalhes do Projeto</p>

                            <ProjectForm 
                            handleSubmit={editPost} 
                            btnText="Concluir Edição"
                            projectData={project}/>
                           
                        </div>                     
                    )}

                    <div className="ContainerServicos">

                        {/*<h2 className="title"> Adicione um serviço </h2>*/}
                        <button className="btn" onClick={toggleServiceForm}>
                            {!showServiceForm ?  "Adicionar Serviço" : "Fechar"}
                        </button>            

                        {showServiceForm && <ServiceForm 
                        handleSubmit={createService} 
                        btnText="Adicionar Serviços" 
                        projectData={project}
                        />}

                        <h2 className="title"> <FaChevronRight /> Serviço</h2>
                        <div className="boxSubItens">
                            {services.length > 0 &&
                                services.map((service) => (
                                    <ServiceCard
                                    id={service.id}
                                    name={service.name}
                                    cost={service.cost}
                                    description={service.description}
                                    key={service.id}
                                    handleRemove={removeService}
                                    />
                                ))
                            
                            }
                            {services.length === 0 && <p>  Não há serviços cadastrados</p>}
                            
                        </div>

                    </div>
                   
                </div>
              

            </div>
        </div>
    )
}
export default Project;