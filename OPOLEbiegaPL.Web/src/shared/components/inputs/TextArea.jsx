import React from 'react';
import {textArea} from '../../constants/styles'

export default React.createClass({
    className: "form-control",

    contextTypes: {
        mainComponent: React.PropTypes.object
    },

    // Jeśli chcemy mieć id upper-case używamy property id
    // Jeśli chcemy mieć id lower-case-używamy property name
    getId: function() {
        return this.props.id ? this.props.id : this.props.name.toLowerCase();
    },

    onChange: function (event) {
        this.context.mainComponent.setState({[event.target.id] : event.target.value});
    },

    render: function() {
        return  <textArea 
                    className={this.className} 
                    id={this.getId()}  
                    style={textArea}
                    onChange={this.onChange}
                    value={this.props.value}  
                    placeholder={this.props.name} 
                />
    }
});