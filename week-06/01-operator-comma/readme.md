# Operador Vírgula
O operador vírgula vai separar algumas instruções e vai juntar em uma única expressão.

- Ex: Declaração de variáveis
```javascript
var a, b = 2, c;
```
O código acima é equivalente a instrução abaixo:
```javascript
var a;
var b = 2;
var c;
```
- Ex: Usando em funções:
```javascript 
function myFunc() {
	var x = 0;

	return (x += 1, x);
}

myFunc(); // 1
```

# Estruturas Condicionais (Switch)
O Switch é um tipo de estrutura condicional onde passamos um valor por parâmetro e esse valor é avaliado de acordo com alguns casos, onde prevalece o uso do operador de igualdade estrito (===), que avaliamos o valor e o tipo. Nele também há o uso da palavra reservada **break**, que determina o encerramento de um bloco de código. Por ultimo também temos o a instrução **default**, que caso nenhuma das condições se satisfaça por padrão ele executará aquele bloco de código.

- Ex:
```javascript
function myFunc(x) {
	switch(x) {
		case 1:
			console.log('x é 1');
			break;
		case 2:
			console.log('x é 2');
		break;
		default:
			console.log('x não é 1 e nem 2');
	}
}
myFunc(); // x não é 1 e nem 2
myFunc(1); // x é 1
myFunc(2); // x é 2
```
**Obs:** No default não somos obrigado a colocarmos o break, pois por convenção o default sempre vem por ultimo após todos os outros casos de comparação e geralmente não há nenhum caso de comparação após o mesmo.

- Ex: Sem o uso do break
```javascript
function myFunc(x) {
	switch(x) {
		case 1:
			console.log('x é 1');
			break;
		case 2:
			console.log('x é 2');
		default:
			console.log('x não é 1 e nem 2');
	}
}
myFunc(); // x não é 1 e nem 2
myFunc(1); // x é 1
myFunc(2); // x é 2, x não é 1 e nem 2
```