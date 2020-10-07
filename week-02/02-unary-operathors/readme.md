# Operadores Unários
Os operadores unários são o uso dele e um valor.

O uso deles em expressão se forem números ele soma os números, caso sejam strings ele concatena(junta) os valores.

## Operador +

Ex: **Operador +**
```javascript
'hud' + 'son'; // hudson
'3' + 3; // 33
'3' + '3'; // 33
```

**Obs:** Sempre que tivermos concatenando um número com uma string ele sempre concatena a expressão levando em conta a string e não o numero.

Ex: **Operador Unário +**
```javascript
+3; // 3
+'3'; // 3 
```
Retorna o 3 em formato de número.

Caso o valor seja uma string que o valor não seja númerico ele retorna **NaN(not a number)**.

Ex: **Operador Unário +**
```javascript
+'fernando'; // NaN
```

## Operador -
O operador **-**, converte o valor caso seja um número em um valor negativo.

Ex: **Operador unário -**
```javascript
var x = 3;
-x; // -3
-'3'; // 3
```

**Obs:** Tanto o operador unário **+** e **-**, eles apenas convertem o valor mas não atualizam o mesmo.