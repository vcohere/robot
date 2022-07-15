function checkBoundaries(x, y, boardSize) {
    if (
        x < 0 ||
        y < 0 ||
        x > boardSize - 1 ||
        y > boardSize - 1
    ) {
        throw "Out of boundaries.";
    }
}

module.exports = { checkBoundaries };