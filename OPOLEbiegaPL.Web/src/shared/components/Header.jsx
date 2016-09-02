import React from 'react';
import Styles from '../constants/styles'

export default React.createClass({
    render: function() {
        return  <header style={Styles.header}>
                    <div className="container">
                        <div className="col-lg-12">
                            <h1 className="col-lg-12">
                                <span style={Styles.yellowText}>OPOLE</span>
                                <span style={Styles.blueText}>biega.pl</span>
                            </h1>
                            <span style={Styles.descriptionText}>Amatorska grupa biegowa</span>
                        </div>
                    </div>
                </header>
    }
});
