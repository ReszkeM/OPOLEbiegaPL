module.exports = {
    textInputChange: function (event) {
        var returnObj
        var stateObject = function () {
            returnObj = {};
            returnObj[this.target.id] = this.target.value;
            return returnObj;
        }.bind(event)();

        this.setState(stateObject);
    }
}