import React from 'react';

export default React.createClass({
    getAnnouncements: function() {
        return this.props.announcements || [];
    },
    getParam: function(entry, paramName) {
        return entry.get(paramName)
    },

    render: function() {
        return  <div className="announcements">
                    {this.getAnnouncements().map(entry =>
                        <div key={this.getParam(entry, 'Name')}>
                            <h1>{this.getParam(entry, 'Name')}</h1>
                            <p>{this.getParam(entry, 'Place')}</p>
                            <p>{this.getParam(entry, 'Date')}</p>
                            <p>{this.getParam(entry, 'Distance')}</p>
                            <p>{this.getParam(entry, 'Description')}</p>
                        </div>
                    )}
                </div>;
}   
});