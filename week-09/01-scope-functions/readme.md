# Escopo de Funções
No JavaScript é permitido escrever funções dentro de outra. Nesse sentido podemos ter acesso as variáveis.

Ex: Aqui temos acesso a função sum dentro de myFunction
```javascript
function myFunction() {
	function sum() {
		return 1 + 2;
	}
	return sum();
}
console.log(myFunction());
```


Ex: Aqui tentamos executar sum que está dentro do contexto de myFunction, pois sum só existe enquanto myFunction existir ou seja, só quando a mesma está executando.
```javascript
function myFunction() {
	function sum() {
		return 1 + 2;
	}
	return sum();
}
console.log(myFunction());
console.log(sum());
```

Ex: No caso abaixo, podemos acessar as variáveis do contexto "pai" que no caso é myFunction, sendo assim podemos acessar essas variáveis. Esse conceito é chamado de clojure.
```javascript
function myFunction(){
	var number1 = 1;
	var number2 = 2;
	function sum() {
		return number1 + number2;
	}
	return sum();
}
console.log(myFunction());
```

**Clojure**: É uma função que consegue acessar parâmetros externos a ela. No caso acima **sum** tem acesso a todas as variáveis de **myFunction**.

No caso abaixo temos o seguinte funcionamento, temos a declaração da função **sum**, em seguida a declaração das variáveis **number1** e **number2** e por último a execução de **sum** que encontra os valores **number1** e **number2**, com seus valores atribuidos.
```javascript
function myFunction(){
	function sum() {
		return number1 + number2;
	}
	var number1 = 1;
	var number2 = 2;
	return sum();
}
console.log(myFunction());
```

```javascript
function myFunction(){
	var number1 = 1;
	var number2 = 2;
	return sum();
	function sum() {
		return number1 + number2;
	}
}
console.log(myFunction());
```