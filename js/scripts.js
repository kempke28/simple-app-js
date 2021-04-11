alert('Gooo Pikachu!!');

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

//this loops a list of the pokemon listed

for (let elem=0; elem < pokemonListe.length; elem++){    //loop and element for the loop
  if(pokemonListe[elem].height > 1) {                   // Considitional 1 in height element
    document.write(pokemonListe[elem].name + ": " + "height: " + pokemonListe[elem].height + " " + "wow! its big" + "<br>")                                    // print conditional elements of the pokemon list
  }else {
      document.write(pokemonListe[elem].name + ": " + "height: " + pokemonListe[elem].height + "<br>")
  }                                                       //print the elements that have not a conditional.
}