import React from 'react';

// components
import Button from '../../shared/components/inputs/Button'

// helpers and constants
import {smallLogo, inlineHeader, smallSliderItem} from '../../shared/constants/styles'

export const Friend = React.createClass({
    render: function() {
        return  <div className="col-md-10 col-md-offset-1" style={smallSliderItem}>
                    <img src={this.props.object.ImageURL} style={smallLogo} alt="logo" className="img-responsive img-circle" />
                    <h1 style={inlineHeader}>{this.props.object.Name}</h1>
                    <hr />
                    <p>{this.props.object.Description}</p>
                    <a href={this.props.SiteURL}>Link</a>
                </div>
}
});