# Saltos
Saltos são alguns estados que usamos para pular partes do nosso código.
Um salto bem conhecido é o **return**.

## Return

Ex: **return**
```javascript
function myFunction() {
	var number = 10;
	if(number === 10) {
		return true;
	}
	console.log('OI');
	return false;
}
console.log(myFunction()); // true
```

O **return** de certa forma pula todas as instruções que estiverem abaixo dele.
No caso acima não temos a execução do **console.log('oi')**.

## Break
O break serve para sair de uma instrução. Muito usado na estrutura **switch**.

```javascript
var number = 10;
switch (number) {
	case 1:
		console.log('1');
		break;
	case 2: 
		console.log('2');
		break;
	case 10:
		console.log('10');
	break;
	default:
		console.log('default');
}
// 10
```

De certa forma o break encerra todas as próximas instruções.

```javascript
var number = 10;
switch (number) {
	case 1:
		console.log('1');
		break;
	case 2: 
		console.log('2');
		break;
	case 10:
		console.log('10');
	default:
		console.log('default');
}
// 10, 'default'
```

O **break** também é utilizado em instruções de laço.
```javascript
for(var i = 0; i < 10; i++) {
	if(i === 5) {
		break;
	}
	console.log(i);
}
console.log('fim do for');
// 1, 2, 3, 4, 'fim do for'
```

## Continue
O continue ao invés de sair da instrução ele passa para a próxima instrução válida.

```javascript
for(var i = 0; i < 10; i++) {
	if(i === 5) {
		continue
	}
	console.log(i);
}
console.log('fim do for');
// 1, 2, 3, 4, 6, 7, 8, 9  'fim do for'
```