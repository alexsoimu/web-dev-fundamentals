const myArray = ["fructe", "legume", "carne", "lactate", "dulciuri", "produse de patiserie"]

console.log(myArray[3])

for ( let i = 0; i < myArray.length; i++ ) {
    console.log(i)
    console.log(myArray[i])
}


const noteStudenti = [10, 8, 7.5, 9, 6.5, 10, 8.5]

const noteMarite = noteStudenti.map(nota => {
    if(nota <= 9) {
        return nota + 1
    } else {
        return nota
    }
})

console.log(noteMarite)

noteMarite.map(notaMarita => console.log(notaMarita))

const notePremiate = noteMarite.filter(notaFinala => notaFinala >= 9)

console.log(notePremiate)

console.log(myArray.pop())
console.log("myArray dupa aplicare metodei pop()", myArray)
myArray.push("alte produse")

console.log(myArray)

const arrayNou = myArray.slice(3)

console.log(arrayNou)
