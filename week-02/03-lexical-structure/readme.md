# Estrutura Léxica
Podemos entender Estrutura léxicos como um conjunto de regras que vai definir de que modo ou de que forma você irá escrever nessa linguagem. Tais regras especificam como definir variáveis, fazer comentários, criar funções, usar tipos de caracteres, entre outras coisas. Ou seja, vai dar toda a estrutura da linguagem.

## Case Sensitive
O Javascript é Case Senstive, onde diferencia letras maiusculas de minusculas.

Ex: **Declaração de Variáveis**
```javascript
var animal = 'cachorro';
var Animal = 'macaco';

animal; // cachorro
Animal; // macaco
```

## Comentários
Comentários são usados para dizer o que está sendo feito naquele momento.

- De Linha - //
- De bloco - /\*\*/

Ex: **Comentários**
```javascript
// a variavel animal é igual a cachorro
var animal = 'cachorro';
```

Ex: **Comentários de Linha**
```javascript
// uma linha
// outra linha
// mais uma linha
```
Ex: **Comentários de Bloco**
```javascript
/*
* Comentário de Bloco 1
* Comentário de Bloco 1
* Comentário de Bloco 1
* Comentário de Bloco 1
*/

```

**Obs:** Comentários são ignorados pelo javascript.


## Literais
São valores que aparece no core do Javascript, que são nativos.

Ex: **Literais**
```javascript
12; // 12
1.2; // 1.2
'ninja'; // ninja
true; // true
{ a: 1 }; // { a: 1}
```

## Identificadores
São nomes, ou seja formas de nomearmos nossas variáveis e funções.

Elas podem inicar com:
- _ ou $
- letras de a a z
- letras de A a Z
- digitos de 0 a 9
- caracteres unicode (mas não deve)

**Obs:** Você pode utilizar as variantes acima, porém mas não deve usar, pois dependendo de onde vá parar seu código, pode haver interferência de acordo com o caracter.

## Palavras Reservadas
São palavras de dentro do próprio core do Javascript, onde não podemos utilizar as mesmas para declarar funções ou váriaveis.

# Fontes:
[Um pouco sobre a Estrutura Léxica do JavaScript](https://medium.com/solu%C3%A7%C3%B5es-freecodecamp/um-pouco-sobre-a-estrutura-l%C3%A9xica-do-javascript-5de80012966f#:~:text=O%20que%20%C3%A9%20estrutura%20l%C3%A9xica,de%20caracteres%2C%20entre%20outras%20coisas)

[Grámatica léxica](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#Palavras-chave)

[Palavras Reservadas](https://www.w3schools.com/js/js_reserved.asp)