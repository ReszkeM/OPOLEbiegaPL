import React from 'react';
import Formsy from 'formsy-react';
import {errorMessage} from '../../constants/styles'

export const Email = React.createClass({
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
            if (!this.props.value) {
                this.setState({ message: 'Email is required' });
                return false;
            }
            if (this.isValidEmail(this.props.value) === false) {
                this.setState({ message: 'Email is not valid' });
                return false;
            }
        }
        this.setState({ message: '' });
        return true;
    },

    isValidEmail: function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },

    isError: function() {
        return this.state.message !== '';
    },

    getClassName: function() {
        return this.showRequired() && this.state.isValidationEnabled || this.isError() ? 'form-group has-error has-danger' : null;
    },

    render: function() {
        return  <div className={this.getClassName()}>
                    <input className="form-control" type="text" id="email" placeholder="Email" onChange={this.props.onChange} defaultValue={this.props.value} onBlur={this.handleBlur} />
                    { this.isError() ? <span className="label label-danger" style={errorMessage} >{this.state.message}</span> : null}
                </div>
    }
});