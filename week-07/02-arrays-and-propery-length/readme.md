# Arrays
Arrays em Javascript são considerados objetos, pois possuem propriedades e métodos.

## Propriedade length
A propriedade length conta o número de itens que contem em um Array.

- Ex:
```javascript
var arr = ['Daciuk', null, true, { bola: 'azul' }, function() {}];
arr.length; // 5
```
- Ex: Percorrendo items do array automaticamente:
```javascript
var arr = ['Daciuk', null, true, { bola: 'azul' }, function() {}];
var lengthArr = arr.length;
var indice = 0;

while(indice < length) {
	console.log(arr[indice]);
	indice++;
};
// 'Daciuk', null, true, { bola: 'azul' }, [Function]
```
- Ex: Percorrendo items do array automaticamente e exbindo a propriedade de um objeto:
```javascript
var arr = ['Daciuk', null, true, { bola: 'azul' }, function() {}];
var lengthArr = arr.length;
while(lengthArr > 0) {
	console.log(arr[--lengthArr]);
	if(arr[lengthArr] === 3) {
		console.log(arr[lengthArr].bola);
	}
};
// 'Daciuk', null, true, azul, { bola: 'azul' }, [Function]
```