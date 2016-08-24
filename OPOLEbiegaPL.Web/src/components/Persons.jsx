import React from 'react';

export default React.createClass({
    getPersons: function() {
        return this.props.persons || [];
    },
    getParam: function(entry, paramName) {
        return entry.get(paramName)
    },

    render: function() {
        return  <div className="persons">
                    {this.getPersons().map(entry =>
                        <div key={this.getParam(entry, 'LastName')}>
                            <h1>{this.getParam(entry, 'FirstName')} {this.getParam(entry, 'LastName')}</h1>
                            <p>{this.getParam(entry, 'Description')}</p>
                        </div>
                    )}
                </div>;
    }
});
