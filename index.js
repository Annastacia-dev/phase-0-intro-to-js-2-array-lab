// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push('Ralph');
    return 'cats';
}
function destructivelyPrependCat(){
    cats.unshift('Bob');
    return 'cats';
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return 'cats';
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return 'cats';
}
function appendCat(){
    var cats_1= [...cats,'Broom'];
    return cats_1;
}
function prependCat(){
    var cats_2=['Arnold', ...cats];
    return cats_2;
  }
function removeLastCat(){
    var cats_3= cats.slice(0,cats.length-1);
    return cats_3;
  }
  function removeFirstCat(){
    var cats_4= cats.slice(1)
    return cats_4;
  }
