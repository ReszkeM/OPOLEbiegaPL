import React from 'react';

export default React.createClass({
    getFriends: function() {
        return this.props.friends || [];
    },

    render: function() {
        var scope = {
            logoStyle: {
                maxHeight: '50px',
                maxWidth: '50px',
            },
        };

        return  <div className="friends">
                    {this.getFriends().map(entry =>
                        <div key={entry.name}>
                            <h1>{entry.name}</h1>
                            <img src={entry.imageURL} style={scope.logoStyle} alt="logo" className="img-responsive"/>
                        </div>
                    )}
                </div>;
}   
});