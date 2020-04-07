import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Main from './Main';
import Aside from './Aside';
import Footer from './Footer';
import Paragraph from './Paragraph';

import PokeList from './PokeList';
import PokemonInfo from '../data/pokemons'; //----------> Cargamos la info

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: PokemonInfo // ---------------------> Pasamos la info al componente en su estado
    };
  }

  render() {
    console.log('data', this.state.data); // ----------> Comprobamos que nos llega la info
    return (
      <div className="App">

        <Header title="módulo 3 - evaluación intermedia" />
        <Main mainTitle="Enunciado del ejercicio">
          <Paragraph paragraphContent="El ejercicio consiste en desarrollar una página web sencilla con React."/>
          <Paragraph paragraphContent="La web consiste en un listado de pokemon, con una tarjeta para cada uno con información relevante, como el nombre, tipos y una imagen. La información de los pokemon la obtenemos de un array de datos que incluiremos en el estado del componente App."/>
          <Paragraph paragraphContent="Se publicará en GitHub Pages desde el repositorio correspondiente indicando el enlace en la página página principal del repositorio, en la parte superior, al lado de la descripción."/>
        </Main>

        <Aside asideTitle="Título de sección Aside" asideRole="Función de la sección">
          <PokeList dataList={this.state.data}/> {/* ----------> Pasamos la info al componente por props */}
        </Aside>
        
        <Footer/>

      </div>
    );
  }
}

export default App;
