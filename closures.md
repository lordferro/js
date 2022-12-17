Возвращаемая функция (innerFunction) во время вызова будет иметь доступ ко всем локальным переменным родительской функции - это называется замыканием

<!-- создано замыкание -->
const fnA = function (parameter) {
  const innerVariable = "внутренняя переменная в fnA";

  const innerFunction = function () {
    console.log( parameter += 1);
    console.log(innerVariable);
    console.log("вызов innerFunction");
  };
  return innerFunction;
};


const fnB = fnA(555);
<!-- тут fnA создаёт себе рюкзак уже с переменными (parameter = 0 ,  ), этот рюкзак не разрушается как локальные области видимости -->

fnB();
<!-- тут после вызова fnB, parameter = 0 делает инкремент и = 1 -->
fnB();
<!-- тут после вызова fnB, parameter = 1 делает инкремент и = 2 -->

+++++++++++++++++++++++++++++++++++++++++


const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} cooking ${dish}`);
    }
    return makeDish;
}

const ivan = makeSheff("Ivan");
<!-- создали рюкзак и вписали имя повара Ivan
{
    const makeDish = function (dish) {
        console.log(`Ivan cooking ${dish}`);
    }
    return makeDish;
}  -->

ivan("beef");
<!-- тут в этот рюкзак с поваром Ivan вставляем beef в function (dish) -->