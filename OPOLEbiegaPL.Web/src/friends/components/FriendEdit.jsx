import React from 'react';
import {label} from '../../shared/constants/styles'
import Input from '../../shared/components/inputs/Input'

export default React.createClass({
    render: function () {
      return <div>
                  <div className="form-group row">
                      <label className="col-md-3" style={label}>Nazwa: </label>
                      <div className="col-md-9">
                          <Input id="Name" value={this.props.Name} mainComponent={this.props.mainComponent} />
                      </div>
                  </div>
                  <div className="form-group row">
                      <label className="col-md-3" style={label}>Obrazek: </label>
                      <div className="col-md-9">
                          <Input id="ImageURL" value={this.props.ImageURL} mainComponent={this.props.mainComponent} />
                      </div>
                  </div>
              </div>
  }
});
