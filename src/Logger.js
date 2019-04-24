const BASE_URL = 'http://localhost:3000/';

export default function Logger() {

    this.logIntoFile = function (arr) {
        // arr.forEach(elem => elem.id = Math.random() * 1000000);
        const url = BASE_URL + 'routes/';
        window.fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(arr)
        })
            .then(response => {
                console.log(response);
            })
    };

    this.logIntoConsole = function (arr) {
        console.log(arr);
    };
}
