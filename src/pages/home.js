import React, {Component} from 'react';
import Header from '../components/header';
import axios from 'axios';
import {Link} from '@reach/router'
import {BackgroundStyle, PokemonList, PokemonCard, PokemonText, Center} from "../components/styles";

class Home extends Component {
  state = {
    pokemons: []
  }
  
  componentWillMount(){
    axios.get('https://pokedex-cjr.herokuapp.com/pokemons').then(response =>  {
      console.log(response.data);
      console.log(response.data.data[0]);
      console.log(response);
      const pokemons = response.data.data;
      this.setState({pokemons: pokemons});
    })
  }

  onScroll = () => {
    const that = this;
    (window).scroll(function () {
        if ((window).scrollTop() + (window).height() === (document).height()) {
            that.fetchMoreData();
        }
    });
  };

  handleColor(pokemon){
    let types = pokemon.kind.split(';')
    let colors = []
    colors = this.colorToType(types)
    if(colors[1] === 'lightgray')
      return colors[0]
    return 'linear-gradient(0deg, '+colors[1]+' 50%, '+colors[0]+' 50%)'
  }

  colorToType(types){
    let colors = ['lightgray','lightgray']
    for(let i=0; i < 2; i++){
      switch(types[i]){
        case 'grass': colors[i] = 'green' 
                    break
        case 'fire': colors[i] = 'darkred'
                    break;
        case 'water': colors[i] = 'aqua'
                    break;
        case 'bug': colors[i] = 'lightgreen'
                    break;
        case 'normal': colors[i] = 'darkkhaki'
                    break;
        case 'poison': colors[i] = 'purple'
                    break;
        case 'electric': colors[i] = 'yellow'
                    break;
        case 'ground': colors[i] = 'ocre'
                    break;
        case 'fighting': colors[i] = 'chocolate'
                    break;
        case 'psychic': colors[i] = 'pink'
                    break;
        case 'rock': colors[i] = 'gray'
                    break;
        case 'flying': colors[i] = 'blue'
                    break;
        case 'ghost': colors[i] = 'indigo'
                    break;
        case 'ice': colors[i] = 'lightblue'
                    break;
        case 'dragon': colors[i] = 'purple'
                    break;
        case 'steel': colors[i] = 'lavender'
                    break;
        case 'dark': colors[i] = 'brown'
                    break;
        case 'fairy': colors[i] = 'lightpink'
                    break;
        default: colors[i] = 'lightgray'
                    break;
      }
    }
    return colors
  }

  render(){
  return(
      <>
        <BackgroundStyle/>
        <Header/>
        <Center>
        <PokemonList>
          {this.state.pokemons.map(pokemon => <Link to={'/pokemons/'+pokemon.name} style={{ textDecoration: 'none' }}>
                                                <PokemonCard style={{background: this.handleColor(pokemon)}}>
                                                  <img src={pokemon.image_url} alt={pokemon.name+" Image"}></img>
                                                  <PokemonText>{pokemon.name}</PokemonText>
                                                </PokemonCard>
                                              </Link>)}
        </PokemonList>
        </Center>
      </>
    );
  }
}

export default Home;
