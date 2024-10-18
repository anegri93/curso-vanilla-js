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