const haalUserOp = async user => response = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`);

const toonUser = async user => {
    try {
        await haalUserOp(user);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`Naam: ${data.name} \nEmail: ${data.email} \nTelefoon: ${data.phone}`);
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

toonUser(1);
toonUser(999);