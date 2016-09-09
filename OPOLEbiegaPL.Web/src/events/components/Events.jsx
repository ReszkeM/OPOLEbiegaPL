import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

// helpers and constants
import Button from '../../shared/components/inputs/Button'
import ComponentHelper from '../../shared/helpers/componentHelper'

// components
import {Slider} from '../../shared/components/common/Slider'
import {Event} from './Event';

// actions
import * as eventsActions from '../actions/events_actions';
import * as modalActions from '../../modal/actions/modal_actions';

export const Events = React.createClass({
    getInitialState: function() {
        if (this.props.events.length === 0){
            this.props.actions.setEvents({});
        }
        return {
            showAll: false
        }
    },

    renderEventsCarousel: function() {
        return  <div id="slider">
                    <Slider collection={this.props.events} component={Event} />
                </div>
    },

    expandButton: function () {
        { 
            // TODO: Zrobić coś z tym przyciskiem - 
            // - wywalić i zostawić tylko kilka ostatnich eventów
            // - wrzucić gdzieś do slidera - jako decorator? - wtedy trzeba zrobić dekorator w komponencie i tutaj tylko dać properte czy ma byc ten bnutton
        }
        var buttonText = this.state.showAll === false ? 'Pokaż wszystkie' : 'Zwiń';
        var func = this.state.showAll === false ? ComponentHelper.expand.bind(this) : ComponentHelper.collapse.bind(this, this.props.events)
        return <Button onClick={func} text={buttonText} type={'link'} />
    },

    render: function() {
        return  <div className="events">
                    { this.renderEventsCarousel() }
                </div>
    }
});


function mapStateToProps(state) {
    return {
        modal: state.modal,
        events: state.events,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventsActions, dispatch),
        modalActions: bindActionCreators(modalActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);