import React from 'react';
import Styles from '../constants/styles'

export default React.createClass({
    render: function() {
        return  <footer>
                   <div className="navbar navbar-default">
                          <p className="navbar-text pull-left"> © 2016 - OPOLEbiega.pl By Marek Reszke </p>
                          { /* TODO: sekcja/slider ze sponsorami */ }
                    </div>
                </footer>
    }
});
