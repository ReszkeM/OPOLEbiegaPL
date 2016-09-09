import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

// helpers and constants
import {setPerson} from '../../shared/helpers/stateHelper'
import {person} from '../../shared/constants/initialStates'

// actions
import * as personsActions from '../actions/persons_actions';
import * as modalActions from '../../modal/actions/modal_actions';

// components
import {Slider} from '../../shared/components/common/Slider'
import Modal from '../../modal/components/Modal';
import PersonDetails from './PersonDetails';
import {Person} from './Person';

export const Persons = React.createClass({
    getInitialState: function() {
        if (this.props.persons.length === 0){
            this.props.actions.setPersons({});
        }
        return null;
    },

    renderPersonCarousel: function() {
        return  <div id="slider">
                    <Slider collection={this.props.persons} component={Person} />
                </div>
    },

    modalRender: function() {
        return this.props.modal.isPopupVisible ?
            <div id="editWindow">
                <Modal {...this.props.modal} state={person} setObject={setPerson} {...this.props.modalActions} component={PersonDetails} isAdminMode={false} />
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
