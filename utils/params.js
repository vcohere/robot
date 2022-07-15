function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function checkCoordinates(x, y) {
    if (!isNumeric(x))
        throw "X is not a valid coordinate.";
    if (!isNumeric(y))
        throw "Y is not a valid coordinate.";
    
    return true;
}

function checkDirection(f) {
    const validDirections = [
        "SOUTH",
        "NORTH",
        "WEST",
        "EAST"
    ];

    if (validDirections.includes(f))
        return true;
    throw "Valid directions are SOUTH, NORTH, WEST and EAST.";
}

module.exports = { checkCoordinates, checkDirection };