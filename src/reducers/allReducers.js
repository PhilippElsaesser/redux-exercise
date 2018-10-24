import { combineReducers } from 'redux';
import SelectedCharacterReducer from './reducer-selected-character';
import CharacterlistReducer from './reducer-characterList';

const allReducers = combineReducers({
    characters: CharacterlistReducer,
    selectedCharacter: SelectedCharacterReducer,
});

export default allReducers;