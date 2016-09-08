import React from 'react';
import Styles from '../../shared/constants/styles'

export default React.createClass({
    render: function() {
        return   <div className="form-group row">
                    <div className="col-md-8 col-md-offset-2">
                        <h1 style={Styles.title}>Home</h1>
                        { /* TODO: opis grupy */ }
                        { /* TODO: wykres z endomondo z rywalizacji - na obecny miesiąc + dodać rywalizację na cały rok? */ }
                    </div>
                </div>
        }
});
