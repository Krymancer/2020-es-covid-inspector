module.exports = {
    index(request,response) {
        response.send(establishments);
    },
    create(request,response){
        const name = request.body.name;
        const id = establishments.length;
        const customers = [];

        const establishment = {id,name,customers};

        establishments.push(establishment);

        return response.send(establishment);
    }

}