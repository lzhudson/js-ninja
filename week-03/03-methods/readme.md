# Métodos
Quando atribuimos a uma propriedade de um objeto uma função, chamamos isso de método.

- Criando um método
```javascript
var pessoa = {
	nome: 'Hudson',
	idade: 20,
	altura: 1.80,
	peso: 85,
	sexo: 'masculino',
};
pessoa.andar = function() {
	return 'Pessoa andando';
}
console.log(pessoa); 
// nome: 'Hudson', idade: 20, altura: 1.80, peso: 85, sexo: 'masculino', andar: [Function]
```
- Usando um método
```javascript
var pessoa = {
	nome: 'Hudson',
	idade: 20,
	altura: 1.80,
	peso: 85,
	sexo: 'masculino',
	andar: [Function]
};
pessoa.andar(); // Pessoa andando
```
**Obs:** Note que sempre precisamos usar os parênteses para invocar a função, sem isso apenas
estamos lendo o valor da propriedade.