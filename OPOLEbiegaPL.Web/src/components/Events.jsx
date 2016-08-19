import React from 'react';

export default React.createClass({
    getEvents: function() {
        return this.props.events || [];
    },
    getParam: function(entry, paramName) {
        return entry.get(paramName)
    },

    render: function() {
        return  <div className="events">
                    {this.getEvents().map(entry =>
                        <div key={this.getParam(entry, 'name')}>
                            <h1>{this.getParam(entry, 'name')}</h1>
                            <p>{this.getParam(entry, 'place')}</p>
                            <p>{this.getParam(entry, 'date')}</p>
                            <p>{this.getParam(entry, 'distance')}</p>
                            <p>{this.getParam(entry, 'description')}</p>
                        </div>
                    )}
                </div>;
}   
});