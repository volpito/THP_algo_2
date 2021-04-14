const fs = require('fs');
const fileName = process.argv[2];

//Tri a bulle synchrone 
function bulle(tab){
    var count = 0
    var changed;
    do{
        changed = false;
        for(var i=0; i < tab.length-1; i++) {
            if(tab[i] > tab[i+1]) {
                count++;
                var tmp = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = tmp;
                changed = true;
            }
        }
    } while(changed);
    console.log("Tri par inertion avec " + count + " comparaisons :");
}
// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    const numbers = data.split(' ').map((number) => Number.parseInt(number));
    bulle(numbers);
    console.log(numbers);

} catch (error) {
    console.error(error.message);
}


//Tri par insertion synchrone 

function sort(tab) {
    //nombre des éléments dans le tableau
    var len = tab.length;       
    var tmp, i, j;
    var count1 = 0                  
    
    for(i = 1; i < len; i++) {
      //stocker la valeur actuelle 
      tmp = tab[i]
      j = i - 1
      while (j >= 0 && tab[j] > tmp) {
        // déplacer le nombre
        tab[j+1] = tab[j]
        j--
        count1++;
      }
      //Insère la valeur temporaire à la position 
      //correcte dans la partie triée.
      tab[j+1] = tmp
    }
    console.log("Tri par inertion avec " + count1 + " comparaisons :");
    return tab
  }

  // Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    const numbers = data.split(' ').map((number) => Number.parseInt(number));
    sort(numbers);
    console.log(numbers);

} catch (error) {
    console.error(error.message);
}

//Tri par selection 

function sorting(tab){
    var count2 = 0                  
    for(var i = 0; i < tab.length; i++){
      //stocker l'index de l'élément minimum
      var min = i; 
      for(var j = i+1; j < tab.length; j++){
        if(tab[j] < tab[min]){
        // mettre à jour l'index de l'élément minimum
        min = j; 
        }
        count2++;
      }
      var tmp = tab[i];
      tab[i] = tab[min];
      tab[min] = tmp;
    }
    console.log("Tri par selection avec " + count2 + " comparaisons :");
    return tab;
  };

    // Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    const numbers = data.split(' ').map((number) => Number.parseInt(number));
    sorting(numbers);
    console.log(numbers);

} catch (error) {
    console.error(error.message);
}

/*
//tri rapide
function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    var count = 0;
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
      count++;
    }
    console.log("Tri par selection rapide avec " + count + " comparaisons :");
    return quicksort(left).concat(pivot, quicksort(right));
  };

      // Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    const numbers = data.split(' ').map((number) => Number.parseInt(number));
    quicksort(numbers);
    console.log(numbers);

} catch (error) {
    console.error(error.message);
}
*/