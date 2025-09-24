let globalVar = 10;

function modifyVar() {
    let localVar = 5;
    let innerVar = 2;
    console.log(`Inside function - localVar: ${localVar}, innerVar: ${innerVar}`);
    globalVar += localVar + innerVar;
}

modifyVar();
console.log(`Outside function - globalVar: ${globalVar}`);

// Dit geeft een error omdat localVar en innerVar niet gedefinieerd zijn buiten de functie.
// console.log(`Outside function - localVar: ${localVar}`);
// console.log(`Outside function - innerVar: ${innerVar}`);