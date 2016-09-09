import React from 'react';

// components
import Button from '../../shared/components/inputs/Button'

// helpers and constants
import {inlineLogo, inlineHeader, sliderItem} from '../../shared/constants/styles'

export const Person = React.createClass({
    render: function() {
        return  <div className="col-md-10 col-md-offset-1" style={sliderItem}>
                    <img src={this.props.object.ImageURL} style={inlineLogo} alt="logo" className="img-responsive img-circle" />
                    <h1 style={inlineHeader}>{this.props.object.FirstName} {this.props.object.LastName}</h1>
                    <hr />
                    <p>{this.props.object.ShortDescription}</p>
                    <Button onClick={() => this.props.action(this.props.object.Id)} text={'czytaj więcej'} type={'link'} />
                </div>
    }
});