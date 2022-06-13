function calculadora() {
    const operacao =Number(prompt('Escolha uma operação:\n 1 - soma(+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 -Potenciação (**)'));

    if (!operacao || operacao >= 7){
        alert('Erro - operação inválida!')
        calculadora();
    }else{ 
        let n1 = Number(prompt('Insira o primeiro valor:'))
        let n2 = Number(prompt('Insira o segundo valor:'))
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos!')
            calculadora();
        }else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtração() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicação() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisãoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisãoInteira() {
                resultado = n1 % n2;
                alert(`o resta da divisão entre ${n1} e ${n2} e igual a ${resultado}`);
                novaOperacao();
            }
            function potenciação() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
                novaOperacao();
            }
    
            function novaOperacao() {
                let opcao = prompt("Deseja fazer outra operação?\n 1 -sim\n 2 -não\n")
                if (opcao == 1){
                    calculadora();
                }else if (opcao == 2){
                    alert('Até mais!')
                }else {
                    alert('Digite uma opção válida')
                    novaOperacao();
                }
            }
        }

        switch (operacao) {
            case 1:
            soma();
            break;
            case 2:
            subtração();
            break;
            case 3:
            multiplicação();
            break;
            case 4:
            divisãoReal();
            break;
            case 5:
            divisãoInteira();
            break;
            case 6:
            potenciação();
            break;
        }

    }
};

calculadora();