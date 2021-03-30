const hash = require('../util/hash');
const {findEstablishment,findPerson,possibleInfecteds,verifyInfected} = require('../util/search');

const {save} = require('../util/db');


module.exports = {
    index(request,response) {
        response.send(establishments).status(200);
    },
    create(request,response){
        const {name, password} = request.body;
        const id = establishments.length;
        const customers = [];

        // Verifications
        if(!name){
            return response.send({message: "Digite um nome!" }).status(400);
        }

        if(password.length < 3){
            return response.send({message: "A senha não pode ser menor que 3 caracteres" }).status(400);
        }

        if(findEstablishment(name)){
            return response.send({message: "Nome já uso" }).status(400);
        }

        // Hash password
        const passwordHash = hash(password);

        // Create establishment
        const establishment = {id,name,password: passwordHash,customers};
        establishments.push(establishment);

        save(establishments);
        return response.send(establishment);
    },
    login(request,response){
        const {name, password} = request.body;
        let establishment = findEstablishment(name);

        if(!establishment){
            return response.send({message: "nome e/ou senha inválidos" }).status(400);
        }

        const passwordHash = hash(password);

        if(passwordHash !== establishment.password){
            return response.send({message: "nome e/ou senha inválidos" }).status(400);
        }

        
        return response.send({
            id : establishment.id,
            name : establishment.name,
            customers : establishment.customers
        }).status(200);
        
    },
    entrance(request,response){
        const {cpf,name, idx} = request.body;

        const establishment = establishments[idx];
        
        if(!establishment){
            return response.send({message: "ID inválido" }).status(400);
        }

        // Check if person has been reported
        if(verifyInfected(cpf)){
            return response.send({message: "Pessoa Infectada!" }).status(400);
        }

        const id = establishment.customers.length;

        const person = {id,cpf,name,date: Date.now()}

        establishment.customers.push(person);

        save(establishments);
        return response.send(person).status(200);
    },
    report(request,response){
        const {idx,cpf} = request.body;

        if((idx === undefined) || (cpf === undefined)){
            return response.send({message: "CPF e/ou ID inválido" }).status(400);
        }

        const establishment = establishments[idx];
        
        if(!establishment){
            return response.send({message: "ID inválido" }).status(400);
        }

        const person = findPerson(idx,cpf);

        if(!person){
            return response.send({message: "CPF inválido" }).status(400);
        }

        const infecteds = possibleInfecteds(person.cpf);

        establishments[idx].customers[person.id].infected = true;

        save(establishments);
        return response.send({ 
            infecteds: infecteds
        }).status(200);

    },
    customers(request,response){
        const {idx} = request.body;

        if(idx === undefined){
            return response.send({message: "ID inválido" }).status(400);
        }

        const customers = establishments[idx].customers;

        save(establishments);
        return response.send(customers);
    }
}