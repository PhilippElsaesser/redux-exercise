import React, { Component } from 'react';
import CharacterList from '../containers/character-list';
import CharacterDetail from '../containers/character-detail';


class App extends Component {
  render() {
    return (
      <div>
        <h2>Simpson Characters</h2>
        <CharacterList />
        <hr/>
        <h2>Quote</h2>
        <CharacterDetail />
      </div>
    );
  }
}

export default App;
