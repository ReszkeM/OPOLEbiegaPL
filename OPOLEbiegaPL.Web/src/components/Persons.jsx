import React from 'react';

export default React.createClass({
    getPersons: function() {
        return this.props.persons || [];
    },

    render: function() {
        return  <div className="persons">
                    {this.getPersons().map(entry =>
                        <div key={entry.lastName}>
                            <h1>{entry.firstName} {entry.lastName}</h1>
                            <p>{entry.description}</p>
                        </div>
                    )}
                </div>;
    }   
});