import { FETCH_CHARACTERS } from '../actions/get-caracter-list';

export default function(state=null, action) {
    switch(action.type) {
        case "CHARACTERLIST_DEMANDED":
            return action.payload;
        case FETCH_CHARACTERS:
            return action.payload;
        default:
            return state;          
    }
}