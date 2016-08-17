import React from 'react';

export default React.createClass({
    getMenuItems: function() {
        return this.props.menuItems || [];
    },
    render: function() {
        return <div className="menu">
          {this.getMenuItems().map(entry =>
              <div key={entry}>
              <h1>{entry}</h1>
            </div>
        )}
      </div>;
}
});