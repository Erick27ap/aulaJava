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
// let titulo = document.getElementById('titulo');
// window.alert(titulo.innerHTML)
// console.log(titulo);
// let novoTitulo = 'Professor Adolfo você buga meu sistema!'
// titulo.innerHTML = novoTitulo;
let userValue = ''
function handleChangeUser(event){
   // conssole.log('aqui')
    console.log(event.target.value)
    userValue = event.target.value
}
console.log(userValue);

//selecionar elementos com a mesma tag
let textDefault = document.getElementsByClassName('text defalt');
console.log(textDefault);
//seleciona elementos por nome da tag
let tagElements = document.getElementsByTagName('h1')
console.log(tagElements);
//seleciona elementos por valor do atributo nome da tag
let nameArtElements =document.getElementsByName('section');
console.log(nameArtElements);

let paragrafo = document.querySelector('p.text-default');
console.log(paragrafo);
let paragrafos = document.querySelectorAll('p');
console.log(paragrafos);
//manipular classes de um helemento
let tituloVermelho = document.querySelector('h1.vermelho');
tituloVermelho.classList.remove('vermelho');
tituloVermelho.classList.add('verde');

tituloVermelho.style.fontSize = '60px';
tituloVermelho.style.backgroundColor = '#000';
tituloVermelho.style.display = 'flex';
tituloVermelho.style.justifyContent = 'center';
tituloVermelho.style.height = '100px';

let btnUp = document.querySelector('#btnUp');   
console.log(btnUp);
btnUp.addEventListener('click', function(event){
    console.log('Toca aqui')
    let paragrafo = document.querySelector('p.text-default');
    console.log(paragrafo)
//pegar valores do estilo de um elemento
    let fontSizeAtual = getComputedStyle(paragrafo).fontSize;
    //converter string para numero decimal
    fontSizeAtual = parseFloat(fontSizeAtual);
    fontSizeAtual += 1; //incrementar mais um
    console.log(fontSizeAtual);
    paragrafo.style.fontSize = `${fontSizeAtual}px`;
})
let btnDonw = document.querySelector('#btnDonw');   
console.log(btnDonw);
btnDonw.addEventListener('click', function(event){
    console.log('Toca aqui')
    let paragrafo = document.querySelector('p.text-default');
    console.log(paragrafo)
//pegar valores do estilo de um elemento
    let fontSizeAtual = getComputedStyle(paragrafo).fontSize;
    //converter string para numero decimal
    fontSizeAtual = parseFloat(fontSizeAtual);
    fontSizeAtual -= 1; // diminuir um
    console.log(fontSizeAtual);
    paragrafo.style.fontSize = `${fontSizeAtual}px`;
})

//botão soma
let btnSoma = document.querySelector('#btnSoma');
console.log(btnSoma);
btnSoma.addEventListener('click', function(event){
    console.log('mais mais, baby');

    let num1 = document.querySelector('#num1');
    console.log(num1.value);//para validar a informação que está incluindo no input
    let num2 = document.querySelector('#num2');
    console.log(num2.value);

    let umN = parseFloat(num1.value); //convertendo para numero flutuante/quebrado
    let doisN = parseFloat(num2.value);
    let final = umN + doisN

    let pe =  document.querySelector('#pe');
    pe.innerHTML = final;
})
