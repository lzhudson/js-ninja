# Variaveis e Tipos de Dados
## Variáveis
O que são variáveis ?

São nomes simbólicos que damos aos tipos de valores.

Geralmente usamos para identificar alguns dados.

Para declararmos variáveis usamos a palavra reservada var.

Ex: **Declarando variáveis**
```javascript
var x;
x = 0; // Agora "x" vale 0
x = 1; // Agora "x" vale 1
```

## Tipos de Dados
- number
- string
- boolean
- null
- undefined
- object
- array

### Number
São numéros que podem ser inteiros ou decimais.

Ex: **Declarando variáveis do tipo number**
```javascript
var numeroInteiro = 10;
var numberoDecimal = 10.54;
```

### String
São dados que incluem caracteres do tipo texto.

Ex: **Declarando variáveis do tipo string**
```javascript
var fraseDeBomDia = 'Bom dia';
var nomeDoMelhorTimeDoMundo = 'Real Madrid';
```

### Boolean
São dados que podem ter apenas dois tipos verdadeiro ou falso.

Ex: **Declarando variáveis do tipo boolean**
```javascript
var tenhoMaisDe20Anos = false;
var souMaiorDeIdade = true;
```

### Null
É um valor do tipo nulo ou nenhum valor.

Ex: **Declarando variáveis do tipo null**
```javascript
var variavelNula = null;
```

### Undefined
É um valor semelhante ao nulo, porém significa a ausência de valor.

Ex: **Declarando variáveis do tipo undefined**
```javascript
var variavelSemValor = undefined;
```

### Object
O objeto é um tipo de dado bastante importante no Javascript.

Geralmente se assemelha a um objeto da vida real.

Eles possuem propriedades e métodos, as proprieades são tudo que o objeto possui e métodos são ações que um objeto executa.

Ex: **Declarando variáveis do tipo object**
```javascript
var pessoa = {
	altura: 1.87,
	peso: 90,
	andar: function() {
		return 'Pessoa está andando';
	}
}
// Acessando Valores através da notação de objeto
pessoa.altura; // Retorna 1.87
pessoa.peso; // Retorna 90
pessoa.andar(); // Retorna 'Pessoa está andando'

// Acessando Valores através da notação de array
pessoa['altura']; // Retorna 1.87
pessoa['peso']; // Retorna 90
```

### Array
Os arrays são listas de valores que podem ser congruentes ou não.

Ex: **Declarando variáveis do tipo array**
```javascript
var numeros = [1, 2, 3, 4, 5, 6];
numeros[0]; // Retorna 1
numeros[1]; // Retorna 2
numeros[4]; // Retorna 5
```
**Obs:** As Listas sempre começam em 0, ou seja para acessarmos o primeiro valor da lista utilizamos 0 como primeiro item.