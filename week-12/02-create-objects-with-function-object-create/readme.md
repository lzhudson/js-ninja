# Objetos com Object.create()
- Podemos criar um objeto a partir de outro objeto, onde esse objeto criado pode herdar as propriedades.

Criando um objeto a partir de outro:
```js
var obj {
	x: 10,
	y: 20
};
var obj2 = Object.create(obj);
```

No código acima criamos um novo objeto chamado ```obj2```a partir de outro objeto chamado ```obj```, onde no exemplo acima ```obj2```, herda as propriedades do ```obj```.

Conseguimos ter acesso as propriedades do objeto ```obj```:
```js
obj2.x; // 10
obj2.y; // 20
```

No caso acima conseguimos mudar essas propriedades:
```
obj2.x = 20;
obj2; // { x: 20 }
```

Note que acima só possuimos a propriedade x, porque mudamos ela no objeto ```obj2```.
Obs: No Javascript possuímos uma grande cadeia de herança onde neste caso ```obj2``` herda propriedade de ```obj``` e ```obj`` herda propriedades do construtor Object.

No caso, se você criar um objeto a partir de outro:
```js
var obj {
	x: 10,
	y: 20
};
var obj2 = Object.create(obj);
```

Ao mudar no objeto pai que é o ```obj```, uma propriedade onde o filho não a alterou, a mudança ocorrerá nos dois.
```js
var obj {
	x: 10,
	y: 20
};
var obj2 = Object.create(obj);

obj.x = 100;
obj.x; // 100
obj2.x; // 100
```

Se você alterar a propriedade no objeto filho, ele passará a não alterar mais essa propriedade mesmo que o objeto pai a altere.
```js
var obj {
	x: 10,
	y: 20
};
var obj2 = Object.create(obj);

obj2.x = 100;
obj2.x; // 100
obj.x = 1000;
obj.x; // 1000
obj2.x; // 100
```

## Método hasOwnProperty
- Este método verifica se o objeto tem a propriedade especificada como sua própria propriedade (em vez de herdá-la).

Uso:
```js
var obj {
	x: 10,
	y: 20
};
var obj2 = Object.create(obj);

obj.hasOwnProperty('x'); // true
obj2.hasOwnProperty('y'); // false
```