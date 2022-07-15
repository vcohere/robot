const { checkBoundaries } = require("../utils/boundaries");

function getNewCoordinates(robot) {
    let { x, y, f } = robot;

    switch (f) {
        case "SOUTH":
            y--;
            break;
        case "NORTH":
            y++;
            break;
        case "EAST":
            x++;
            break;
        case "WEST":
            x--;
            break;
    }

    return { x, y };
}

function execute({ robot, boardSize }) {
    if (!robot)
        throw "You must use PLACE first.";

    const { x, y } = getNewCoordinates(robot);
    const { f } = robot;

    checkBoundaries(x, y, boardSize);

    return { x, y, f };
}

module.exports = { execute };