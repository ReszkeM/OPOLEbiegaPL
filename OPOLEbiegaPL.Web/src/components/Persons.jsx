import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Persons = React.createClass({
    getPersons: function() {
        return this.props.persons || [];
    },
    getParam: function(entry, paramName) {
        return entry.get(paramName)
    },

    render: function() {
        return  <div className="persons">
                    {this.getPersons().map(entry =>
                        <div key={this.getParam(entry, 'LastName')}>
                            <h1>{this.getParam(entry, 'FirstName')} {this.getParam(entry, 'LastName')}</h1>
                            <p>{this.getParam(entry, 'Description')}</p>
                        </div>
                    )}
                </div>;
    }
});

function mapStateToProps(state, props) {
    return {
        isPopupVisible: state.app.get('isPopupVisible'),
        isEditMode: state.app.get('isEditMode'),
        persons: state.app.get('persons').valueSeq()
    };
}

export default connect(mapStateToProps, actionCreators)(Persons);