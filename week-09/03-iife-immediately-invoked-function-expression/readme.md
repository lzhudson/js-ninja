# IIFE  (Immediately Invoked Function Expression)
Expressão de Função Invocada Imediatamente ou Função Auto Executável.


Diferente das funções tradicionais que precisam ser chamadas logo depois da criação para serem executada através de seu nome, essa funcionalidade simplesmente executa a função automaticamente.

Ex: Função Tradicional
```javascript
function sum() {
	return 1 + 2;
}
sum(); // 3;

var sum2 = function(){
	return 10 + 20;
}
sum2(); // 30

var sum3 = function otherSum() {
	return 100 + 200;
}
sum3(); // 300

var obj = {
	prop: function() {
		return 3;
	}
}

obj.prop(); // 3
```

Ex: Função IIFE
```javascript
(function(){
	return 1 + 2;
})();
// 3
(function(){
  return 10 + 20;
}());
// 30
```

A vantagem de uma **IIFE**, eu não preciso ter escopo global, ou seja ela limita as variáveis, funções a um único escopo que é o da IIFE.