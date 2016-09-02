import React from 'react';
import {connect} from 'react-redux';
import Formsy from 'formsy-react';
import * as actionCreators from '../actions/contact_actions';
import {title, textArea} from '../helpers/styles'
import ComponentHelper from '../helpers/componentHelper'
import {Phone} from './inputs/Phone';
import {Email} from './inputs/Email';

export const Contact = React.createClass({
    getInitialState: function() {
        return {
            name: '',
            email: '',
            phone: '',
            title: '',
            message: ''
        };
    },

    render: function() {
        return  <div className="form-group row">
                    <div className="col-md-8 col-md-offset-2">
                        <h1 style={title}>Skontaktuj się </h1>
                        <Formsy.Form onValid={ComponentHelper.enableButton.bind(this)} onInvalid={ComponentHelper.disableButton.bind(this)}>
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" value={this.state.name} onChange={ComponentHelper.textInputChange.bind(this)} placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <Email name="email" onChange={ComponentHelper.textInputChange.bind(this)} value={this.state.email} required />
                            </div>
                            <div className="form-group">
                                <Phone name="phone" onChange={ComponentHelper.textInputChange.bind(this)} value={this.state.phone} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="title" type="text" value={this.state.title} onChange={ComponentHelper.textInputChange.bind(this)} placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="message" style={textArea} value={this.state.message} onChange={ComponentHelper.textInputChange.bind(this)} placeholder="Message" />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success btn-lg" type="submit" disabled={!this.state.canSubmit} onClick={() => this.props.submit(this.state)}>Wyślij</button>
                            </div>
                        </Formsy.Form>
                        
                    </div>
                </div>
    }
});

function mapStateToProps(state, props) {
    return {};
}

export default connect(mapStateToProps, actionCreators)(Contact);
