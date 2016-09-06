import React from 'react';
import Carousel from 'nuka-carousel';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

// helpers and constants
import ComponentHelper from '../../shared/helpers/componentHelper'
import {setPerson} from '../../shared/helpers/stateHelper'
import {person} from '../../shared/constants/initialStates'
import {block} from '../../shared/constants/styles'

// actions
import * as personsActions from '../actions/persons_actions';
import * as modalActions from '../../modal/actions/modal_actions';

// components
import Modal from '../../modal/components/Modal.jsx';
import PersonDetails from './PersonDetails.jsx';
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
                            <Person key={person.Id} person={person} action={this.showDetailsButtonClick} />
                        )}
                    </Carousel>
        }
    },

    modalRender: function() {
        return this.props.modal.isPopupVisible ?
            <div id="editWindow">
                <Modal {...this.props.modal} state={person} setObject={setPerson} {...this.props.actions} {...this.props.modalActions} component={PersonDetails} isAdminMode={false} />
            </div>
              : null
    },

    showDetailsButtonClick: function(id) {
        this.props.actions.setPerson({
            isPopupVisible: true,
            title: "Pełny opis"
        }, id);
    },

    render: function() {
        return  <div className="persons">
                    { this.renderPersonCarousel() }
                    { this.modalRender() }
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
