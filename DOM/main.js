import { getPokemonByName, getZwarriorByName, getRickAndMortyById } from "./api.js";

const cardsContainer = document.getElementById("cards-container");

function createCard(data, excludedProperties = [], imageProperty = "image", nameProperty = "name") {
    let div = document.createElement("div");
    div.className = "card";
    let lista = ``;

    Object.keys(data).forEach(property =>{
        if(!excludedProperties.includes(property)){
            lista += `<li><strong>${property}</strong>: ${data[property]}</li>`;
        }
    })
        
    div.innerHTML=`
    <div class = "card">
        <img src="${data[imageProperty]}"/>
        <h1 class="tittle">${data[nameProperty]}</h1>
        <ul>
            ${lista}
        </ul>
    </div>
    `;
    cardsContainer.appendChild(div);
}

function createPokemonCard(pokemon) {
    let div = document.createElement("div");
    div.className = "card";
    let lista = ``;

    // Mostrar habilidades (abilities)
    if (pokemon.abilities) {
        lista += `<li><strong>Habilidades:</strong> ${pokemon.abilities.map(a => a.ability.name).join(', ')}</li>`;
    }

    // Mostrar movimientos (moves)
    if (pokemon.moves) {
        lista += `<li><strong>Movimientos:</strong> ${pokemon.moves.slice(0, 5).map(m => m.move.name).join(', ')}</li>`; // Mostrar solo los primeros 5 movimientos
    }

    // Verificar que la imagen esté disponible
    let imageUrl = pokemon.sprites && pokemon.sprites.front_default ? pokemon.sprites.front_default : 'https://via.placeholder.com/150';

    // Generar el contenido HTML del card
    div.innerHTML = `
    <div class="card">
        <img src="${imageUrl}" />
        <h1 class="tittle">${pokemon.name}</h1>
        <ul>
            ${lista}
        </ul>
    </div>`;

    cardsContainer.appendChild(div);
}

const handleSearch = (category, query) =>{
    cardsContainer.innerHTML = "";

    if(category === "pokemon"){
        getPokemonByName(query).then(result =>{
            if(result.name){
                createPokemonCard(result, ["id","name","sprites"], "sprites.front_default", "name")           
            }
        }).catch(error=> console.log(error));
    } else if (category === "zwarrior"){
        getZwarriorByName(query).then(result =>{
            if(result[0].name){
                createCard(result[0],["id", "name", "image", "deletedAt", "description"], "image", "name");
            }
        }).catch(error=> console.log(error));
    }else if (category === "rickmorty"){
        getRickAndMortyById(query).then(result =>{
            if(result.name){
                createCard(result, ["id", "episode", "location", "origin", "image", "url", "created", "type"], "image", "name")
            }
        }).catch(error=> console.log(error));
    }
};

document.getElementById("character-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const category = document.getElementById("category").value;
    const query = document.getElementById("character-input").value.trim(); 
    handleSearch(category, query);
});
