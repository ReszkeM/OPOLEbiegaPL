import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import Menu from './Menu';
import Header from './Header';

export default React.createClass({
    render: function() {
        return  <div>
                    <Menu
                        changeCurrentContent = {this.props.changeCurrentContent}
                        menuItems = {['Persons', 'Friends', 'Events', 'Announcement', 'Contact']} />
                    <Header />
                    {this.props.children} 
                </div>
    }
});
