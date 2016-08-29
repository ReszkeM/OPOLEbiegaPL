import React from 'react';
import Modal from './popups/Modal';
import Styles from '../helpers/styles'
import FriendEdit from './popups/FriendEdit'

export default React.createClass({
    choosenObject: [],
    title: '',
        
    getInitialState: function() {
        if (this.props.friends.size === 0){
            this.props.setState({}, 'http://localhost:57174/api/FriendApi/GetAll', 'friends');
        }
        return null;
    },

    getFriends: function() {
        return this.props.friends || [];
    },

    editButton: function(text, model, isEditMode) {
      return <div className="form-group">
                <button className="btn btn-success btn-lg" type="submit" onClick={() => {
                    this.props.showWindow(isEditMode);
                    this.choosenObject = model;
                    this.title = text;}
                }>{text}</button>
              </div>
    },

    modalRender: function() {
      return this.props.isPopupVisible ?
              <div id="editWindow">
                  <Modal {...this.props} title={this.title} component={FriendEdit} object={this.choosenObject} />
              </div>
              : null
    },

render: function() {
        return  <div className="friends">
                    {this.getFriends().map( ([id, name, url]) =>
                        <div key={id[1]}>
                            <h1>{name[1]}</h1>
                            <img src={url[1]} style={Styles.logo} alt="logo" className="img-responsive"/>
                            { this.editButton('Edytuj', {id: id[1], name: name[1], imageURL: url[1]}, true) }
                        </div>
                    )}
                    <hr />
                    { this.editButton('Dodaj', {id: -1, name: '', imageURL: ''}, false) }
                    { this.modalRender() }
                </div>;
    }
});
