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
        return establishments[idx].customers[idi];
    }else{
        return undefined;
    }
}

function findPersonAt(cpf){
    let idi = -1;
    let idj = -1;
    
    for(let i=0;i<establishments.length;i++){
        for(let j=0;j<establishments[i].customers.length;j++){
            if(establishments[i].customers[j].cpf === cpf){
                idi = i;
                idj = j;
                break;
            }
        }
    }

    if(idi !== -1 && idj !== -1){
        return establishments[idi].customers[idj];
    }else{
        return undefined;
    }
}

function verifyInfected(cpf){
    for(let i=0;i<establishments.length;i++){
        const person = findPerson(i,cpf);
        if(person){
            if(person.infected){
                return true;
            }
        }
    }

    return false;
}

function establishmentsList(cpf){
    const list = [];
    for(let i=0;i<establishments.length;i++){
        for(let j=0;j<establishments[i].customers.length;j++){
            if(establishments[i].customers[j].cpf === cpf){
                list.push(i);
            }
        }
    }

    return list;
}

function possibleInfecteds(cpf){
    const inf = [];
    const person = findPersonAt(cpf);
    const ids = establishmentsList(cpf);
    const timeDifference = 8.64e+7;
    

    for(let i=0;i<ids.length;i++){
        for(let j=0;j<establishments[ids[i]].customers.length;j++){
            const test = establishments[ids[i]].customers[j]; 
            const diff = Math.abs(person.date - test.date);
            
            if(diff < timeDifference){
                inf.push(test);
            }
        }
    }

    return inf;
}


module.exports = { 
    findEstablishment,
    findPerson,
    possibleInfecteds,
    verifyInfected,
};