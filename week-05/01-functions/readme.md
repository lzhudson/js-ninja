# Funções
As funções assim como os objetos são de grande importância no core do Javascript.

## Retorno de Funções (indo além dos tipos primitivos)
Nas funções podemos também ter diversos tipos de retorno além dos tipos primitivos.

- Retorno de funções com tipos primitivios;
```javascript
function myFunction() {
	return 1;
}
```
```javascript
function myFunction() {
	return 'string';
}
```
```javascript
function myFunction() {
	return true;
}
```
```javascript
function myFunction() {
	return null;
}
```

- Retorno de funções com outros tipos:

Nas funções podemos retornar diversos tipos além dos primitivos

- Retornando um array:
```javascript
function myFunction() {
	return [1, 2, 3];
}
myFunction(); // [1, 2 ,3]
myFunction()[0]; // 1
myFunction()[1]; // 2
myFunction()[2]; // 3
```

- Retornando um objeto:
```javascript
function myFunction() {
	return {
		prop1: 1,
		prop2: 'Hudson',
		prop3: function() {
			return 'prop3';
		}
	}
}
myFunction(); // { prop1: 1, prop2: 'Hudson', prop3: [Function] }
myFunction().prop1; // 1
myFunction().prop2; // Hudson
myFunction().prop3(); // 'prop3' 
```
