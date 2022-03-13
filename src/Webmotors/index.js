import React from 'react';
import logoWebmotors from './img/webmotors.svg';
import './style.css';



class Webmotors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'manga'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Seu sabor favorito é: ' + this.state.value);
        event.preventDefault();
      }
    
  
    render() {
      return (
        <div className="container">
            <div className="container-fluid">
            <div className="container-web">

            <div className="headerWeb">
                <a href="/" ><img src={logoWebmotors} alt="logoTipo" style={{height: "40px"}}/></a>
            </div>
                
            <div className="VehicleDetails__container">
                <form onSubmit={this.handleSubmit}>

                <ul>
                <div className='grid two_columns'>
                            
                        
                    <li>
                        <label className="LabelCheckbox">Novos
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        </label>

                        <label className="LabelCheckbox">Usados
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                        </label>
                    </li>
                    </div>

                    <li>
                    <label>
                    Escolha seu sabor favorito:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="laranja">Laranja</option>
                        <option value="limao">Limão</option>
                        <option value="coco">Coco</option>
                        <option value="manga">Manga</option>
                    </select>
                    </label>
                    </li>

                    <div className='grid two_columns'>

                        <li>
                        <label>
                        Escolha seu sabor favorito:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="laranja">Laranja</option>
                            <option value="limao">Limão</option>
                            <option value="coco">Coco</option>
                            <option value="manga">Manga</option>
                        </select>
                        </label>
                        </li>

                        <li>
                        <label>
                        Escolha seu sabor favorito:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="laranja">Laranja</option>
                            <option value="limao">Limão</option>
                            <option value="coco">Coco</option>
                            <option value="manga">Manga</option>
                        </select>
                        </label>
                        </li>

                    </div>

                    <div className='grid two_columns'>
                
                    <a href='#'> Busca Avançada</a>

                        <div className='grid two_columns'>
                            <a href='#'>Limpar filtros</a>
                            <input type="reset" value="reset"></input>
                            <button class="ButtonSubmit" value="Ver Ofertas" type="submit" rel="noreferrer">Ver Ofertas</button>
                        </div>

                    </div>
                </ul>
                </form>
           </div> 

            </div>
            </div>
        </div>
      );
    }
  }




  export default Webmotors;