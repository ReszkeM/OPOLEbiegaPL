import React from 'react';
import Styles from '../../helpers/styles'
import InputHelper from '../../helpers/inputHelpers'

export default React.createClass({
  getInitialState: function() {
      return this.props.object;
  },

  render: function () {
      return <div>
                  <div className="modal-backdrop in"></div>
                  <div className="modal in" role='dialog' style={Styles.modalWindow}>
                      <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h2 className="modal-title" style={Styles.windowTitle}>{this.props.title}</h2>
                              </div>
                              <div className="modal-body">
                                  <this.props.component {...this.state} handleChange={InputHelper.textInputChange.bind(this)} />
                              </div>
                              <div className="modal-footer">
                                  <button className="btn btn-default" onClick={() => this.props.hideWindow()}> Anuluj </button>
                                  { this.props.isEditMode ? <button className="btn btn-danger" onClick={() => this.props.remove(this.state.id)}> Usuń </button> : null }
                                  <button className="btn btn-primary" onClick={() => this.props.save(this.state)}> Zapisz </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
    }
});
