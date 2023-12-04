// 1. Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę)

// 2. Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

// 3. Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

// 4. Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

// 5. Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

// 6. Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

// 7. Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios.


// 1. Pratimas
console.log("1. Pratimas")
const cars = ["BMW", "VW", "Audi"]
cars.forEach(car => {
    console.log(car)
})

// 2. Pratimas
console.log("----------------------")
console.log("2. Pratimas")
cars.forEach((car, index) => {
    console.log(`${index}. ${car}`)
})

// 3. Pratimas
console.log("----------------------")
console.log("3. Pratimas")
const friends = ["gAbijA", "peTraS", "aUgusTė", "JoNaS"]
const capFriends = friends.map(name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
})
console.log(capFriends)

// 4. Pratimas
console.log("----------------------")
console.log("4. Pratimas")
const friendsAge = []
for (var i = 1; i <= 99; i++){
    friendsAge.push(i)
}
const filter = friendsAge.filter(function(x){
     return x >= 18
 })
 console.log(filter)

 // 5. Pratimas
console.log("----------------------")
console.log("5. Pratimas")
const ltMiestai = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Alytus", "Marijampolė", "Mažeikiai", "Jonava", "Utena", "Kėdainiai", "Telšiai", "visaginas", "Tauragė", "Ukmergė", "Plungė", "Kretinga", "Šilutė", "Radviliškis", "Palanga"]
const kMiestai = ltMiestai.find(miestas => miestas.startsWith("K"))
console.log(kMiestai)

// 6. Pratimas
console.log("----------------------")
console.log("6. Pratimas")
const lowMiestai = ltMiestai.some(miestas => miestas.charAt(0) === miestas.charAt(0).toLowerCase())
console.log(`${lowMiestai}`)

// 7. Pratimas
console.log("----------------------")
console.log("7. Pratimas")
const capMiestai = ltMiestai.every(miestas => miestas.charAt(0) === miestas.charAt(0).toUpperCase())
console.log(`${capMiestai}`)