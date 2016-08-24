import React from 'react';

export default React.createClass({
  render: function () {
      return <div>
                  <div className="form-group row">
                      <label className="col-md-3" style={this.props.styles.labelStyle}>Nazwa: </label>
                      <div className="col-md-9">
                          <input className="form-control" id="name" type="text" defaultValue={this.props.name} onChange={this.props.handleChange} />
                      </div>
                  </div>
                  <div className="form-group row">
                      <label className="col-md-3" style={this.props.styles.labelStyle}>Obrazek: </label>
                      <div className="col-md-9">
                          <input className="form-control" id="imageURL" type="text" defaultValue={this.props.imageURL} onChange={this.props.handleChange} />
                      </div>
                  </div>
              </div>
  }
});
