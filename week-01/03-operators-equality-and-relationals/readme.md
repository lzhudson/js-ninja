# Operadores de Igualdade e Relacionais
Anteriomente vimos que o operador de igualdade (=) serve para atribuirmos um valor a uma variavel.

Ex:
```javascript
var x = 0;
// A variavel x recebe 0
```

## Operadores de Igualdade

### Igualdade == (Não Estrito)
Nos operadores de igualdade temos de ínicio o operador "==" (igualdade).

Esse operador checa apenas se o valor é igual ao outro.

O retorno dessas expressões sempre será true (verdadeiro) ou false (falso).

Ex:
```javascript
1 == 1; // true
1 == 2; // false
```

De certo modo como testamos apenas o valor as expressões abaixos retornam true (verdadeiro):
```javascript
'1' == 1; // true
```

**Obs:** Os valores são semelhantes porém os tipos são diferentes, como no operador de igualdade não estrito testamos apenas o valor, então o retorno neste caso sempre será true.

### Diferença (Não Estrito)

Também possuímos o operador "!=" (diferença).

Neste ele retorna se um valor é diferente de outro, apenas checando o valor.

O retorno dessas expressões sempre será true (verdadeiro) ou false (falso).

Ex: 
```javascript
1 != 1; // false
1 != 2; // true
```

De certo modo como testamos apenas o valor as expressões abaixos retornam true (verdadeiro):
```javascript
'1' != 1; // false
```
**Obs:** Os valores são semelhantes porém os tipos são diferentes, como no operador de diferença não estrito testamos apenas o valor, então o retorno neste caso sempre será true.

### Igualdade === (Estrita)
Com a igualdade estrita conseguimos testar tanto o valor quanto o tipo.

Neste ele retorna se um valor é igual do outro, testando o valor e o tipo.

O retorno dessas expressões sempre será true (verdadeiro) ou false (falso).

Ex: 
```javascript
10 === 10; // true
'10' === 10; // false
```
**Obs:** O ideal é sempre usarmos os operadores estritos.

### Diferença !== (Estrita)
Com a difrença estrita conseguimos testar tanto o valor quanto o tipo.

Neste ele retorna se um valor é diferente do outro, testando o valor e o tipo.

O retorno dessas expressões sempre será true (verdadeiro) ou false (falso).

Ex: 
```javascript
10 !== 10; // false
'10' !== 10; // true
```

**Obs:** O ideal é sempre usarmos os operadores estritos.

## Operadores Relacionais
Os operadores relacionais conforme a matematica são:

- ">" Maior que
- "<" Menor que
- ">=" Maior ou igual a
- "<=" Menor ou igual a

Ex: 
```javascript
10 > 20; // false
20 < 10; // false
20 > 10; // true

20 >= 20; // true
20 >= 30; // false

10 <= 30; // true
30 <= 30; // true
30 < 100; // true
```