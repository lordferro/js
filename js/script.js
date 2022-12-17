
const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} cooking ${dish}`);
    }
    return makeDish;
}

const ivan = makeSheff("Ivan");
console.dir(ivan);
ivan("beef");