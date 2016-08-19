import React from 'react';

export default React.createClass({
    getMenuItems: function() {
        return this.props.menuItems || [];
    },

    render: function() {
        return  <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#" onClick={() => this.props.changeCurrentContent('Home')}>Home</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse">
                            <ul className="nav navbar-nav">
                                {this.getMenuItems().map(entry =>
                                    <li key={entry}><a href={'#/' + entry} onClick={() => this.props.changeCurrentContent(entry)}>{entry}</a></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            }
});

