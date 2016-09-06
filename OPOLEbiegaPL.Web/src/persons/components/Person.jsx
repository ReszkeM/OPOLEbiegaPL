import React from 'react';
import Button from '../../shared/components/inputs/Button'

// helpers and constants
import {inlineLogo, inlineHeader, sliderItem} from '../../shared/constants/styles'

export const Person = React.createClass({
    render: function() {
        return  <div className="col-md-10 col-md-offset-1" style={sliderItem}>
                    <img src={this.props.person.ImageURL} style={inlineLogo} alt="logo" className="img-responsive img-circle" />
                    <h1 style={inlineHeader}>{this.props.person.FirstName} {this.props.person.LastName}</h1>
                    <hr />
                    <p>{this.props.person.ShortDescription}</p>
                    <Button onClick={() => this.props.action(this.props.person.Id)} text={'czytaj więcej'} type={'link'} />
                </div>
    }
});