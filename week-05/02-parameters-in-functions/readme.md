# Parâmetros de Funções
Além de ser possivel retornar valores primitivios e valores não primitivos, também podemos fazer com que as mesmas recebam por parâmetro valores primitivos e não primitivos.

Ex:

```javascript
var arr = [1, 2, 3];
function myFunction(arg) {
	return arg;
}
myFunction(); // undefined
myFunction(arr); // [1, 2, 3]
myFunction(['Hudson', 1, null, undefined]); // ['Hudson', 1, null, undefined]
```

```javascript
var arr = [1, 2, 3];
function myFunction(arg) {
	return arg[1];
}
myFunction(arr); // 2
myFunction([1, 5, 7, 8]); // 5
```

```javascript
var obj = {
	propriedade: 'Hudson',
	curso: 'Javascript Ninja',
	ninja: true
}
function myFunction(arg){
	return arg;
}
myFunction(obj); // { propriedade: 'Hudson', curso: 'Javascript Ninja', ninja: true }
myFunction(obj).ninja; // true
myFunction(obj).propriedade; // Hudson
myFunction(obj).curso; // Javascript Ninja 
```

```javascript
var obj = {
	propriedade: 'Hudson',
	curso: 'Javascript Ninja',
	ninja: true
}
function myFunction(arg){
	return arg.curso;
}
myFunction(obj); // Javascript Ninja
```
