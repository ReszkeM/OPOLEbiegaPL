import {toastr} from 'react-redux-toastr'

var requestResult = function (result) {
    if(typeof (result.ContentType) === 'undefined' || result.ContentType && result.ContentType === 'Ok'){
        toastr.success('Success!', 'Operacja wykonana pomyślnie');
        return;
    } 
    if (result.ContentType && result.ContentType === "Error") {
        toastr.error('Error', result.Data);
        return;
    }
    else {
        toastr.error('Error', result.message);
        return;
    }
}

var toastrHelper = {
    requestResult: requestResult
};

module.exports = toastrHelper;