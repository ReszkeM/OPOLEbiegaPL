import React from 'react';

export default React.createClass({
    getClassName: function() {
        switch (this.props.type){
            case 'edit':
                return "btn btn-success"
            case 'save':
                return "btn btn-primary"
            case 'remove':
                return "btn btn-danger" 
            case 'link':
                return "btn btn-link"
            default:
                return "btn btn-default"
        }
    },

    shouldComponentDisplay: function() {
        if(typeof(this.props.isEditMode) === 'undefined') return true;
        else return this.props.isEditMode
    },

    render: function() {
        return this.shouldComponentDisplay() ? <button className={this.getClassName()} disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.text}</button> : null
    }
});