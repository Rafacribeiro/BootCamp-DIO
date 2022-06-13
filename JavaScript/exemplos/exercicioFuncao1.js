const alunos = [
    {
        nome: 'Angela',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Carla',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Bruno',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Fábio',
        nota: 3,
        turma: '2C',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.lenght; i++){

        const { nota, nome } = arr[i];

        if(nota >= media) {
        aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));