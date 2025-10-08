fetch('https://pokeapi.co/api/v2/pokemon/25')
    .then(response => response.json())
    .then(pokemon => {
        console.log(`Pokemon naam: ${pokemon.name} \nGewicht: ${pokemon.weight} \nHoogte: ${pokemon.height}`);
    })
    .catch(error => {
        console.log("Er ging iets mis:", error);
    });