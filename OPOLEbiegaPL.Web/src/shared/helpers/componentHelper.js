module.exports = {
    textInputChange: function (event) {
        var returnObj;
        var stateObject = function () {
            returnObj = {};
            returnObj[this.target.id] = this.target.value;
            return returnObj;
        }.bind(event)();

        this.setState(stateObject);
    },
    enableButton: function() {
        this.setState({
            canSubmit: true
        });
    },
    disableButton: function() {
        this.setState({
            canSubmit: false
        });
    },
    expand: function () {
        this.props.actions.expand();
        this.setState({
            showAll: true
        });
    },
    collapse: function (collection) {
        this.props.actions.collapse(collection.slice(0, 5));
        this.setState({
            showAll: false
        });
    }
}