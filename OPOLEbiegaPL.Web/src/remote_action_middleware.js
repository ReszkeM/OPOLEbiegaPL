export default store => next => action => {
    console.log(action);
    if (action.meta && action.meta.remote) {
        if (action.meta.method === 'POST') {
            fetch(action.meta.url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.entry)
            });
        } 
        if (action.meta.mathod === 'GET'){
            fetch(action.meta.url, {
                method: 'GET',
                dataType: "json",
                contentType: "application/json; charset=utf-8"
            }).then((response) => {
                return response.json();
            }).then((result) => {
                // Update redux store
                return result;
            });
        }
    }
    return next(action);
}