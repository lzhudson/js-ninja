# Objetos
- Mutáveis (podem mudar)
- Manipulados por referência (São alterados diretamente na memória)

Manipulação por referência
```javascript
var obj = {
	prop1: 'prop1',
	prop2: 'prop2'
};

var obj2 = {
	prop1: 'prop1',
	prop2: 'prop2'
};

obj === obj2 // false

var objCopy = obj;

objCopy === obj; // true
objCopy.prop1 = 'Olá mundo';
obj.prop1; // Olá mundo
```


## Criando objetos
Há três formas de criar objetos:
- Literal
- Com construtor (```new```)
- Com o método ```javascript Object.create()```

**Obs:** O interessante é criar sempre um objeto literal, principalmente pela facilidade e rapidez.

- Literal:
```javascript
var obj = {

};
```

- Com construtor:
```javascript
var obj = new Object();
```

- Com o método Object.create():
```javascript
var obj = Object.create();
```