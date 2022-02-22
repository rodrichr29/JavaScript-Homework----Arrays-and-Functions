//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/


let dog_string = "Hello Max my name is Dog and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]
function findWords() {
    let dog_chop = dog_string.split(' ')
    console.log(dog_chop)
    for (let i = 0; i < dog_names.length; i++) {
        if (dog_names[i] === dog_chop[1]) {
            console.log('match')
        } else {
            console.log('no match')
        }
    }
}
findWords()


//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]
let replaceVal = [0, 2, 4]
arr = arr.filter(function (value, index) {
    return replaceVal.indexOf(index) == -1
})
arr.splice(0,0,'even index')
arr.splice(2, 0, 'even index')
arr.splice(4, 0, 'even index')
console.log(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
