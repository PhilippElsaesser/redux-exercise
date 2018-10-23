import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCharacter } from '../actions/select-character';
import { bindActionCreators } from 'redux';


class CharacterList extends Component {

    createListItems() {
        return this.props.characters.map((character) => {
            return (
                <li 
                    onClick={() => this.props.selectCharacter(character)} 
                >
                    {character.character}
                </li>
            )
        });
    }

    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectCharacter}, dispatch)
};

export default connect(mapStateToProps,matchDispatchToProps)(CharacterList);