const fs = require('fs');

const playercsv = function processData(filename, includeHeaders = false) {
    alltext = fs.readFileSync(filename).toString();
    var allTextLines = alltext.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i = 0; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');

        if (!includeHeaders && i === 0) {
            lines.push(data); // Add the first line (headers) to lines array
            continue; // Skip the first line (headers) if includeHeaders is set to false
        }

        // Skip empty lines
        if (data.length === 1 && data[0].trim() === '') {
            continue; // Skip to next iteration
        }

        var tarr = [];
        for (var j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
        }
        lines.push(tarr);
    }

    return lines;
}

module.exports = {
    processData: playercsv
};
