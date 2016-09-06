import React from 'react';

export default React.createClass({
    className: "form-control",

    // Jeśli chcemy mieć id upper-case używamy property id
    // Jeśli chcemy mieć id lower-case-używamy property name
    getId: function() {
        return this.props.id ? this.props.id : this.props.name.toLowerCase();
    },

    getType: function() {
        switch(this.props.type){
            case 'password':
                return 'password';
            default:
                return 'text';
        }
    },

    onChange: function (event) {
        this.props.mainComponent.setState({[event.target.id] : event.target.value});
    },

    render: function() {
        return  <input 
                    className={this.className} 
                    id={this.getId()}  
                    type={this.getType()} 
                    onChange={this.onChange}
                    onBlur={this.props.handleBlur}  
                    value={this.props.value}  
                    placeholder={this.props.name} 
                />
    }
});