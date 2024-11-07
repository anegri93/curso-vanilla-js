export const localSave = (dbName, obj) => {
    localStorage.setItem(dbName, JSON.stringify(obj));
}

export const localLoad = (dbName) => {
    return localStorage.getItem(dbName);
}

export const signUp = (props) => { 
    let response = new Promise((resolve, reject) =>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(props);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:3000/api/user", requestOptions)
        .then((response) => response.json())
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
    return response;
}

export const logIn = (props) => {
    let response = new Promise((resolve, reject) =>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify(props);
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("http://localhost:3000/api/login", requestOptions)
          .then((response) => response.json())
          .then((result) => resolve(result))
          .catch((error) => reject(error));
    });
    return response;
}
