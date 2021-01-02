# Função Push nos Arrays	
A função push(empurrar) adiciona um item ao final do array.
Por padrão ela sempre retorna o tamanho do array após a adição do item.

- Ex: Adicionando itens no fim do Array
```javascript
var listNumbers = [1, 2, 3, 4, 5, 6];
listNumbers.push(7);
listNumbers; // [1, 2, 3, 4, 5, 6, 7]; 
```

```javascript
var items = [1, null, undefined, 'Hudson'];
items.push(function soma(a, b) { return a + b });
items; // [1, null, undefined, 'Hudson', [Function: soma]] 
```

# Estrutura de repetição For
Assim como a estrutura de repetição while tem a mesma função de executar um loop.
Nesse caso ele conta com uma sintaxe um pouco diferente.

- Sintaxe:
```javascript
for(initilization; condition; final expression;) {

}
```

- Ex:
```javascript
for(var num = 1; num < 5; num++) {
	console.log(num);
}
// 1, 2, 3, 4
```

- Ex:
```javascript
for(var num = 0; num < 20; num++) {
	if(num % 2 === 0) {
		console.log(num);
	}
}
// 0, 2, 4, 6, 8, 10, 12, 14, 16, 18
```