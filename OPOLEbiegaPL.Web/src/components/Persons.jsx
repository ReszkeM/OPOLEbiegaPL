import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Persons = React.createClass({
    getInitialState: function() {
        if (this.props.persons.length === 0){
            this.props.setState({}, 'http://localhost:57174/api/PersonApi/GetAll', 'persons');
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

function mapStateToProps(state, props) {
    return {
        isPopupVisible: state.app.isPopupVisible,
        isEditMode: state.app.isEditMode,
        persons: state.app.persons
    };
}

export default connect(mapStateToProps, actionCreators)(Persons);