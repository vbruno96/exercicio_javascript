/* Recebe um numero e retorna no console se é par ou ímpar */
function ePair(num) {
    console.log('*** Exercicio 1 ***');
    num % 2 == 0 ? console.log(`O ${num} é par!`) : console.log(`O ${num} é ímpar!`);
}

/* Recebe um numero e retorna no console se é primo */
const isPrime = (num) => {
    console.log('*** Exercicio 2 ***');
    for(let i = 2; i < num; i++)
      if(num % i == 0) {
          return false
      };
    return num > 1;
}


/* Imprime de 10 a 1 e depois retorna feliz ano novo callback */
const contRegressiva = (callback) => {
    console.log('*** Exercicio 3 ***');
    for(let c = 10; c >= 1; c--){
        console.log(c);
    }
    callback();
}

const anoNovo = () => {
    console.log('Feliz Ano Novo!!!');
}

/* Imprime de 10 a 1 e depois retorna feliz ano novo promisse */
const promisseCountRegressive = () => {
    console.log('*** Exercicio 4 ***');
    return new Promise((resolve) => {
        for(let c = 10; c >= 1; c--){
            console.log(c);
        }
        resolve();
    });
}
promisseCountRegressive().then(() => {
    console.log('Feliz Ano Novo!!!');
});

/* Imprime de 10 a 1 e depois retorna feliz ano novo async */
const syncRegressive = () => {
    for(let c = 10; c >= 1; c--){
        console.log(c);
    }
}

const syncAnoNovo = async () => {
    console.log('*** Exercicio 5 ***');
    await syncRegressive();
    console.log('Feliz Ano Novo!!!');
}


/* array de notas e função para imprimir as notas maiores que 7 */
const notas = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7];
const printAbove7 = (notas) => {
    console.log('*** Exercicio 6 ***');
    for(let c = 0; c < notas.length; c++) {
        notas[c] > 7 ? console.log(notas[c]) : null;
    }
};

/* array de produtos e função de somar o total */
const produtos = [
    {
        cod: 01,
        name: "Café",
        value: 1.5
    },
    {
        cod: 02,
        name: "Pão de Queijo",
        value: 2
    },
    {
        cod: 03,
        name: "Broa de Fubá",
        value: 2.5
    }
];
const sumTotal = (produtos) => {
    console.log('*** Exercicio 7 ***');
    let total = 0;
    for(let c = 0; c < produtos.length; c++) {
        total += produtos[c].value;
    }
    console.log(total);
}

/* array e função de retornar a diciplina dos alunos na quarta feira */
const alunos = [
    {
        cod: 01,
        firstName: "Bruno",
        lastName: "Vinícius",
        serie: 9
    },
    {
        cod: 02,
        firstName: "Kauan",
        lastName: "Batista",
        serie: 8
    },
    {
        cod: 03,
        firstName: "Matheus",
        lastName: "Aguiar",
        serie: 9
    },
    {
        cod: 04,
        firstName: "Caiki",
        lastName: "Luís",
        serie: 8
    },
    {
        cod: 05,
        firstName: "Heloísa",
        lastName: "Pereira",
        serie: 9
    },
    {
        cod: 06,
        firstName: "Carlos",
        lastName: "Henrique",
        serie: 8
    },
];
const setDiscipline = (alunos) => {
    console.log('*** Exercicio 8 ***');
    alunos.map((aluno) => {
       switch(aluno.serie) {
            case 9:
                aluno.disipline = "Física"
                break;
            case 8:
                aluno.disipline = "História"
                break;
            default:
                return null;
       } 
    });
    console.log(alunos);
}

const easterEgg = () => {
    console.log('*** May the force be with you! ***');
}