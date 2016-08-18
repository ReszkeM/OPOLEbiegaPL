import React from 'react';

export default React.createClass({
    handleChange: function(event) {
        this.setState({name: event.target.value});
        console.log(this.props.contact.name)
        this.setState({name: event.target.value});
        console.log(this.props.contact.name)
    },

render: function() {
        return  <div className="contact">
                    <h1>Skontaktuj się </h1>
                    <input type="text" value={this.props.contact.name} onChange={this.handleChange} placeholder="Name" />
                </div>;
    }   
});