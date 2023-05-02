// GIVEN
console.log(example);
var example = "I'm the example!";
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

console.log(hello);                                   
var hello = 'world';                                 
// logs undefined


var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// magnet

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// super cool

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// chicken, half-chicken


mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// undefined, error

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// undefined, rock, rock(r and b?), disco


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// san jose, seattle, burbank, san jose
