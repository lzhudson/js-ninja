# Operadores Lógicos
Os operadores lógicos combinam ou eles invertem valores booleanos (verdadeiro ou falso).

Ex: **Operador && (AND)**

Vai combinar os dois valores e vai retornar se são true ou false.

Ele só retornará **true** se as duas condições são verdadeiras.
```javascript
var x = 3;
var y = 7;

x === 3 && y === 7 // true
x === 3 && y === 4 // false
```

Ex: **Operador || (OR)**

Ele retorna **true** se qualquer uma das expressões forem verdadeiras.

```javascript
var x = 3;
var y = 7;

x === 3 || y === 7 // true
x === 3 || y === 4 // true
x === 20 || y === 1000 // false
```


Ex: **Operador ! (NOT)**

O operador **not** inverte um valor boolean.

```javascript
x === 3; // true

! x === 3; // false

x === '3'; // false

!x === '3'; // false

```
