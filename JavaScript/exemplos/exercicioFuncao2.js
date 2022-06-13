function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} anos de idade.`;
}
const pessoa1 = {
    nome: "Ana",
    idade: 35,
};
const pessoa2 = {
    nome: "Claudia",
    idade: 50,
};
const animal = {
    nome:"Amora",
    idade: 1,
    raça: "yorkshire"
}

console.log(calculaIdade.call(pessoa2, 30))