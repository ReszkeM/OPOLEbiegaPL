import React from 'react';
import Styles from '../helpers/styles'

export default React.createClass({
    render: function() {
        return   <div className="form-group row">
                    <div className="col-md-8 col-md-offset-2">
                        <h1 style={Styles.title}>Home</h1>
                    </div>
                </div>
        }
});
