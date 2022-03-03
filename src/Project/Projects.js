import { useLocation } from "react-router-dom";
import Message from "./ComponentesProject/Message";
import Loading from "./ComponentesProject/Loading";
import ProjectCard from "./ComponentesProject/ProjectCard";

import {useState, useEffect} from "react";

//import './message.module.css';
function Projects(){
    
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState (false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

        
        useEffect(() => {
            setTimeout(() => {
                fetch('http://localhost:5000/projects', {
                    method: "GET",
                    headers:{
                        'Content-type': 'application/json',
                    },
                })
                .then((resp) => resp.json())
                .then((data) => {
                    //console.log(data)
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
            }, 300)
        },[])
        

        
        function removeProject(id) {
            //console.log(id)
            fetch ('http://localhost:5000/projects/'+(id), {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((resp) => resp.json())
                .then(() => {
                    //console.log(data)
                    setProjects(projects.filter((project) => project.id !== id ))
                    setProjectMessage('Removido com sucesso!')
                })
                .catch((err) => console.log(err))
        }
       

    return (
        <div className="container Project">
            <div className="container-fluid">
                <h1> Meus Projetos </h1>
                {message && <Message type='success' msg={message} /> }
                {projectMessage && <Message type='success' msg={projectMessage} /> }

                <div className="ConteinerProjectsCardBox">
                    {projects.length > 0 && 
                    projects.map((project) => (
                    <ProjectCard 
                    id={project.id}
                    name={project.name} 
                    budget={project.budget} 
                    category={project.category?.name}
                    key={project.id}
                    handleRemove={removeProject}
                    />
                    ))} 
                </div>
                {!removeLoading && <Loading />}

            </div>
        </div>
    )
}
export default Projects;