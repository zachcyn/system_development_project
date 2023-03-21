
const fs = require('fs')
//const csv = require('csv-parser');

// let string1=[];

const playercsv = function processData(filename) {
    alltext = fs.readFileSync(filename).toString();
    var allTextLines = alltext.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        //if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        //}
    }
    return lines;
}

module.exports={
    processData: playercsv
};


// datafile = processData("../../../Upload/FEMALE PLAYERS.csv");
// console.log(datafile[1]);