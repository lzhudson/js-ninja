# Funções
Funções são blocos de código Javascript nomeados, e que podem ser invocados usando o operador **()**.
Podemos reutilizar esses códigos, o que nos ajuda no reaproveitamento englobando algumas instruções em uma simples chamada.

## Criando funções
Para criarmos funções usamos a palavra reservada **function**, em seguida o nome dela, ademais os **()** e por últimos as chaves que englobam o corpo da função.

Ex:
```javascript
function nome() {}
nome() // undefined
nome // [Function nome]
```
**Obs:** Lembre-se para executarmos uma função prescisamos usar o **()**, sem isso ele retorna apenas que aquele valor é uma função.

No exemplo abaixo estamos colocando instruções no corpo da função.

Ex: 
```javascript
var x = 1;
function soma() {
	x = x + 1;
}
soma();
x; // 2
soma();
x; // 3
```

## Funções criam escopo
Escopo são contextos delimitados nos quais os valores e expressões declarados dentro do mesmo só são acessiveis ali.

Temos dois tipos de escopo, o global que geralmente é acessível por qualquer outro contexto e o local que só é acessivel dentro do mesmo, onde é delimitado na maioria das vezes pelas **{}**.

Ex: **Escopo Global**
```javascript
var x = 20;
function exibeNumero() {
	console.log(x);
}
exibeNumero(); // 20
```

Nota-se que acima a função **exibeNumero**, consegue ter acesso a variavel **x** que não pertence ao seu escopo mas por estar contextualizada no escopo global, ela permite tal acesso.


Ex: **Escopo Local**
```javascript
function exibeNome() {
	var nome = 'Hudson';
}
nome; // is not defined
```

Nota-se que acima estamos tentando acessar um valor que pertence ao escopo local da função **exibeNome**.

Mesmo se executarmos a função o valor só será atribuido no tempo de execução da mesma.

Para acessarmos um valor de dentro de uma será necessário utilizar a palavra reservada **return**, onde as funções podem retornar valores.

Ex: **Retornando Valores**
```javascript
function exibeNome() {
	var nome = 'Hudson';
	return nome;
}
exibeNome(); // Hudson
```

Ex: **Utilizando funções em expressões**
```javascript
var y = 4;
function cinco() {
	return 5;
}
y + cinco(); // 9
```

Funções também podem receber argumentos e parâmetros.

**Argumentos:** Declaramos na função.

**Parâmetros:** Passamos para a função.

```javascript
function soma(x, y) {
	return x + y;
}
soma(); // NaN
soma(1, 2); // 3
``` 

