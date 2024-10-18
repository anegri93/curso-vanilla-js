import { getPokemonByName } from "./api.js";
import { getZwarriorByName } from "./api.js";

getPokemonByName("charmander").then(result=>{
    if(result.name){
        let div = document.createElement("div");
        let lista = ``;

        result.abilities.forEach((item, index) => {
            lista += `<li><strong>Habilidad ${index+1}</strong>: ${item.ability.name}</li>`
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

getZwarriorByName("Goku").then(result => {
    if (result[0].name) {
        const warrior = result[0];        
        let div = document.createElement("div");
        let lista = ``

        for (let property in warrior) {
            if (warrior.hasOwnProperty(property) && property !== 'id' && property !== 'image' && property !== 'deletedAt' && property !== 'description') {
                lista += `<li><strong>${property}:</strong> ${warrior[property]}</li>`;
            }
        }
        div.innerHTML = `
        <div class="card">
            <img src="${warrior.image}"/>
            <h1 class="tittle">${warrior.name}</h1>
                <ul>
                    ${lista}
                </ul>
        </div>`;
        document.body.appendChild(div);
    }
}).catch(error => {
    console.error("Error:", error);
    let errorDiv = document.createElement("div");
    errorDiv.innerHTML = `<p>Hubo un error al buscar el Guerrero Z</p>`;
    document.body.appendChild(errorDiv);
});
