const hash = require('../util/hash');

function findEstablishment(name){
    let idx = -1;
    for(let i=0;i<establishments.length;i++){
        if(establishments[i].name === name){
            idx = i;
            break;
        }
    }

    if(idx !== -1){
        return establishments[idx];
    }else{
        return undefined;
    }
}

function findPerson(idx,cpf){
    let idi = -1;
        for(let i=0;i<establishments[idx].customers.length;i++){
            if(establishments[idx].customers[i].cpf === cpf){
                idi = i;
                break;
            }
    }

    if(idi !== -1){
        return establishments[idx].customers[j];
    }else{
        return undefined;
    }
}

function verifyInfected(cpf){
    for(let i=0;i<establishments.length;i++){
        const person = findPerson(idx,cpf);
        if(person.infected){
            return true;
        }
    }

    return false;
}

function establishmentsList(cpf){
    const list = [];
    for(let i=0;i<establishments.length;i++){
        for(let j=0;j<establjshments[i].customers.length;j++){
            if(establishments[i].customers[j].cpf === cpf){
                list.push(i);
            }
        }
    }

    return list;
}

function possibleInfecteds(cpf){
    const inf = [];
    const person = findPerson(cpf);
    const ids = establishmentsList(cpf);
    

    for(let i=0;i<ids.length;i++){
        for(let j=0;j<establishments[ids[i]].customers.length;j++){
            const test = establishments[ids[i]].customers[j]; 
            const diff = Math.abs(person.date - test.date);
            if(diff < 2,592e+8){
                inf.push({ establishment: ids[i], personId: j });
            }
        }
    }
}


module.exports = {
    index(request,response) {
        response.send(establishments).status(200);
    },
    create(request,response){
        const {name, password} = request.body.name;
        const id = establishments.length;
        const customers = [];

        // Verifications
        if(!name){
            return response.send({message: "Please provide an name" }).status(400);
        }

        if(password.length <= 3){
            return response.send({message: "Password must be more than 3 characters" }).status(400);
        }

        if(findEstablishment(name)){
            response.send({message: "Name was taken" }).status(400);
        }

        // Hash password
        const password = hash(password);

        // Create establishment
        const establishment = {id,name,password,customers};
        establishments.push(establishment);

        return response.send(establishment);
    },
    login(request,response){
        const {name, password} = request.body.name;
        let establishment = findEstablishment(name);

        if(idx === -1){
            return response.send({message: "Invalid name or password" }).status(400);
        }

        const password = hash(password);

        if(password !== establishment.password){
            return response.send({message: "Invalid name or password" }).status(400);
        }

        return response.send({
            id : establishment.id,
            name : establishment.name,
            customers : establishment.customers
        }).status(200);
        
    },
    entrance(request,response){
        const {cpf,name, idx} = request.body;

        const establishment = establishment[idx];
        
        if(!establishment){
            return response.send({message: "Invalid establishment" }).status(400);
        }

        // Check if person has been reported
        if(verifyInfected(cpf)){
            return response.send({message: "Person Infected!" }).status(400);
        }

        const id = establishment.customers.length;

        const person = {id,cpf,name,date: Date.now()}

        establishment.customers.push(person);

        return response.send(person).status(200);
    },
    report(request,response){
        const {idx,cpf} = request.body;

        if((idx === undefined) || (cpf === undefined)){
            return response.send({message: "Invalid index or cpf" }).status(400);
        }

        const establishment = findEstablishment[idx];
        
        if(!establishment){
            return response.send({message: "Invalid establishment" }).status(400);
        }

        const person = findPerson(cpf);

        if(!person){
            return response.send({message: "Invalid CPF" }).status(400);
        }

        const infecteds = possibleInfecteds(person.cpf);

        establishments[idx].customers[person.id].infected = true;
        return response.send({
            establishment : establishment.customers, 
            infecteds: infecteds
        }).status(200);

    },
}