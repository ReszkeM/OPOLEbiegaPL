import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import Styles from '../helpers/styles'
import InputHelper from '../helpers/inputHelpers'

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
                        <h1 style={Styles.title}>Skontaktuj się </h1>
                        <div className="form-group">
                            <input className="form-control" id="name" type="text" value={this.state.name} onChange={InputHelper.textInputChange.bind(this)} placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="email" type="text" value={this.state.email} onChange={InputHelper.textInputChange.bind(this)} placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="phone" type="text" value={this.state.phone} onChange={InputHelper.textInputChange.bind(this)} placeholder="Phone" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="title" type="text" value={this.state.title} onChange={InputHelper.textInputChange.bind(this)} placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="message" style={Styles.textArea} value={this.state.message} onChange={InputHelper.textInputChange.bind(this)} placeholder="Message" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success btn-lg" type="submit" onClick={() => this.props.submit(this.state)}>Wyślij</button>
                        </div>
                    </div>
                </div>
    }
});

function mapStateToProps(state, props) {
    return {};
}

export default connect(mapStateToProps, actionCreators)(Contact);
