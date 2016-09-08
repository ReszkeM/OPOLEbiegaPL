import React from 'react';
import MediaQuery  from 'react-responsive';
import {MenuItems} from '../constants/menu_items'
import {navbar, dropdown, dropbtn, dropdownContent, menuItems} from '../constants/styles'
import Button from './inputs/Button'

export default React.createClass({
    getInitialState: function() {
        return {
            isDropdownExpand: false
        }
    },

    dropdownAction: function() {
        this.setState({
            isDropdownExpand: !this.state.isDropdownExpand
        })
    },

    renderNormalMenu: function() {
        return  <nav className="navbar navbar-default" style={navbar}>
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            {MenuItems.map(entry =>
                                <li key={entry.key}><a href={'#/' + entry.key}>{entry.value}</a></li>
                            )}
                        </ul>
                    </div>
                </nav>
    },

    renderMobileMenu: function() {
        return  <div className="dropdown" style={dropdown}>
                    <Button styles={dropbtn} type="none" text="MENU " icon="glyphicon glyphicon-menu-hamburger" onClick={this.dropdownAction} />
                    { this.state.isDropdownExpand === true ? this.renderDropdown() : null }
                </div>
    },

    renderDropdown: function() {
        return  <div style={dropdownContent}>
                     <div className="container-fluid">
                        <ul className="nav navbar-nav" style={menuItems}>
                            {MenuItems.map(entry =>
                                <li style={menuItems} key={entry.key}><a href={'#/' + entry.key} onClick={this.dropdownAction}>{entry.value}</a></li>
                            )}
                        </ul>
                    </div>
                </div>
    },

    selectMenuTooRender: function() {
        console.log(this.state)
        return  <div>
                    <MediaQuery minWidth={920}>
                        { this.renderNormalMenu() }
                    </MediaQuery>
                    <MediaQuery maxWidth={920}>
                        { this.renderMobileMenu() }
                    </MediaQuery>
                </div>
    },

    render: function() {
        return this.selectMenuTooRender()
    }
});
