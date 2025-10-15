const haalPokemonOp = async () => {
    response = await fetch('https://pokeapi.co/api/v2/pokemon/25');
}

const toonPokemon = async () => {
    try {
        await haalPokemonOp();
        const data = await response.json();
        console.log(`
            Pokemon gegevens:
            Naam: ${data.name}
            Hoogte: ${data.height}
            Gewicht: ${data.weight}
        `);
    } catch (error) {
        console.error('Er is een fout opgetreden:', error);
    }
}

toonPokemon();