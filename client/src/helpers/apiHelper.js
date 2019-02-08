
const toJson = (data) => {
    return data.json();
};

const statusCheck = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
};

class ApiHelper {
    callApi(url, config) {
        return fetch(url, config)
            .then(statusCheck)
            .then(toJson)
            .then((data) => {
                console.log(data);
                return Promise.resolve(data);
            })
            .catch((error) => { Promise.reject(error); });
    }
}

export default new ApiHelper();