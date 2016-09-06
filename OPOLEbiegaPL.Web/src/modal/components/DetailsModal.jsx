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
                                  <this.props.component {...this.state} />
                              </div>
                              <div className="modal-footer">
                                  <button className="btn btn-default" onClick={() => this.props.hideWindow()}> Zamknij </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
    }
});
