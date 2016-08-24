﻿import React from 'react';
import Modal from './popups/Modal';

export default React.createClass({
    choosenObject: [],

    getFriends: function() {
        return this.props.friends || [];
    },

    editButton: function(text, model) {
      return <div className="form-group">
                <button className="btn btn-success btn-lg" type="submit" onClick={() => {
                  this.props.showWindow({isPopupVisible: true});
                  this.choosenObject = model}
                }>{text}</button>
              </div>
    },

    modalRender: function() {
      return this.props.isPopupVisible ?
              <div id="editWindow">
                  <Modal {...this.props} object={this.choosenObject} />
              </div>
              : null
    },

    render: function() {
        var scope = {
            logoStyle: {
                maxHeight: '50px',
                maxWidth: '50px',
            },
        };

        return  <div className="friends">
                    {this.getFriends().map( ([id, name, url]) =>
                        <div key={id[1]}>
                            <h1>{name[1]}</h1>
                            <img src={url[1]} style={scope.logoStyle} alt="logo" className="img-responsive"/>
                            { this.editButton('Edytuj', {id: id[1], name: name[1], imageURL: url[1]}) }
                        </div>
                    )}
                    <hr />
                    { this.editButton('Dodaj', {id: -1, name: '', imageURL: ''}) }
                    { this.modalRender() }
                </div>;
    }
});
