import {toastr} from 'react-redux-toastr'

var requestResult = function (result) {
    if(result.ok){
        toastr.success('Success!', 'Operacja wykonana pomyślnie');
    } else {
        toastr.error('Error', result.message);
    }
}

var toastrHelper = {
    requestResult: requestResult
};

module.exports = toastrHelper;