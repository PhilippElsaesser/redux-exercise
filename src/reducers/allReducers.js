import { combineReducers } from 'redux';
import CharacterReducer from './reducer-character';
import SelectedCharacterReducer from './reducer-selected-character';

const allReducers = combineReducers({
    characters: CharacterReducer,
    selectedCharacter: SelectedCharacterReducer,
});

export default allReducers;