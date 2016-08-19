import React from 'react';

export default React.createClass({
    getInitialState: function() {
        return {
            name: '',
            email: '',
            phone: '',
            title: '',
            message: ''
        };
    },

    handleChange: function(event) {
        var returnObj
        var stateObject = function() {
            returnObj = {};
            returnObj[this.target.id] = this.target.value;
            return returnObj;
        }.bind(event)();

        this.setState( stateObject );  
    },

    render: function() {
        var scope = {
            textArea: {
                resize: 'none',
                minHeight: '100px'
            },
            title: {
                textAlign: 'center',
                fontFamily: 'cursive'
            }
        };

        return  <div className="col-md-8 col-md-offset-2">
                    <h1 style={scope.title}>Skontaktuj się </h1>
                    <div className="form-group">
                        <input className="form-control" id="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" id="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" id="phone" type="text" value={this.state.phone} onChange={this.handleChange} placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" id="title" type="text" value={this.state.title} onChange={this.handleChange} placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="message" style={scope.textArea} value={this.state.message} onChange={this.handleChange} placeholder="Message" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success btn-lg" type="submit" onClick={() => this.props.submit(this.state)}>Wyślij</button>
                    </div>
                </div>;
    }   
});