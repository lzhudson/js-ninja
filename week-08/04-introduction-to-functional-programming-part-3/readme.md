# Funções
Também podemos retornar objetos, propriedades de objetos e até mesmo executar métodos de objetos que forem passados por parâmetro.

- Ex: Exibindo uma propriedade
```javascript
var car = {
	color: 'yellow'
}

function getCarColor(mycar) {
	return mycar.color;
}
```

Também podemos passar funções por parâmetro e executar a mesma:

```javascript
function showOtherFunction(func) {
	return func();
}
showOtherFunction(function() {
	return 'Functional JS Ninja!';
});
```