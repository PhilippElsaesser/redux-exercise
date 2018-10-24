import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchList} from '../actions/get-caracter-list';
import {selectCharacter} from '../actions/select-character';


class NewCharacterList extends Component {


    
    createListItems() {                               
        return this.props.characters.map((character,index) => {
            return (
                <li 
                    key={index}
                    onClick={() => this.props.selectCharacter(character)}
                >
                    {character.character}
                </li>
            )
        });
    }


    render() {
        if (!this.props.characters) {
            return (
                <div>
                    <button 
                        onClick={() => this.props.fetchList()}
                    >
                        Get Simpson Characters
                    </button>
                </div>
            )
        }
        return (
            <div>
                <button 
                    onClick={() => this.props.fetchList()}
                >
                    Get Simpson Characters
                </button>
                <ul>
                    {this.createListItems()}
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { 
        characters: state.characters
    };
}

function matchDispatchToProps(dispatch) {
    return {
        fetchList: bindActionCreators(fetchList, dispatch),
        selectCharacter: bindActionCreators(selectCharacter, dispatch),
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(NewCharacterList); 