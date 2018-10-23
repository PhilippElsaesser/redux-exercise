import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterDetail extends Component {

    render() {
        if (!this.props.character) {
            return (
                <h4>please select a character...</h4>
            )
        }
        return (
            <div>
                <h3>{this.props.character.character}</h3>
                <img src={this.props.character.image} alt="" />
                <h5>{this.props.character.quote}</h5>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        character: state.selectedCharacter
    };
};

export default connect(mapStateToProps)(CharacterDetail);