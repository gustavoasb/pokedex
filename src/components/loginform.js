import React,{Component} from 'react'
import {Link} from '@reach/router'
import pokeballimg from '../images/pokeball_symbol.png'
import trainer from '../images/pokemon_trainer.png'
import { SubmitForm } from './styles';

class LoginForm extends Component{
    state = {nome: 'Ash Ketchum'}; 
    handleChange = (event) =>{
        this.setState({nome: event.target.value})
    }
    handleSubmit = (event) =>{
        alert('Nomes enviados: ' + this.state.nome);
        event.preventDefault();
    }
    render(){
        return(
            <>
            <form style={{display: 'flex', textAlign: 'center', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', width: '100%', height: '100%'}}>
                <img src = {trainer} width="30%" alt="Pokédex"/>
                <label>
                    <div>Username:</div>
                    <input type='text' style={{textAlign: "center"}} value={this.state.nome} onChange={this.handleChange}/>
                </label>
                <SubmitForm>
                    <Link to='/'>
                        <input type='image' src={pokeballimg} alt='Submit' width= '100%' /*onClick={this.handleSubmit}*//>
                    </Link>
                </SubmitForm>
            </form>
            </>
        )
    }
}

export default LoginForm;