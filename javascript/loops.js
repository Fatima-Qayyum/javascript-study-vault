/*-------------------------------------Loops-----------------------------------------------*/


//print odd numbers from(1 to 15)

for (let i = 1; i <= 15; i = i + 2) {

    console.log(i);
}

//print all even number from (2 to 10);

console.log('----------even number----------------')
for (let i = 2; i <= 10; i++) {

    if (i % 2 == 0) {
        console.log(i);
    }

}




// print multiplication table of 5;

let n = 5
for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}


//loops with Arrays

let fruits = ['apple', 'mango', 'pear', 'peach'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);


}

//loops with nested arrays

let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder", "woman", "flash"]];
for (let i = 0; i < heroes.length; i++){
 console.log(`list # ${i}`);
    for (let j = 0; j < heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}




