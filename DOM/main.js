import { getPokemonByName } from "./api.js";

getPokemonByName("charmander").then(result=>{
    if(result.name){
        let div = document.createElement("div");
        let lista = ``;
        result.abilities.forEach(item => {
            lista += `<li>${item.ability.name}</li>`
        });
        
        div.innerHTML = `
        <div class="card">
            <img src="${result.sprites.front_default}"/>
            <h1 class="tittle">${result.name}</h1>
            <ul>
                ${lista}
            </ul>
        </div>`;

        document.body.appendChild(div);        
    }
}).catch(error => {
    console.log(error);
})