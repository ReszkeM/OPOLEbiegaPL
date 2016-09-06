import React from 'react';
import Carousel from 'nuka-carousel';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

// helpers and constants
import ComponentHelper from '../../shared/helpers/componentHelper'
import {block} from '../../shared/constants/styles'

// actions
import * as personsActions from '../actions/persons_actions';
import * as modalActions from '../../modal/actions/modal_actions';

// components
import {Person} from './Person';

export const Persons = React.createClass({
    mixins: [Carousel.ControllerMixin],
    getInitialState: function() {
        if (this.props.persons.length === 0){
            this.props.actions.setPersons({});
        }
        return null;
    },

    renderPersonCarousel: function() {
        if( this.props.persons.length !== 0){
            return  <Carousel style={block} className="center-block">
                        { this.props.persons.map( (person) =>
                            <Person key={person.Id} person={person} /> 
                        )}
                    </Carousel>
        }
    },

    render: function() {
        return  <div className="persons">
                    { this.renderPersonCarousel() }
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