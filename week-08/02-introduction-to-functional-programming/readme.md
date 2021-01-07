# Introdução a programação funcional
Funções são objetos de primeira classe ou cidadãos de primeira classe ou seja eles tem o mesmo tratamento que os objetos.

- Como são usados objetos literais:
```javascript
var car = {
	brand: 'Chevrolet',
	model: 'Onix'	
};
```
- Você pode criar também funções literais:
```javascript
function sum(a, b) {
	return a + b;
};
```
- Você pode retonar objetos a partir de funções:
```javascript
function person() {
	return {
		name: 'Hudson',
		lastName: 'Holanda'
	};
};
person(); // { name: 'Hudson', lastName: 'Holanda' }
person().name; // Hudson
person().lastName; // Holanda
```