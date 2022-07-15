const { checkDirection } = require("../utils/params");
const { checkBoundaries } = require("../utils/boundaries");

function generateRobot(f) {
    switch (f) {
        case "SOUTH":
            return " v ";
        case "NORTH":
            return " ^ ";
        case "EAST":
            return " > ";
        case "WEST":
            return " < ";
    }
}

function displayBoard(robot, boardSize) {
    const { x, y, f } = robot;

    checkBoundaries(x, y, boardSize)
    checkDirection(f);

    let res = "\n";
    
    for (let i = boardSize - 1; i >= 0; i--) {
        for (let j = 0; j < boardSize; j++) {
            res += x === j && y === i ? generateRobot(f) : " . ";
        }

        res += "\n";
    }

    return res;
}

function execute({ robot, boardSize }) {
    if (!robot)
        throw "You must use PLACE first.";

    const { x, y, f } = robot;

    console.log(displayBoard(robot, boardSize));
    console.log(`x: ${x}\ny: ${y}\nf: ${f}\n`);

    return robot;
}

module.exports = { execute };