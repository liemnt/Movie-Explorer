let rootURL = 'https://api.themoviedb.org/3/';

let apiKey = "?api_key=9e6a1314bf676a83bdabc4938078e5d6";

exports.search = function (q) {
    let url = `${rootURL}search/movie${apiKey}&query=${q}`;
    console.log(url);
    return fetch(url)
        .then((resp) => resp.json())
        .then((json) => {
            return json.results;
        });
}

exports.view = function (id) {
    let url = `${rootURL}movie/${id}${apiKey}`;
    console.log('URL', url);
    return fetch(url)
        .then((resp) => resp.json());
}