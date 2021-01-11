# Funções
No Javascript podemos ter uma função que retorna outra função.

- Exemplo:
```javascript
function adder(x) {
	function addOTher(y) {
		return x + y;
	}
	return addOTher;
}
```
No caso acima, ao executarmos a função temos o seguinte resultado:

- Exemplo:
```javascript
var add = adder(2);
console.log(add); // [Function: addOther]
add(3); // 5
```

- Exemplo 2:
```javascript
adder(20)(10); // 30
```