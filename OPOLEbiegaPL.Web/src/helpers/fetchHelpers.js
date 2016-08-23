var fetchGET = function(url, callback) {
    fetch(url, {
        method: 'GET',
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    }).then((response) => {
        return response.json();
    }).then(result => callback(result));
};

var fetchPOST = function(url, data, callback) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((result) => callback(result));
};

var fetchHelper = {
    fetchGET: fetchGET,
    fetchPOST: fetchPOST
};

module.exports = fetchHelper;