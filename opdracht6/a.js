fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(joke => {
        console.log(joke.value);
    })
    .catch(error => {
        console.log("Er ging iets mis:", error);
    });