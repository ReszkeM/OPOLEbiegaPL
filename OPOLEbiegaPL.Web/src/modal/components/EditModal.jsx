import React from 'react';
import {modalWindow, windowTitle} from '../../shared/constants/styles'
import ComponentHelper from '../../shared/helpers/componentHelper'

export default React.createClass({
    getInitialState: function() {
        return this.props.state;
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState(this.props.setObject(nextProps));
    },

    render: function () {
        return <div>
                  <div className="modal-backdrop in"></div>
                  <div className="modal in" role='dialog' style={modalWindow}>
                      <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h2 className="modal-title" style={windowTitle}>{this.props.title}</h2>
                              </div>
                              <div className="modal-body">
                                  <this.props.component {...this.state} handleChange={ComponentHelper.textInputChange.bind(this)} />
                              </div>
                              <div className="modal-footer">
                                  <button className="btn btn-default" onClick={() => this.props.hideWindow()}> Anuluj </button>
                                  { this.props.isEditMode ? <button className="btn btn-danger" onClick={() => this.props.remove(this.state.Id)}> Usuń </button> : null }
                                  <button className="btn btn-primary" onClick={() => this.props.save(this.state)}> Zapisz </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
}
});
