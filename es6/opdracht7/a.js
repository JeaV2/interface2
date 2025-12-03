const haalGrapOP = async () => {
    response = await fetch('https://api.chucknorris.io/jokes/random');
}

const toonGrap = async () => {
    try {
        await haalGrapOP();
        const data = await response.json();
        console.log(data.value);
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

toonGrap();