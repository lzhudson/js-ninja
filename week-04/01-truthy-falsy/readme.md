# Truthy e Falsy
Os valores truthy e falsy, "booleanamente" falando são os valores que ao convertermos para booleanos
se definem como true ou false.

- Valor Truthy
```javascript
var teste = '';
if(1) {
	teste = true;
} else {
	teste = false;
}
console.log(teste); // true
```
**Obs:** A variável acima é retornada como true, pois o numeral 1 no Javascript é considerado um valor
truthy.

- Valor Falsy
```javascript
var teste = '';
if(0) {
	teste = true;
} else {
	teste = false;
}
console.log(teste); // true
```
**Obs:** A variável acima é retornada como false, pois o numeral 0 no Javascript é considerado um valor
falsy.

## Falsy
São valores que seu equivalente booleano retorna **false**.
- Valores Falsy
	- undefined
	- null
	- NaN
	- 0 (Number)
	- -0 (Number)
	- "" ou ''

## Truthy
São valores que seu equivalente booleano retorna **true**.
- Valores Truthy
  - Todos os outros valores que não são falsy

## Como descobrir a representação Booleana
Para descobrir o valor do equivalente booleano de um valor usamos o operador de negação duas vezes **!!**.

- Um único **!**: converte o valor para se equivalente booleano contrário.
- Dois **!!**: convertte o valor para seu equivalente booleano.

- Convertendo valores
```javascript
!!"" // false
!!"Hudson" // true
!!0 // false
!!"0" // true
!!'' // false
!!1 // true
!!{} // true
!![] // true
```