import React, { Component } from 'react';
import Hero from './Hero'
import heroes from './heroes/index'

const allHeroes = Object.values(heroes)

class App extends Component {
  state = {
    hero: false,
  }

  selectHero (name) {
    return () => {
      this.setState({
        hero: name,
      })
    }
  }

  render() {
    const heroesList = allHeroes.map((hero, index) => (
      <div key={index} onClick={this.selectHero(hero.name)}>
        <img src={hero.image} alt={hero.name} />
      </div>
    ))

    const selectedHero = this.state.hero && <Hero name={this.state.hero}/>

    return (
      <div>
        {heroesList}
        {selectedHero}
      </div>
    )
  }
}

export default App;
