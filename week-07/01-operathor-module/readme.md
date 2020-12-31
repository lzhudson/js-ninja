# Operador Módulo
Basicamente o operador modulo retorna o resto da divisão entre dois números.
- Como funciona: 
	- 3 % 3 = 0
	- 5 % 2 = 1

- Ex:
```javascript
5 % 2; // 1
3 % 4; // 3
4 % 2; // 0
```

- Ex: Exibindo os números pares entre 0 e 20
```javascript
var numero = 0;
while(numero <= 20) {
	if(numero % 2 === 0) {
		console.log(numero);
	}
	numero++;
}
```