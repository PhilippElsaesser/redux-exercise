import React, { Component } from 'react';
// import CharacterList from '../containers/character-list';
import CharacterDetail from '../containers/character-detail';
import NewCharacterList from '../containers/get-chatacter-list';


class App extends Component {
  render() {
    return (
      <div>
        <h2>Simpson Characters</h2>
        <NewCharacterList />
        <hr/>
        <h2>Quote</h2>
        <CharacterDetail />
      </div>
    );
  }
}

export default App;
