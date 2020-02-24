//Apply
//the second argument to apply is an array representing the arguments to be passed into the addWithContext function.

function addWithContext(a, b, c) {
    console.log(this + a + b + c);
}

addWithContext.apply(1, [2, 3, 4]); // 10

function makeSentence(a, b, c) {
    console.log(this + a + b + c);
}

makeSentence.apply('I have a', [' cat,', ' dog,', ' and a bird.']); //I have a cat, dog, and a bird.

//this will be 'Jane', name will be 'John', and age will be 27
function sayHello(name, age) {
    console.log(name);
    console.log(age);
    console.log(this);
}

//sayHello.apply('Jane', ['John', 27]);

let args = ['John', 27];
sayHello.apply('Jane', args);

//Bind
// If call and apply are sisters, bind is their cousin 
//call and apply immediately call the function, manipulating this and passing in the specified arguments 
//bind creates and returns a copy of the function, with this manipulated (binded/bound) and arguments already set, but the function does not yet execute

//bind example 1
function sayHi(name, age) {
    console.log(`Hello ${name}, my name is ${this.name} and I am ${age} years old`);
}

const greeter = sayHi.bind({ name: 'John' });

greeter('Jane', 21); // Hello Jane, my name is John and I am 21 years old


//bind example 2
function sayHey(name1, name2, name3) {
    console.log(
        `Hello ${name1}, ${name2}, and ${name3}, my name is ${this.name}`
    );
}

const greet = sayHey.bind.apply(sayHey, [
    {
        name: 'John'
    },
    'Jane',
    'Jack',
]);

greet('Jenny'); // Hello Jane, Jack, and Jenny, my name is John

//Bind and Apply

function sayHowdy(name1, name2, name3) {
    console.log(
        `Hello ${name1}, ${name2}, and ${name3}, my name is ${this.name}`
    );
}

//bind and apply
const greetThem = sayHowdy.bind.apply(sayHowdy, [
    {
        name: 'jo'
    },
    'mo',
    'lo',
]);

greetThem('po');  