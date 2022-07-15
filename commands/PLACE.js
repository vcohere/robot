const { checkCoordinates, checkDirection } = require("../utils/params");
const { checkBoundaries } = require("../utils/boundaries");

function execute({ params, boardSize }) {
    if (!params || params.length === 0)
        throw "Expected parameters are X,Y,F.";

    const [x, y, f] = params;

    checkCoordinates(x, y);
    checkDirection(f);

    const parsedX = parseInt(x, 10);
    const parsedY = parseInt(y, 10);

    checkBoundaries(parsedX, parsedY, boardSize);

    return { x: parsedX, y: parsedY, f };
}

module.exports = { execute };