import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export default React.createClass({
    render: function() {
        return this.props.children
    }
});
