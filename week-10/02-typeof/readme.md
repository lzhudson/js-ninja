# Operador Typeof
O Operador **typeof**, é um operador unário que retorna o tipo do operando.

Ex:
```javascript
typeof undefined // undefined
typeof function() {} // function
typeof true // boolean
typeof 10 // number
typeof 'JS Ninja' // string
```

Qualquer outro objeto que não seja uma função ele retorna **object**.

Ex:
```javascript
typeof {} // object
typeof [] // object
typeof null // object
```

**Obs:** No caso do null, ocorre que esse é um erro de implementação do JavaScript. 

O ideal nesse caso seria somente usar o operador **typeof** em tipos primitivos.
Pois ao usar em objetos, arrays e até mesmo o proprio null temos como resposta esses tipos como object.


Uso do typeof:
````javascript
function subtraction(num1, num2) {
	if(typeof num1 === 'number' && typeof num2 === 'number') {
		return sum1 + sum2;
	}
	return 'Numeros invalidos!';
}
sum(10, 20); // 30
sum(10, {}); // Numeros invalidos
```


