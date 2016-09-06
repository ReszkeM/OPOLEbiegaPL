module.exports = {
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