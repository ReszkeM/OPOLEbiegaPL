import React from 'react';
import {connect} from 'react-redux';
import ComponentHelper from '../helpers/componentHelper'

export const Persons = React.createClass({
    config: {
        url: 'http://localhost:57174/api/PersonApi',
        type: 'SET_PERSONS',
        object: [],
        title: ''
    },

    getInitialState: function() {
        if (this.props.persons.length === 0){
            this.props.actions.setState({}, this.config);
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

export default connect(ComponentHelper.mapStateToProps, ComponentHelper.mapDispatchToProps)(Persons);