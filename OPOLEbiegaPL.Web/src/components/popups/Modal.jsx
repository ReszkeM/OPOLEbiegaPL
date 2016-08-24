import React from 'react';

export default React.createClass({
  getInitialState: function() {
      return this.props.object;
  },

  handleChange: function(event) {
      var returnObj;
      var stateObject = function() {
          returnObj = {};
          returnObj[this.target.id] = this.target.value;
          return returnObj;
      }.bind(event)();
      this.setState( stateObject );
  },

  render: function () {
      var scope = {
          modalStyles: {
              display: 'block'
          },
          title: {
            fontWeight: 'bold'
          },
          childStyles: {
              labelStyle:{
                  fontSize: '22px'
              }
          }
      };

      return <div>
                  <div className="modal-backdrop in"></div>
                  <div className="modal in"  role='dialog' style={scope.modalStyles}>
                      <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h2 className="modal-title" style={scope.title}>{this.props.title}</h2>
                              </div>
                              <div className="modal-body">
                                  <this.props.component {...this.state} styles={scope.childStyles} handleChange={this.handleChange} />
                              </div>
                              <div className="modal-footer">
                                  <button className="btn btn-default" onClick={() => this.props.hideWindow({isPopupVisible: false})}> Anuluj </button>
                                  <button className="btn btn-primary" onClick={() => this.props.save(this.state)}> Zapisz </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
    }
});
