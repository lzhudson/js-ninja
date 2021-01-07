# Importância de Nomear Funções
Sempre devemos nomear as funções ao invés de fazer isso:

- Sem nomear 
```javascript
var func = function() {
	return a + b;
}
```
- Nomeando da forma correta:
```javascript
var func = function soma() {
	return a + b;
}
```

Nomeando as funções facilitamos o debug das funções, dessa forma fica mais fácil ver os erros em nossos arquivos e deixa claro para outros desenolvedores o que o nosso código pode fazer.

No Javascript as funções também são considerados objetos, pois eles possuem propriedades e métodos.

## Propriedade name
Retorna o nome da função, caso seja uma função anônima (sem nome) ele acaba retornando uma string em branco.

- Ex: Função Anônima
```javascript
var func = function() {
	return a + b;
}
func.name; // ''
```

- Ex: Função Nomeada
```javascript
var func = function soma() {
	return a + b;
}
func.name; // soma
```