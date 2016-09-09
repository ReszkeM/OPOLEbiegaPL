import React from 'react';
import Button from '../../shared/components/inputs/Button'

// helpers and constants
import {smallLogo, inlineHeader, smallSliderItem, enforceWhiteSpace} from '../../shared/constants/styles'

export const Place = React.createClass({
    render: function() {
        return  <div className="col-md-10 col-md-offset-1" style={smallSliderItem}>
                    <h1>{this.props.object.Name}</h1>
                    <h4>{this.props.object.Date}</h4>
                    <h4>{this.props.object.Address}</h4>
                    <hr />
                    <p style={enforceWhiteSpace}>{this.props.object.Description}</p>
                    <Button onClick={() => this.props.action(this.props.object.GPX)} text={'pokaż trasę'} type={'link'} />
                </div>
    }
});