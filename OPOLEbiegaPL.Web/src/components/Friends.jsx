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
                    {this.getFriends().map( ([key, value]) =>
                        <div key={key}>
                            <h1>{key[1]}</h1>
                            <img src={value[1]} style={scope.logoStyle} alt="logo" className="img-responsive"/>
                        </div>
                    )}
                </div>;
    }   
});