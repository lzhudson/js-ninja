# Conjunto de propriedades

## Definindo novas propriedades
Para definirmos novas propriedades usamos a notação de ponto, caso a propriedade exista o seu valor 
é atualizado, csao não exista a propriedade é criada.

```javascript
var pessoa = {
	nome: 'Hudson',
	idade: 20,
	altura: 1.80,
	peso: 85,
	sexo: 'masculino'
};
pessoa.cor = 'caucasiano';

console.log(pessoa); 
// nome: 'Hudson', idade: 20, altura: 1.80, peso: 85, sexo: 'masculino', cor: 'caucasiano'

```


## Métodos
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

- Invocando o método
```javascript
var pessoa = {
	nome: 'Hudson',
	idade: 20,
	altura: 1.80,
	peso: 85,
	sexo: 'masculino',
	andar: [Function]
};
pessoa.andar = function() {
	return 'Pessoa andando';
}
pessoa.andar(); // 'Pessoa andando'
```

- Criando o método aniversário:

	A cada invocação do método alteraremos a idade da pessoa.

```javascript
var pessoa = {
	nome: 'Hudson',
	idade: 20,
	altura: 1.80,
	peso: 85,
	sexo: 'masculino',
	andar: [Function]
};
pessoa.aniversario = function() {
	pessoa.idade++;
}
console.log(pessoa.idade); // 20
pessoa.aniversario();
console.log(pessoa.idade); // 21
```

- Criando o método nome completo:

	Retorna o nome completo da pessoa.

```javascript
var pessoa = {
	nome: 'Hudson',
	idade: 20,
	altura: 1.80,
	peso: 85,
	sexo: 'masculino',
	andar: [Function],
	aniversario: [Function],
	sobrenome: 'Holanda',
};
pessoa.nomeCompleto = function() {
	return pessoa.nome + ' ' + pessoa.sobrenome;
};
console.log(pessoa.nomeCompleto()); // Hudson Holanda
```