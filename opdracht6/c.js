fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
        console.log(`Naam: ${user.name} \nEmail: ${user.email} \nTelefoon: ${user.phone}`);
    })
    .catch(error => {
        console.log("Er ging iets mis:", error);
    });

fetch('https://jsonplaceholder.typicode.com/users/9999')
    .then(response => {
        response.json()
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(user => {
        console.log(`Naam: ${user.name} \nEmail: ${user.email} \nTelefoon: ${user.phone}`);
    })
    .catch(error => {
        console.log("Er ging iets mis:", error);
    });
