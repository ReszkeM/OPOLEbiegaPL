import React from 'react';
import {connect} from 'react-redux';
import Formsy from 'formsy-react';

import {title} from '../../shared/constants/styles'
import ComponentHelper from '../../shared/helpers/componentHelper'

// input components
import Button from '../../shared/components/inputs/Button'
import Input from '../../shared/components/inputs/Input'
import TextArea from '../../shared/components/inputs/TextArea'
import {Phone} from '../../shared/components/inputs/Phone';
import {Email} from '../../shared/components/inputs/Email';

//actions
import * as actionCreators from '../actions/contact_actions';

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
                                <Input name="Name" value={this.state.name} mainComponent={this} />
                            </div>
                            <div className="form-group">
                                <Email name="Email" mainComponent={this} value={this.state.email} required />
                            </div>
                            <div className="form-group">
                                <Phone name="Phone" mainComponent={this} value={this.state.phone} />
                            </div>
                            <div className="form-group">
                                <Input name="Title" value={this.state.title} mainComponent={this} />
                            </div>
                            <div className="form-group">
                                <TextArea name="Message" value={this.state.message} mainComponent={this} />
                            </div>
                            <div className="form-group">
                                <Button onClick={() => this.props.submit(this.state)} disabled={!this.state.canSubmit} text={'Wyślij'} type={'edit'} />
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
