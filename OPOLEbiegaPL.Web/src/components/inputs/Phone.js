import React from 'react';
import Formsy from 'formsy-react';
import {errorMessage} from '../../helpers/styles'

export const Phone = React.createClass({
    mixins: [Formsy.Mixin],

    getInitialState: function() {
        return {
            isValidationEnabled: false,
            message: ''
        }
    },

    handleBlur: function () {
        if (this.state.isValidationEnabled === false) {
            this.setState({ isValidationEnabled: true });
            this.validate(true);
        }
    },

    validate: function(isValidationEnabled) {
        if (this.state.isValidationEnabled || isValidationEnabled) {
            if (isNaN(this.props.value)) {
                this.setState({ message: 'Phone number must be a number' });
                return false;
            }
            if (this.props.value.length !== 0 && this.props.value.length < 7) {
                this.setState({ message: 'Phone number is to short' });
                return false;
            }
            if (this.props.value.length > 12) {
                this.setState({ message: 'Phone number is to long' });
                return false;
            }
        }
        this.setState({ message: '' });
        return true;
    },

    isError: function() {
        return this.state.message !== '';
    },

    getClassName: function() {
        return this.isError() ? 'form-group has-error has-danger' : null;
    },

    render: function() {
        return  <div className={this.getClassName()}>
                    <input className="form-control" id="phone" type="text" placeholder="Phone" onChange={this.props.onChange} defaultValue={this.props.value} onBlur={this.handleBlur} />
                    { this.isError() ? <span className="label label-danger" style={errorMessage} >{this.state.message}</span> : null}
                </div>
    }
});