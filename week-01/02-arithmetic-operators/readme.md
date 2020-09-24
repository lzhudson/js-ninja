# Operadores Aritméticos
- **+** Adição
- **-** Subtração
- **\*** Multiplicação
- **/** Divisão

Assim como na matemática podemos realizar as operações básicas:

Ex: **Adição**
```javascript
1 + 2; // 3
```
Ex: **Subtração**
```javascript
12 - 2; // 10
```
Ex: **Multiplicação**
```javascript
4 * 5; // 20
```
Ex: **Divisão**
```javascript
10 / 2; // 5
```

## Operadores Aritméticos Abreviados:
Também possuímos os operadores ariméticos abreviados.

- **++** Incremento
- **--** Decremento

Do modo convencional podemos realiar a operação abaixo da seguinte forma:
Ex: **Modo tradicional (extenso)**
```javascript
var soma = 10 + 10; // 20
// Caso eu queira adicionar mais um faço da seguinte forma
soma = soma + 1; // 21
```

De certa forma podemos obter o mesmo resultado partindo do seguinte principio.
```javascript
var soma = 10 + 10; // 20
// Caso eu queira adicionar mais um faço da seguinte forma
soma++; // 21
// O código acima é equivalente á:
// soma = soma + 1; // 21
``` 

Da mesma forma podemos usar na subtração.
```javascript
var soma = 10 + 10; // 20
// Caso eu queira adicionar mais um faço da seguinte forma
soma--; // 19
// O código acima é equivalente á:
// soma = soma - 1; // 19
``` 

**Obs:** Há uma diferença entre usar o operador antes e depois da variável.

Ex: **Usando o operador antes:**
```javascript
var minhaIdade = 19;

++minhaIdade; // 20
```
Note que o retorno é o valor da variável atualizada.

Ex: **Usando o operador depois:**
```javascript
var minhaIdade = 19;

minhaIdade++; // 19
minhaIdade; // 20
```
Note que o retorno é o valor da variável desatualizada.

No primeiro caso primeiro atualizamos o valor e em seguida exibimos o mesmo, já no segundo caso primeiro exibimos o valor e em seguida atualizamos.


## Operadores Abreviados
Da mesma forma que temos os operadores abréviados unários (que decrementam ou incrementam "+ 1"), também podemos expandir a forma que adicionamos outros valores a variável.

Ex: 
````javascript
var soma = 10;
soma += 20; // 30
// A expressão acima é equivalente á:
// soma = soma + 20
````
**Obs:**O exemplo acima vale para os outros operadores aritméticos, como subtração, divisão e multiplicação.