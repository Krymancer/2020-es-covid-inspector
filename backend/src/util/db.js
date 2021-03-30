const fs = require('fs');

function load(){
    const rawdata = fs.readFileSync('src/data/data.json')
    const data = JSON.parse(rawdata);

    return data;
}


function save(obj){
    let data = JSON.stringify(obj, null, 4);

    fs.writeFile('src/data/data.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

module.exports = {load, save};