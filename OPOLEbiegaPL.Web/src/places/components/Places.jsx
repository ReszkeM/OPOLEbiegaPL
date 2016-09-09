import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import {Slider} from '../../shared/components/common/Slider'
import {Place} from './Place';

// helpers and constants
import ComponentHelper from '../../shared/helpers/componentHelper'
import {enforceWhiteSpace} from '../../shared/constants/styles'

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

    renderPersonCarousel: function() {
        return  <div id="slider">
                    <Slider collection={this.props.places} component={Place} />
                </div>
    },

    render: function() {
        return  <div className="places">
                   {this.renderPersonCarousel()}
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