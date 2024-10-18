export default class Clientes{
    constructor(name, lastName, age){
        Object.assign(this,{name, lastName,age})
    }
    talk(){
        console.log(`Hello ${this.name} ${this.lastName}`);
    }
}

