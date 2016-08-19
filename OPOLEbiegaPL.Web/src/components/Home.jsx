import React from 'react';

export default React.createClass({
    render: function() {
        var scope = {
            title: {
                textAlign: 'center',
                fontFamily: 'cursive'
            }
        };

        return  <div className="col-md-8 col-md-offset-2">
                    <h1 style={scope.title}>Home</h1>
                </div>;
        }   
});