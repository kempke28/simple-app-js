
let pokemonRepository = (function() {
    let pokemonListe = [ ];  
    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=500'; //URL API with all pokemons list
    let modalContainer = document.querySelector('#modal-container');     /// Why define here????


        //grabs the array into a repository
        function getAll() {
            return pokemonListe;
        }
        //adds new pokemon to the list
        function add(pokemon) {
            pokemonListe.push(pokemon);
        }

        function clearListItem(){
            let pokemonList = document.querySelector( '.list-group' ); 
            pokemonList.innerHTML = "";
        }

        //creates the buttons for the pokemon list
        function addListItem(pokemon) {
            let pokemonList = document.querySelector( '.list-group' );  //select the class inside the html
            let listpokemon = document.createElement('li');
            listpokemon.classList.add('list-group-pokemon');                    //create an element inside the class that is inside the <div>
            let button = document.createElement('button');              // creates the button that with display "li"
            button.innerText = pokemon.name;                            //from the variable button, put some text
            button.classList.add('pokemon-button');
            button.classList.add('btn', 'btn-primary');
            button.setAttribute('data-target','#pokemonModal');  
            button.setAttribute('data-toggle', 'modal')                  
            listpokemon.appendChild(button);
            pokemonList.appendChild(listpokemon);
            button.addEventListener('click', function (event) {             //when clicked prints on console the pokemon       
                showDetails(pokemon);              
            });
        }

        function loadList () {                                  //funcion to call a list only name
            return fetch(apiURL).then(function (response) {    //return the API list from an espcific url with a promess
                return response.json();                        //return the promess if it there is something to fetch. the ".json" is necessary beacuse the list is in json type
            }).then(function(json) {                           // to make another promess with the API json
                json.results.forEach(function(item) {          //API list json brings back results and loop them with forEach funcion
                    let pokemon = {                            //create a new variable for the object in API: pokemon
                        name: item.name,                       //indicates elements of object will bring
                        detailsUrl: item.url
                    };
                    add(pokemon);                              //add pokemon by looping next pokemon on list
                    console.log(pokemon);
                });
            }).catch(function (e) {                            //just to catch errors, if so.
                console.error(e);
            })
        }

        function loadDetails (item) {                           //function to select which details I want
            let url = item.detailsUrl;                          //add variable containing part of the other varibale of details
            return  fetch(url).then(function (response) {       //fetch url making a promise
                return response.json();
            }).then(function (details) {
                item.name = details.name;
                item.imageUrl = details.sprites.other["official-artwork"].front_default;
                item.id = details.id;
                item.height  = details.height;
                item.types = details.types;                    
            }).catch(function (e) {
                console.error(e);
            });
        }

        //promess function and fetch de pokemon API 
        
        function showDetails (item) {
            pokemonRepository.loadDetails(item).then(function () {
                showModal(item)
            });
        }
        
        function showModal(pokemon) {
                        
            let modalBody = $( '.modal-body' );
            let modalTitle = $( '.modal-Title' );
                    
            modalTitle.empty();
            modalBody.empty();
            

            let namePokemon = $( '<h1>' + pokemon.name + '</h1>');                          //creating pokemon name
            let idPokemon = $( '<p>' + "ID: " + pokemon.id + '</p>' );
            let imagePokemon = $( '<img class="modal-img" style="width:50%" />' );
            imagePokemon.attr('src', pokemon.imageUrl);
            let heightPokemon = $( '<p>' + "Pokemon height: " + pokemon.height + '</p>' );
            let typePokemon = "<p>"; 
            pokemon.types.forEach(pokemon => typePokemon += pokemon.type.name + " ");
            typePokemon += '</p>';
           
            modalTitle.append(namePokemon);
            modalBody.append(imagePokemon);
            modalBody.append(idPokemon);
            modalBody.append(heightPokemon);
            modalBody.append(typePokemon);

        }

                
        return {
            getAll: getAll,
            add: add,
            addListItem: addListItem,
            loadList: loadList,
            loadDetails: loadDetails,
            showDetails: showDetails,
            showModal: showModal,
            clearListItem: clearListItem
            //hideModal: hideModal
        };

        
 })();

           /* let searchinpokemon = filterpokemon.target.value.tolowercase();
            console.log(searchinpokemon)

            let filteredpokemon = pokemonListe.filter(pokemon) => {
                return (
                    pokemon.name.tolowercase().includes(searchinpokemon);
                );
            } */
        


pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

let pokensearch = document.getElementById( 'pokemonsearch' );
pokensearch.addEventListener( 'keyup', (filterpokemon) => {
        let searchname = filterpokemon.target.value.toLowerCase();
        let filteredpokemon = pokemonRepository.getAll().filter(poken => 
            poken.name.toLowerCase().includes(searchname)
        );
        pokemonRepository.clearListItem();
        filteredpokemon.forEach(function (pokemon) {
            pokemonRepository.addListItem(pokemon);
        });
});

 
 //console.log (pokemonRepository.getAll ()); //reprints everything with mew at the bottom of the list











/*

 function renderhtml(pokemon) {
    const {name, typ, hieght, evolution, niveau_evolution, beschreibung, schwach_gegen} = pokemon
    return 
        "<div class ="pokemon">
            <p>name: ${name}</p>
            <p>typ: ${typ}</p>
            <p>hieght: ${height}</p>
            <p>evolution: ${evolution}</p>
            <p>niveau evolution: ${niveau_evolution}</p>
            <p>beschreibung: ${beschreibung}</p>
            <p>schwach gegen: ${schwach_gegen}</p>
        </div>"
    
}

 pokemonRepository.getAll().forEach(function(pokemon) {
  let result = renderhtml(pokemon)
  Document.write(result);
 });  
    
  */  
    
/*
    let result = 'name: ' + pokemon.name + '<br>' +'typ: ' + pokemon.typ + '<br>' + 'height: ' + pokemon.height + '<br>' + 'evolution: ' + pokemon.evolution + '<br>' + 'niveau evolution: ' + pokemon.niveau_evolution + '<br>' + 'beschreibung: ' + pokemon.beschreibung + '<br>' + 'schwach gegen' + pokemon.schwach_gegen + '<br>' + '' + '<br>';
    if (pokemon.height > 1)  {     
        result = result = 'name: ' + pokemon.name + '<br>' +'typ: ' + pokemon.typ + '<br>' + 'height: ' + pokemon.height + ' Wow, its big!' + '<br>' + 'evolution: ' + pokemon.evolution + '<br>' + 'niveau evolution: ' + pokemon.niveau_evolution + '<br>' + 'beschreibung: ' + pokemon.beschreibung + '<br>' + 'schwach gegen' + pokemon.schwach_gegen + '<br>' + '' + '<br>';
    }  
    //console.log(result);
    document.write('<div>' + result + '</div>');
});



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


            /*
            modalContainer.innerHTML = '';                      //erase inner content, its basiclly 1 space in ht modal
            
            let modal = document.createElement('div');              //in this step you are creating the modal
            modal.classList.add('modal');

            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Pum! Gone';
            closeButtonElement.addEventListener('click', hideModal);

            let titleElement = document.createElement('h1');
            titleElement.innerText = pokemon.name; 
            let imageElement = document.createElement('img');
            imageElement.src = pokemon.imageUrl;   

            let contentElement = document.createElement('p');
            contentElement.innerText = `ID: ${pokemon.id}
                                        Height: ${pokemon.height}`;
                for(let i = 0; i < pokemon.types.length; i++) {
                    contentElement.innerText += pokemon.types[i].type.name + ' ' + "\n";
                    }
                                        
            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(imageElement);
            modal.appendChild(contentElement);
            modalContainer.appendChild(modal);

            modalContainer.classList.add('is-visible');
        }

        /*.addEventListener('click', () => {
            showModal('Modal title', 'This is the modal content!');
          });
        
        function hideModal() {
            modalContainer.classList.remove('is-visible');
          }
          
          window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
              hideModal();  
            }
          });
          
          modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
              hideModal();
            }
          });
       */
