# Tipos de Dados em Javascript
Os tipos de dados em Javascript são dividos em dois tipos:
- Tipos Primitivos
- Tipos de Objeto

## Tipos Primitivos
Os tipos primitivos são: 
- Number
- String
- Boolean
- Null e undefined

## Tipos de Objeto
São todos os outros tipos exceto os de tipo primitivo.

### Objeto
Um objeto são um conjunto de propriedades.

#### Criação de Objetos
```javascript
var objeto = {
	propriedade: 'valor',
	propriedade2: 10,
	propriedade3: true
};
```
- Acessando Propriedades:
```javascript
var pessoa = {
	nome: 'Hudson',
	idade: 20,
	peso: 85,
	altura: 1.85
};

console.log(pessoa.nome); // Hudson
console.log(pessoa.idade); // 20
console.log(pessoa.peso); // 85
console.log(pessoa.altura); // 1.85
```
