import './ComponentesProject/Project.css';
import ProjectForm from './ComponentesProject/ProjectForm';
//import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

//tutorial em: https://www.youtube.com/watch?v=gIWmB3EV4Bo&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=25&ab_channel=MatheusBattisti-HoradeCodar

function NewProject () {

    //const history = useHistory();
    const navigate = useNavigate();

    const confirm = (e) => {
        navigate.push('/')
    }

    function createPost (project) {
        // initialize cost and services 
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: "POST",
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
           // history.push('/projects', {message: 'Projeto criado com sucesso!'})
           navigate.push('/projects', {message: 'Projeto criado com sucesso!'})
        })
        .catch((err) => console.log(err))
    }


    return(
    <div className="container Project">
        <div className="container-fluid">
      
            <div className="newProject">
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
                <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
            </div>

        </div>
    </div> 
    )
}
export default NewProject;