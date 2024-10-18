import { getPokemonByName, getZwarriorByName, getRickAndMortyById } from "./api.js";

let cardsContainer = document.createElement("div");
cardsContainer.className = "cards-container"; 

document.body.appendChild(cardsContainer);

getPokemonByName("charmander").then(result => {
    if(result.name){
        let div = document.createElement("div");
        div.className = "card";
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
        cardsContainer.appendChild(div);
    }
}).catch(error => {
    console.log(error);
})

getPokemonByName("charmeleon").then(result=>{
    if(result.name){
        let div = document.createElement("div");
        div.className = "card";
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
        cardsContainer.appendChild(div);
    }
}).catch(error => {
    console.log(error);
})

getZwarriorByName("Goku").then(result => {
    if (result[0].name) {
        const warrior = result[0];        
        let div = document.createElement("div");
        div.className = "card";
        let lista = ``

        const excludedProperties = ['id','name','image','deletedAt','description']

        Object.keys(warrior).forEach(property => {
            if(!excludedProperties.includes(property))
                lista += `<li><strong>${property}:</strong> ${warrior[property]}</li>`;
        })


        div.innerHTML = `
        <div class="card">
            <img src="${warrior.image}"/>
            <h1 class="tittle">${warrior.name}</h1>
                <ul>
                    ${lista}
                </ul>
        </div>`;
        cardsContainer.appendChild(div);
    }
}).catch(error => {
    console.error("Error:", error);
    let errorDiv = document.createElement("div");
    errorDiv.innerHTML = `<p>Hubo un error al buscar el Guerrero Z</p>`;
    document.body.appendChild(errorDiv);
});

getZwarriorByName("Gohan").then(result => {
    if (result[0].name) {
        const warrior = result[0];        
        let div = document.createElement("div");
        div.className = "card";
        let lista = ``

        const excludedProperties = ['id','name','image','deletedAt','description']

        Object.keys(warrior).forEach(property => {
            if(!excludedProperties.includes(property))
                lista += `<li><strong>${property}:</strong> ${warrior[property]}</li>`;
        })

        div.innerHTML = `
        <div class="card">
            <img src="${warrior.image}"/>
            <h1 class="tittle">${warrior.name}</h1>
                <ul>
                    ${lista}
                </ul>
        </div>`;
        cardsContainer.appendChild(div);
    }
}).catch(error => {
    console.error("Error:", error);
    let errorDiv = document.createElement("div");
    errorDiv.innerHTML = `<p>Hubo un error al buscar el Guerrero Z</p>`;
    document.body.appendChild(errorDiv);
});

getRickAndMortyById("1").then(result => {
    if (result.name) {
        const character = result;
        let div = document.createElement("div");
        div.className = "card";
        let lista = ``;

        const excludedProperties = ['id','episode', 'location', 'origin', 'image', 'url', 'created','type'];

        Object.keys(character).forEach(property =>{
            if (!excludedProperties.includes(property)) {
                lista += `<li><strong>${property}:</strong> ${character[property]}</li>`;
            }
        })

        div.innerHTML = `
        <div class="card">
            <img src="${result.image}"/>
            <h1 class="tittle">${result.name}</h1>
                <ul>
                    ${lista}
                </ul>
        </div>`;
        cardsContainer.appendChild(div);
    }
}).catch(error => {
    console.error("Error:", error);
    let errorDiv = document.createElement("div");
    errorDiv.innerHTML = `<p>Hubo un error al buscar el Guerrero Z</p>`;
    document.body.appendChild(errorDiv);
});

getRickAndMortyById("2").then(result => {
    if (result.name) {
        const character = result;
        let div = document.createElement("div");
        div.className = "card";
        let lista = ``;

        const excludedProperties = ['id','episode', 'location', 'origin', 'image', 'url', 'created','type'];

        Object.keys(character).forEach(property =>{
            if (!excludedProperties.includes(property)) {
                lista += `<li><strong>${property}:</strong> ${character[property]}</li>`;
            }
        })

        div.innerHTML = `
        <div class="card">
            <img src="${result.image}"/>
            <h1 class="tittle">${result.name}</h1>
                <ul>
                    ${lista}
                </ul>
        </div>`;
        cardsContainer.appendChild(div);
    }
}).catch(error => {
    console.error("Error:", error);
    let errorDiv = document.createElement("div");
    errorDiv.innerHTML = `<p>Hubo un error al buscar el Guerrero Z</p>`;
    document.body.appendChild(errorDiv);
});