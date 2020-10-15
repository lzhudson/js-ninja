# Instruções Condicionais

## Instrução IF
A instrução IF(se), verifica se a condição passada entre os parênteses é válida ou não.
A expressão passada sempre retorna um booleano.

Ex: **Instrução IF**
```javascript
var x = 3;
var y = 7;
if(x === 3) {
	y = 3;
}
// Se o x for igual a 3 o y recebe 3 como novo valor.
```

Ex: **Instrução IF**
```javascript
var x = 3;
var y = 3;
if(x === y && x === 3) {
	x = 5;
	y = 2;
}
// Se o x for igual ao y e se x é igual a 3, se for x recebe 5 e y recebe 2.
```

Ex: **Instrução IF**
```javascript
var x = 5;
var y = 2;
if(x === 5 || y === 3) {
	x = 1;
	y = 1;
}
// Se o x for igual a 5 ou y igual a 3, x recebe o valor 1 e y o valor 1.
// Então qualquer uma das condições que retorarem verdadeiro ele executa o código que está entre as chaves
// do if.
```


## Instrução ELSE
A instrução ELSE(se não), é executada caso o IF(se) a expressão passada por parâmetro não seja verdadeira. 

Ex: **Instrução IF e ELSE**
```javascript
var x = 1;
var y = 1;
if(x === 2) {
	y = 2;
} else {
	y = 10;
}
// Se x for igual a 2, y recebe 2, caso não seja verdade, y recebe 10.
```

## Instrução ELSE IF
A instrução ELSE IF(se não se), é executada caso a condição passada por parâmetro para a instrução IF(se) ou ELSE IF(se não se), não seja verdadeira.


Ex: **Instrução IF e ELSE IF**
```javascript
var x = 1;
var y = 1;
if(x === 2) {
	y = 2;
} else if(x === 1) {
	y = 10;
}
// Se x for igual a 2, y recebe 2, se não se x for igual 1, y recebe 10.
// Com o else if testamos mais de um valor, caso a instrução if ou else if acima não seja verdadeira.
```

Ex: **Instrução IF, ELSE IF e ELSE**
```javascript
var x = 1;
var y = 1;
if(x === 2) {
	y = 2;
} else if(x === 1) {
	y = 10;
} else {
	y = 1000;
}
// Se x for igual a 2, y recebe 2, se não se x for igual 1, y recebe 10, se não y recebe 1000.
// Com o else if testamos mais de um valor, caso a instrução if ou else if acima não seja verdadeira.
// Mas caso nenhuma das expressões acima seja verdadeira, y vai receber 1000.
```
