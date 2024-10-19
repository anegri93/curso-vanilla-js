import { URLS, get } from "./api.js";

const cardsContainer = document.getElementById("cards-container");
let div = document.createElement("div");
document.body.appendChild(div);

function createCard(data, excludedProperties = [], imageProperty = "image", nameProperty = "name") {
    div.className = "cards-container";
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

}

function createPokemonCard(pokemon) {
    let lista = ``;

    if (pokemon.abilities) {
        lista += `<li><strong>Habilidades:</strong> ${pokemon.abilities.map(a => a.ability.name).join(', ')}</li>`;
    }


    if (pokemon.moves) {
        lista += `<li><strong>Movimientos:</strong> ${pokemon.moves.slice(0, 5).map(m => m.move.name).join(', ')}</li>`; // Mostrar solo los primeros 5 movimientos
    }

    let imageUrl = pokemon.sprites && pokemon.sprites.front_default ? pokemon.sprites.front_default : 'https://via.placeholder.com/150';

    div.innerHTML = `
    <div class="card">
        <img src="${imageUrl}" />
        <h1 class="tittle">${pokemon.name}</h1>
        <ul>
            ${lista}
        </ul>
    </div>`;
}

const handleSearch = (category, query) =>{
    if(category === "pokemon"){
        get(URLS.pokemon,query).then(result =>{
            if(result.name){
                createPokemonCard(result, ["id","name","sprites"], "sprites.front_default", "name")           
            }
        }).catch(error=> console.log(error));
    } else if (category === "zwarrior"){
        get(URLS.zwarriors,query).then(result =>{
            if(result[0].name){
                createCard(result[0],["id", "name", "image", "deletedAt", "description"], "image", "name");
            }
        }).catch(error=> console.log(error));
    }else if (category === "rickmorty"){
        get(URLS.rickAndMorty,query).then(result =>{
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
