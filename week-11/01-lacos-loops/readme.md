# Laços (Loops)

## Do While
Diferente do **while**, o do while executa primeiro o código e depois checa se aquela instrução passada por parâmetro é verdadeira ou falsa.

- Ex: While
```javascript
while(1 > 10) {
	console.log('O número 1 é maior que 10');
}
```

**Obs:**No caso acima o **console.log** só sera executado caso a condição passada seja verdadeira.

- Ex: Do While
````javascript 
do {
	console.log('Executa mesmo se o número 1 não for maior que 10');
} while(1 > 10)
````

## For in
O loop **for in**, diferente do loop **for**, percorre cada propriedade de um objeto.

- Ex: For
```javascript
for( var i = 0; i <= 10; i++) {
	console.log(i);
}
```

- Ex: For in
```javascript
var car = {
	brand: 'VW',
	model: 'Gol',
	year: 2013;
}

for( var prop in car) {
	console.log(car[prop]);
}
```

Também podemos usar a propriedade **in** para checar se uma propriedade existe em um objeto:


```javascript
console.log('doors in car?', 'doors' in car);
```