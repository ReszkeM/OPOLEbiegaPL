import React from 'react';

export default React.createClass({
    getAnnouncements: function() {
        return this.props.announcements || [];
    },

    render: function() {
        return  <div className="announcements">
                    {this.getAnnouncements().map(entry =>
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