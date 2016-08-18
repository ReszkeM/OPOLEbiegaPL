import React from 'react';

export default React.createClass({
    getEvents: function() {
        return this.props.events || [];
    },

    render: function() {
        return  <div className="events">
                    {this.getEvents().map(entry =>
                        <div key={entry.name}>
                            <h1>{entry.name}</h1>
                            <p>{entry.place}</p>
                            <p>{entry.date}</p>
                            <p>{entry.distance}</p>
                            <p>{entry.description}</p>
                        </div>
                    )}
                </div>;
}   
});