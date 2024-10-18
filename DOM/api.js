export const getPokemonByName = (name)=>{
    let result = new Promise((resolve, reject)=>{
        if(name === undefined) {
            reject ({error:"No pasaste el nombre"});
        } else {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, requestOptions)
                .then((response) => response.json())
                .then((result) => resolve(result))
                .catch((error) => console.error(error));
        }
    })
    return result;
}

export const getZwarriorByName = (name) =>{
    let result = new Promise((resolve, reject) =>{
        if(name === undefined){
            reject ({error: "No pasaste el nombre del Guerrero Z"});
        } else {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
              };
              
              fetch(`https://dragonball-api.com/api/characters?name=${name}`, requestOptions)
                .then((response) => response.json())
                .then((result) => resolve(result))
                .catch((error) => console.error(error));
        }
    })
    return result;
}

export const getRickAndMortyById = (id) =>{
    let result = new Promise((resolve, reject) =>{
        if(id === undefined){
            reject ({error: "Id de personaje inválido"});
        } else {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
              };
              
              fetch(`https://rickandmortyapi.com/api/character/${id}`, requestOptions)
                .then((response) => response.json())
                .then((result) => resolve(result))
                .catch((error) => console.error(error));
        }
    })
    return result;
}