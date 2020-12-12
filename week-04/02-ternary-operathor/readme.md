# Condicional Ternário
O operador ternário, substitui o if de forma mais prática ou fácil de criar um "código if".
Nele possuimos uma condição que dependendo do retorno da mesma retorna true ou false.

- Expressão:
```javascript
condicao ? true : false;
```

- Exemplos:

Com Operador Ternário:
```javascript
1 === 2 ? true : false;
// false
```
Com if:

```javascript
if(1 === 2) {
	true;
} else {
	false;
}
```

- Atribuindo Valores a variáveis:

Com Operador Ternário:
```javascript
var pessoa = {
	sexo: 'Masculino';
}
var sexo = pessoa.sexo === 'Feminino' ? 'a' : 'o';
sexo; // o
```
Com if:
```javascript
var sexo = 'o';
var pessoa = {
	sexo: 'Masculino';
}
if(pessoa.sexo === 'Feminino') {
	sexo = 'a';
}
sexo; // o
```

- Valores Truthy e Falsy

Com Operador Ternário:
```javascript
var isNumber = 1 ? 'é numero' : 'não é numero';
```
Com if:
```javascript
var isNumber;
if(1) {
	isNumber = 'é numero';
} else {
	isNumber = 'não é numero';
}
```