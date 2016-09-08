import React from 'react';
import Styles from '../constants/styles'

export default React.createClass({
    render: function() {
        return  <header style={Styles.header}>
                    <div className="container">
                        <h1>
                            <span style={Styles.yellowText}>OPOLE</span>
                            <span style={Styles.blueText}>biega.pl</span>
                        </h1>
                        <span style={Styles.descriptionText}>Amatorska grupa biegowa</span>
                    </div>
                </header>
    }
});
