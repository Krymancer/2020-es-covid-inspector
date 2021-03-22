module.exports = {
    index(request,response) {
        response.send(establishments).status(200);
    },
    create(request,response){
        const name = request.body.name;
        const id = establishments.length;
        const customers = [];

        if(!name){
            response.send({message: "Please provide an name" }).status(400);
        }

        // TODO: prevent add if name alredy added

        const establishment = {id,name,customers};

        establishments.push(establishment);

        return response.send(establishment);
    },
    login(request,response){
        const name = request.body.name;
        let idx = -1;

        for(let i=0;i<establishments.length;i++){
            if(establishments[i].name === name){
                idx = i;
                break;
            }
        }

        if(idx === -1){
            response.send({message: "Invalid establishment" }).status(400);
        }else{
            const establishment = establishments[idx];
            response.send(establishment).status(200);
        }
    },
    entrance(request,response){
        const {cpf,name, idx} = request.body;

        const establishment = establishments[idx];
        
        if(!establishment){
            response.send({message: "Invalid establishment" }).status(400);
        }

        const person = {cpf,name,date: Date.now()}

        establishment.customers.push(person);

        response.send(person).status(200);
    },
    report(request,response){
        const {idx,cpf} = request.body;

        if((idx === undefined) || (cpf === undefined)){
            response.send({message: "Invalid index or cpf" }).status(400);
        }

        const establishment = establishments[idx];
        
        if(!establishment){
            response.send({message: "Invalid establishment" }).status(400);
        }

        // TODO: report infected and return list of possible infecteds
        // in time interval of 1 week

        response.send(establishment.customers).status(200);

    }

}