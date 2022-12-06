const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// const bListPkmn = pokémon.filter( p => p.name[0] === "B" );

const pkmnIds = pokémon.map( p => p)
const bListiddiv3 = pkmnIds.filter( p => p.id%3 == 0 );
bListiddiv3.forEach(item => console.log(item.name)  ) ;
console.log("-----------------------------1-------------------") 

const pkmntype = pokémon.map( p => p)
const bListtype = pkmntype.filter( p => p.types[0] === "fire" );
bListtype.forEach(item => console.log(item.name)  ) ;
// console.log(bListtype) 
console.log("--------------------------2----------------------") 

var c=1;
pkmntype.forEach(item => console.log(c++ +" :"+item.name) )

console.log("------------------------3------------------------") 
console.log("------------------------------------------------") 

c=1;
const pkmn2 = pokémon.map( p => p )
const bListidbig99 = pkmn2.filter( p => p.id > 99 );
bListidbig99.forEach(item => console.log(c+++" :"+item.name) )


console.log("--------------------------4----------------------") 

c=1;
const pkmnp = pokémon.map( p => p)
const bListtypepison = pkmnp.filter( p => p.types[0] === "poison" && p.types.length==1 );
bListtypepison.forEach(item => console.log(c+++" :"+item.name)  ) ;
// console.log(bListtype) 
console.log("--------------------------5----------------------") 

c=1;
const pkmnf = pokémon.map( p => p)
const bListtypeflying = pkmnp.filter( p =>  p.types[1] === "flying" );
bListtypeflying.forEach(item => console.log(c+++" :"+item.name)  ) ;
// console.log(bListtype) 
console.log("--------------------------6----------------------") 


c=1;
const pkmnn = pokémon.map( p => p)
const bListtypenormal = pkmnp.filter( p => p.types[0] === "normal" || p.types[1] === "normal" );
console.log(bListtypenormal.length)
// bListtypenormal.forEach(item => console.log(c+++" :"+item.name)  ) ;
// console.log(bListtype) 
console.log("--------------------------7----------------------") 

