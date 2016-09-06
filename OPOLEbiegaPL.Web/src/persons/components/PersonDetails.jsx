import React from 'react';

// helpers and constants
import {inlineLogo, inlineHeader} from '../../shared/constants/styles'

export default React.createClass({
    render: function () {
        return <div >
                    <img src={this.props.ImageURL} style={inlineLogo} alt="logo" className="img-responsive img-circle" />
                    <h1 style={inlineHeader}>{this.props.FirstName} {this.props.LastName}</h1>
                    <hr />
                    <p>{this.props.Description}</p>
                    <ul>
                        {this.props.Achievements.map((achievement) =>
                            <li key={achievement.Id}> {achievement.EventName} - {achievement.Distance} - {achievement.Time} </li>
                        )}
                    </ul>
                </div>
    }
});
