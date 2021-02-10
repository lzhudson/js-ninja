# Wrapper Objects
Valores primitivos não são objetos.

Podemos considear um objeto, se ele contiver propriedades e métodos.

```javascript
var name = 'Hudson';
name.length; // 6
```

Os objetos construtores são funções que criam novos objetos.

Ex:
```javascript
var name = new String('Hudson');
var age = new Number(30);
var ninja = new Boolean(false);
```

Ao criar usando o construtor, ele sempre será um objeto ao invés de ser um valor literal.

Ao utilizar a palavra reservada **new**, estamos criando um novo objeto daquele tipo, porém se não utilizarmos, estaremos convertando o valor passado por parâmetro.

Ex:
```javascript
var number = 10;
String(number); // '10'
```

Ex:
````javascript
var myNumber = Boolean(0);
console.log(myNumber); // false
````