/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 'Hudson', true, { prop: 1, propText: 'Holanda' }, [1, 3, 5]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArr(arr) {
	return arr;
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
returnArr(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnArrParameter(arr, index) {
	return arr[index];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [null, undefined, { nome: 'Hudson', sobrenome: 'Holanda' }, 'Brasil', false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
returnArrParameter(arr2, 0);
returnArrParameter(arr2, 1);
returnArrParameter(arr2, 2);
returnArrParameter(arr2, 3);
returnArrParameter(arr2, 4);


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nameBook) {
	var objBook = {
		'Uma terra prometida': {
			quantidadePaginas: 764,
			autor: 'Barack Obama',
			editora: 'Companhia das Letras'
		},
		'Os segredos da mente milionária': {
			quantidadePaginas: 192,
			autor: 'T. Harv Eker',
			editora: 'Editora Sextante'
		},
		'Elon Musk: Como o CEO bilionário da SpaceX e da Tesla está moldando nosso futuro': {
			quantidadePaginas: 416,
			autor: 'Ashlee Vance',
			editora: ' Intrínseca'
		}
	}
	return nameBook ? objBook[nameBook] : objBook;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Uma terra prometida tem ' + book('Uma terra prometida').quantidadePaginas + ' páginas!');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Uma terra prometida é ' + book('Uma terra prometida').autor + '.');


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Uma terra prometida foi publicado pela editora ' + book('Uma terra prometida').editora + '.');
