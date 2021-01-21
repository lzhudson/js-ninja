# Hoisting
O efeito de hoisting (içamento ou elevação), esse processo move as variaveis e funções para o topo do código

**Obs**: Funções anônimas só recebem a função no momento da sua atribuição. A função literal é movida para o topo do código.

Ex: 
```javascript
function myFunction() {
	var number1 = 1;
	var number2 = 2;
	return sum();
	function sum() {
		return number1 + number2;
	}
}
```
No momento da execução do código acima temos a seguinte transformação:
```javascript
function myFunction() {
	function sum() {
		return number1 + number2;
	}
	var number1 = 1;
	var number2 = 2;
	return sum();
}
```

Em casos de funções anônimas temos o seguinte funcionamento:
```javascript
function myFunction() {
	var number1 = 1;
	var number2 = 2;
	return sum();
	var sum = function sum() {
		return number1 + number2;
	}
}
console.log(myFunction()); // sum is not defined
```

No caso acima temos o seguinte erro, pois a variável **sum** só recebe a função depois da sua execução, por se tratar de uma função anônima o efeito de hoisting funciona como o das variáveis normalmente.

Com variáveis funciona da mesma forma:
```javascript
function myFunction() {
	console.log('ANTES DE DECLARAR', number1);
	var number1 = 10;
	console.log('DEPOIS DE DECLARAR', number1);
}
console.log(myFunction());
// 'ANTES DE DECLARAR', undefined
// 'DEPOIS DE DECLARAR', 10
```
Repare que a variável **number1**, existe porém ela só recebe seu valor de verdade na sua linha de atribuição. Ele inicializa a variável no topo como undefined.

Nesses casos o ideal é sempre declararmos as variáveis e funções no topo do código, seja no escopo global ou local (dentro de funções e etc).