console.log('link correto')//imprime a mensagem no console
// document -> pagina web <body>
// window -> janela do navegador

//Em programação tudo é manipulado com variaveis 

//variaveis
var idade = 24;
var idadeStr = 'vinte e quatro anos'; //aspas simples ou dupla indica valor texto, uma string
var peso = [1, 2, 3, 4, 5]//array vetor
var pessoa = {
    nome: 'Erick',
    idade: 24,
    peso: 61
}//JSON representação de objetos
var isMestre = true; //bolean = true | false

let numero = 10;  //reserva o nome da variavel a tornando unica
const _pi = 3.14; //variavel que não muda nem se repete

console.log(_pi);
numero = 20;
console.log(numero);
console.log(typeof idade)
console.log(typeof idadeStr)
console.log(typeof peso)
console.log(typeof pessoa)
console.log(typeof isMestre)
console.log(Array.isArray(peso))
idade = '24';
console.log(typeof idade)
numero = 'Meu Numero';
console.log(numero)

//manipulação de Strings
let frase = 'Aprender JavaScript com o professor Adolfo é divertido, para ele! para gente intrigante';
console.log('Frase original: ', frase);
//length - retorna o tamanho da string
console.log('tamanho da frase: ', frase.length);
//converter todos os caracteres em maiusculo
console.log('Maiusculo: ', frase.toUpperCase());
//convete todos os caracteres em minusculo
console.log('Minusculo: ', frase.toLocaleLowerCase());
//retorna o caracter de uma determinada posição
console.log('Caracter posição 9: ', frase.charAt(9));
//retorna a primeira posição de uma substring ou -1 se não encontrar
console.log('Posicao Erick: ', frase.indexOf('Erick'));
console.log('Posicao de Python: ', frase.indexOf('Python'));
//retorna verdadeiro ou falso se contem substring
console.log('Contem substring divertido: ', frase.includes('divertido'))
console.log('Contem substring Python: ', frase.includes('Python'))
//extrai uma parte da string entre indices
console.log('Substring(9, 19): ', frase.substring(9, 19));
//mesma coisa que substring porem aceita valores negativos
console.log('Slice (-11, -1): ', frase.slice(-11, -1));
//substitui a primeira ocorrencia de uma substring
console.log('Subistituir javascript por Python: ', frase.replace('Javascript', 'Python'));
//substitui todas as ocorrencias de uma substring
console.log('Substituir todos os e por 3: ', frase.replaceAll('e', '3'));
//divide a strig em um vetor com base emum separados
console.log('Dividir por espaços: ', frase.split(" "));
//verifica se a string começa com uma determinada substring
console.log('Começa com aprender: ', frase.startsWith('Aprender'));
//verifica se a string termina com dererminada substring
console.log('Termina com !: ', frase.endsWith('!'));
//concatena duas ou mais strings//é juntar 
console.log('Concatenar: ', frase.concat(' vamos continuar!'));
//outra forma de concatenar (forma mais usada)
frase = 'Concatenar' + frase + 'concatenar final';
console.log('Frase concatenada:  ',frase);
//remove espaços em branco no inicio e no fim
console.log('Remove espaços em branco: ', frase.trim());
//template literais ou template strings
let nome = 'Erick'
let saudacao = ` Olá, meu nome é ${nome} e eu tenho ${idade} anos. `;
console.log('template string: ', saudacao);
let poema = `
    Rosas são vermelhas,
    Violetas são azuis,
    JavaScript é divertido,
    E vocês também!
    `
console.log(poema);

//manipular numbers

let meuNumero = 123.45678;
console.log('Numero original: ', meuNumero);
//formata o numero com um numero fixo de casas decimais
console.log("Com 2 casas decimais: ",meuNumero.toFixed(2));
//formata o numero com um total de digitos significativos
console.log('Precisão de 5 digitos: ', meuNumero.toPrecision(5));
//converte um numeo no formato string para inteiro
console.log('Converte string em inteiro: ', parseInt('10'));
//converte um numero no formato sring em float(decimal)
console.log('Converte string em float(decimal: ', parseFloat('10.22'));
//converte numero em string
console.log('Numero em string: ', meuNumero.toString());
//ou
console.log('Numero em string: ', '' + meuNumero);
//gera um numero aleatório entre 0 e 1 (exclusivo)
console.log('Numero aleatorio: ', Math.random());
//numero aleatorio de 1 a 10
console.log('Aleatorio de 1 a 10: ', Math.floor(Math.random() * (10 - 1 + 1)) + 1);

//manipular tags html
let titulo = document.getElementById('titulo');
window.alert(titulo.innerHTML)
console.log(titulo);
let novoTitulo = 'Professor Adolfo você buga meu sistema!'
titulo.innerHTML = novoTitulo;

function handleChangeUser(event){
   // conssole.log('aqui')
    console.log(event.target.value)
}
console.log(userValue)