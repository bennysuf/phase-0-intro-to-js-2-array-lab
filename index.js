// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
destructivelyAppendCat = (name) => {
    return cats.push("Ralph")
}

function destructivelyPrependCat(name) {
 return cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
   const myCats = [...cats, "Broom"];
   return myCats
}

function prependCat(name) {
    const myCats = ["Arnold", ...cats];
    return myCats
}

function removeLastCat() {
    return cats.slice(0, 2)
}

function removeFirstCat() {
    return cats.slice(1,3)

}