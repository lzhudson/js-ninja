# Estrutura de Repetição While
Basicamente são instruções que realizam uma serie de ações repetitivas e param quando atendem uma determinada condição.

- Ex: While
```javascript
var counter = 0;

while(counter < 10) {
	console.log(counter);
	counter++;
}

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

Basicamente ele faz com que enquanto a variável counter for menor do que o numeral dez, ele executará esse bloco de código ou seja enquanto a condição for verdadeira, após isso ele encerra.

**Obs:** Toda estrutura deve ter ponto de parada seja pela finalização da condição negativando a mesma ou com o uso da palavra reservada **break**.

A instrução avaliada no while sempre será um valor booleano. Nesse caso podemos também testar com os valores Truthy e Falsy).

- Ex: While
```javascript
var counter = 10;
while(counter > 0) {
	console.log(counter--);
}

// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
```

- Ex: While
```javascript
var counter = 10;
while(counter--) {
	console.log(counter);
}

// 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
```