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
                    {this.getFriends().map( ([id, name, url]) =>
                        <div key={id[1]}>
                            <h1>{name[1]}</h1>
                            <img src={url[1]} style={scope.logoStyle} alt="logo" className="img-responsive"/>
                        </div>
                    )}
                    <hr />
                    <div className="form-group">
                        <button className="btn btn-success btn-lg" type="submit" onClick={() => this.props.addFriend(this.state)}>Dodaj</button>
                    </div>
                </div>;
    }   
});