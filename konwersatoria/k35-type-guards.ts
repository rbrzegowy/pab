
// problem
function multByTwo(value: string | number): number {
    return value * 2;
}

// GUARD 1 - typeof
// rozwiązanie
function multByTwoWithGuard(value: string | number): number {
    if (typeof value === 'number') {
        return value * 2;
    } else {
        // value musi być typu number
        return +value * 2;
    }
}

// GUARD 2 - instanceof
interface Animal {}
class Cat implements Animal {
    meow() {}
}
class Dog implements Animal {
    woof() {}
}

// problem - nie można użyć typeof
// function playSound(animal: Animal) {
//     animal.meow(); //lub animal.woof() lub itd
// }
function playSound(animal: Animal) {
    if (animal instanceof Cat) {
        animal.meow();
    } else if (animal instanceof Dog) {
        animal.woof();
    }
}
// ale tak naprawdę - każdy zwierzak powinien zaimpementować metodę getSound() z Animal (zamiast meow, woof etc)

// GUARD 3 - in operator
// nie można użyć animal: Animal - 'meow' in Animal ==> never
function playSound2(animal: Cat | Dog) {
    if ('meow' in animal) {
        animal.meow();
    } else if ('woof' in animal) {
        animal.woof();
    }
}

// GUARD 4 - type predicates 
// zamiast sprawdzania tego samego warunku w wielu miejscach
function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).woof !== undefined;
    // lub 
    // return animal.hasOwnProperty('woof');
}