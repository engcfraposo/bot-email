module.exports = function parseStringAsArray(arraysAsString) {
    
    return arraysAsString.split(' ').map(event => event.trim());

}