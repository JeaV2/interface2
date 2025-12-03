function rekenUit(a, b, functie) {
    let resultaat = a + b;
    return functie(resultaat);
}

const keerTwee = (x) => x * 2;

console.log(rekenUit(3, 4, keerTwee));