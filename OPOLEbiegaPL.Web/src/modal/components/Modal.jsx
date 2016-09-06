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

    renderDetailsButtons: function(){
      return <button className="btn btn-default" onClick={() => this.props.hideWindow()}> Zamknij </button>
    },

    renderEditButtons: function(){
      return <div>
                <button className="btn btn-default" onClick={() => this.props.hideWindow()}> Anuluj </button>
                {this.props.isEditMode ? <button className="btn btn-danger" onClick={() => this.props.remove(this.state.Id)}> Usuń </button> : null}
                <button className="btn btn-primary" onClick={() => this.props.save(this.state)}> Zapisz </button>
            </div>
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
                                  <this.props.component {...this.state} handleChange={this.props.isAdminMode ? ComponentHelper.textInputChange.bind(this) : null} />
                              </div>
                              <div className="modal-footer">
                                  {this.props.isAdminMode ? this.renderEditButtons() : this.renderDetailsButtons()}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
}
});
