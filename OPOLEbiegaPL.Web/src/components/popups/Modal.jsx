import React from 'react';
import Styles from '../../helpers/styles'
import ComponentHelper from '../../helpers/componentHelper'

export default React.createClass({
  getInitialState: function() {
      return this.props.config.object;
  },

  render: function () {
      return <div>
                  <div className="modal-backdrop in"></div>
                  <div className="modal in" role='dialog' style={Styles.modalWindow}>
                      <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h2 className="modal-title" style={Styles.windowTitle}>{this.props.config.title}</h2>
                              </div>
                              <div className="modal-body">
                                  <this.props.component {...this.state} handleChange={InputHelper.textInputChange.bind(this)} />
                              </div>
                              <div className="modal-footer">
                                  <button className="btn btn-default" onClick={() => this.props.modalActions.hideWindow()}> Anuluj </button>
                                  { this.props.isEditMode ? <button className="btn btn-danger" onClick={() => this.props.actions.remove(this.state.Id, this.props.config)}> Usuń </button> : null }
                                  <button className="btn btn-primary" onClick={() => this.props.actions.save(this.state, this.props.config)}> Zapisz </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
    }
});
