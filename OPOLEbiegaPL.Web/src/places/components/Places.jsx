import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

// helpers and constants
import Button from '../../shared/components/inputs/Button'
import ComponentHelper from '../../shared/helpers/componentHelper'

// actions
import * as placesActions from '../actions/places_actions';
import * as modalActions from '../../modal/actions/modal_actions';

export const Places = React.createClass({
    getInitialState: function() {
        if (this.props.places.length === 0){
            this.props.actions.setPlaces({});
        }
        return {
            showAll: false
        }
    },

    renderListOfItems: function() {
        return this.props.places.map( (place) =>
            <div key={place.Name}>
                <h1>{place.Name}</h1>
            </div>
        );
    },

    expandButton: function () {
        var buttonText = this.state.showAll === false ? 'Pokaż wszystkie' : 'Zwiń';
        var func = this.state.showAll === false ? ComponentHelper.expand.bind(this) : ComponentHelper.collapse.bind(this, this.props.events)
        return <Button onClick={func} text={buttonText} type={'link'} />
    },

    render: function() {
        return  <div className="places">
                   TODO
                </div>
    }
});


function mapStateToProps(state) {
    return {
        modal: state.modal,
        places: state.places,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(placesActions, dispatch),
        modalActions: bindActionCreators(modalActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Places);