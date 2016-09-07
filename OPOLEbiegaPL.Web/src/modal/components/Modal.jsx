import React from 'react';
import {modalWindow, windowTitle} from '../../shared/constants/styles'
import Button from '../../shared/components/inputs/Button'
import ComponentHelper from '../../shared/helpers/componentHelper'

export default React.createClass({
    getChildContext: function() {
        return { mainComponent: this };
    },

    childContextTypes: {
        mainComponent: React.PropTypes.object
    },

    getInitialState: function() {
        return this.props.state;
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState(this.props.setObject(nextProps));
    },

    renderDetailsButtons: function(){
        return <Button onClick={() => this.props.hideWindow()} text={'Zamknij'} />
    },

    renderEditButtons: function(){
        return  <div>
                    <Button onClick={() => this.props.hideWindow()} text={'Anuluj'} />
                    <Button onClick={() => this.props.remove(this.state.Id)} text={'Usuń'} type={'remove'} isEditMode={this.props.isEditMode} />
                    <Button onClick={() => this.props.save(this.state)} text={'Zapisz'} type={'save'} />
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
                                  <this.props.component {...this.state} />
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
