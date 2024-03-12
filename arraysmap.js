var numeros = [1, 2, 3, 4, 5, 7, 8, 9,];

var nums = numeros.map(function (valor) {
    return valor * 2;
});
console.log(nums);

var funcionarios = [
    { nome: "Heitor", idade: 8 },
    { nome: "Helio",  idade: 18 },
    { nome: "Hilton", idade: 28 },
    { nome: "Hudson", idade: 58 },
]
nome = funcionarios.map(pessoa => pessoa.nome,idade);

console.log(nome);

/*Utilizando o reduce*/
for (var i = 0; i < numeros.length; i++){
    total = numeros[i];

}
console.log(total);

/*Formato utilizando reduce */

var tot = numeros.reduce(function (total, numeros) {
    return total + numeros;
}, 0);
console.log(tot);