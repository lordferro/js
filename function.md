 function calcSum (first, second, ifMore, ifLess) {
    let sum = first + second;
    if (sum > 3) {
        ifMore();
    } else {
        ifLess();
    }
 }

 function showIfMore () {
    console.log("Bolshe");
 }
 function showIfLess () {
    console.log("Men'she");
 }

 calcSum (1, 2, showIfMore, showIfLess);
 _______________________
 <!-- Фуекциональное выражение (functional expression) -->

 let showMessage = function () {
    console.log('Hello!');
 };
 showMessage();

 вызвать можем только после его создания.
 ______________________________
 <!-- Обход области видимости -->

 let getSum; 
 //обьявили переменную заранее
 if (2 > 1) {
    getSum = function() {
        let summ = 1 + 2;
        console.log(summ);
    }
 } 
 ..теперь не смотря на то что функция обьявлена внутри условия, тоесть не должна быть видима, - она видима.
 getSum();

 ___________________

