import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

// helpers and constants
import ComponentHelper from '../../shared/helpers/componentHelper'

// actions
import * as personsActions from '../actions/persons_actions';
import * as modalActions from '../../modal/actions/modal_actions';

export const Persons = React.createClass({
    getInitialState: function() {
        if (this.props.persons.length === 0){
            this.props.actions.setPersons({});
        }
        return null;
    },

    renderListOfItems: function() {
        return this.props.persons.map( (person) =>
            <div key={person.LastName}>
                <h1>{person.FirstName} {person.LastName}</h1>
                <p>{person.Description}</p>
            </div>
        );
    },

    render: function() {
        return  <div className="persons">
                    { this.renderListOfItems() }
                </div>
    }
});


function mapStateToProps(state) {
    return {
        modal: state.modal,
        persons: state.persons,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(personsActions, dispatch),
        modalActions: bindActionCreators(modalActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);