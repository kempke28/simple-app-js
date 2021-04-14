alert('Gooo Pikachu!!');

let pokemonRepository = (function(){
    let pokemonListe = [   //array and objects identify in the list
        {
            name: 'Bulbasaur',
            typ: ['grass', 'posion'],
            height: .7,
            evolution: 'ivysaur',
            niveau_evolution: 16,
            beschreibung: 'For some time after its birth, it grows by gaining nourishment from the seed on its back',
            schwach_gegen: ['ground', 'psychic', 'flying', 'fire', 'ice']
        }, 
        {
            name: 'Charmander',
            typ: 'fire',
            height: .6,
            evolution: 'Charmeleon',
            niveau_evolution: 16,
            beschreibung: 'The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.',
            schwach_gegen: ['ground', 'rock', 'water']
        },
        {
            name: 'Squirtle',
            typ: 'water',
            height: .5,
            evolution: 'Wartortle',
            niveau_evolution: 16,
            beschreibung: 'It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity.',
            schwach_gegen: ['grass', 'electric']
        },
        {
            name: 'Pikachu',
            typ: 'electric',
            height: .4,
            evolution: 'Raichu',
            niveau_evolution: 'using a stone',
            beschreibung: 'It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state.',
            schwach_gegen: 'ground'
        },
        {
            name: 'Ho-Oh',
            typ: ['electric', 'flying'],
            height: 3.8,
            evolution: 'none',
            niveau_evolution: 'none',
            beschreibung: 'It occasIts feathers are in seven colors. It is said that anyone seeing it is promised eternal happiness.ionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state.',
            schwach_gegen: ['ground', 'rock', 'electric', 'water']
        },
        {
            name: 'Lugia',
            typ: ['psychic', 'flying'],
            height: 5.2, 
            evolution: 'none',
            niveau_evolution: 'none',
            beschreibung: 'It sleeps in a deep-sea trench. If it flaps its wings, it is said to cause a 40-day storm.',
            schwach_gegen: ['rock', 'electric', 'ice', 'ghost', 'dargon']
        }
    ];

        function getAll() {
            return pokemonListe;
        }
        function add(pokemon) {
            pokemonListe.push(pokemon);
        }
        
        return {
            getAll: getAll,
            add: add
        };
 })();



 pokemonRepository.getAll().forEach(function(pokemon) {
    let result = 'name: ' + pokemon.name + '<br>' +'typ: ' + pokemon.typ + '<br>' + 'height: ' + pokemon.height + '<br>' + 'evolution: ' + pokemon.evolution + '<br>' + 'niveau evolution: ' + pokemon.niveau_evolution + '<br>' + 'beschreibung: ' + pokemon.beschreibung + '<br>' + 'schwach gegen' + pokemon.schwach_gegen + '<br>' + '' + '<br>';
    if (pokemon.height > 1)
    {     
        result = result = 'name: ' + pokemon.name + '<br>' +'typ: ' + pokemon.typ + '<br>' + 'height: ' + pokemon.height + ' Wow, its big!' + '<br>' + 'evolution: ' + pokemon.evolution + '<br>' + 'niveau evolution: ' + pokemon.niveau_evolution + '<br>' + 'beschreibung: ' + pokemon.beschreibung + '<br>' + 'schwach gegen' + pokemon.schwach_gegen + '<br>' + '' + '<br>';
    }  
    //console.log(result);
    document.write('<div>' + result + '</div>');
});

console.log (pokemonRepository.getAll() ); //this call the complete array of pokemon
pokemonRepository.add ({name: 'mew '}); //adds mew to the list, just the name mew
console.log (pokemonRepository.getAll ()); //reprints everything with mew at the bottom of the list
document.write(pokemonRepository.getAll());








/*
//declare result to hold pokemon value

for (let elem=0; elem < pokemonListe.length; elem++){  
    let result = pokemonListe[elem].name + ": " + "height: " + pokemonListe[elem].height;

//check if height is greater than 1, conditional;

    if (pokemonListe[elem].height > 1) {
    result = result + " Wow, that's big!"
    } else {
    result = result
    }
    document.write("<div>" + result +  "</div>")
}


//Foreach loop with conditional

pokemonListe.forEach(function(pokemonListe) {
    let result = 'name: ' + pokemonListe.name + '<br>' +'typ: ' + pokemonListe.typ + '<br>' + 'height: ' + pokemonListe.height + '<br>' + 'evolution: ' + pokemonListe.evolution + '<br>' + 'niveau evolution: ' + pokemonListe.niveau_evolution + '<br>' + 'beschreibung: ' + pokemonListe.beschreibung + '<br>' + 'schwach gegen' + pokemonListe.schwach_gegen + '<br>' + '' + '<br>';
    // declare conditional
    if (pokemonListe.height > 1) {
        result = 'name: ' + pokemonListe.name + '<br>' +'typ: ' + pokemonListe.typ + '<br>' + 'height: ' + pokemonListe.height + ' Wow, its big!' + '<br>' + 'evolution: ' + pokemonListe.evolution + '<br>' + 'niveau evolution: ' + pokemonListe.niveau_evolution + '<br>' + 'beschreibung: ' + pokemonListe.beschreibung + '<br>' + 'schwach gegen' + pokemonListe.schwach_gegen + '<br>' + '' + '<br>';
    } else {
        result = result
    }
   
    document.write( "<div>" + result + "</div>")
    console.log(result)
});
    
*/
