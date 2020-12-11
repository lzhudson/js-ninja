# Escopo de Variáveis
Escopo: é o local onde declaramos uma variável.
Escopo Global: Geralmente é quando declaramos uma variável fora do **{}**.
Escopo Local: Geralmente é quando declaramos uma variável dentro das **{}**.

- Functions
Funções criam escopos locais, pois criamos as variáveis dentro das **{}**, nesse caso
não temos acesso a tais variáveis fora da função. O contrário nesse caso é verdadeir0
conseguimos acessar variáveis que estão fora do contexto da função.

Ex: 
- Acessando variáveis de escopo global.
```javascript
var myvar = 1;
myvar; // 1

function myFunction() {
	return myvar;
}	
myFunction(); // 1
```
Ex: 
- Acessando variáveis de escopo local
```javascript
function otherFunction() {
	var otherVar = true;
	return otherVar;
}	
otherFunction(); // true
otherVar; // otherVar is not defined 
```

- Garbage Collector = No Javascript possui essa funcionalidade no seu core, quando chamamos
uma função que possui uma variável local e caso a mesma não vá ser utilizada em lugar algum
ele simplesmente elimina da memória o espaço que a mesma ocupa.

**Obs:** Sempre use **var** para declarar as variáveis, caso não utilize essa palavra reservada,
a variável ficará disponivel para todo o escopo de forma global.

Ex:
- Variável global
```javascript
function newFunction() {
	newVar = 'variavel global';
	return newVar;
}
newFunction(); // 'variavel global'
newVar; // 'variavel global'
```

- Argumentos de funções também são locais
Os argumentos das funções também são locais, onde só são acessíveis dentro da função.

Ex:
```javascript
function outraFuncao(a, b, c) {
	return a;
}
outraFuncao(1); // 1

a; // a is not defined
```