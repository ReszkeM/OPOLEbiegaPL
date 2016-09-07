import React from 'react';
import {MenuItems} from '../constants/menu_items'

export default React.createClass({
    render: function() {
        return  <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            {MenuItems.map(entry =>
                                <li key={entry.key}><a href={'#/' + entry.key}>{entry.value}</a></li>
                            )}
                        </ul>
                    </div>
                </nav>
            }
});
