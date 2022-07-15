function execute({ robot }) {
    if (!robot)
        throw "You must use PLACE first.";

    const { x, y, f } = robot;
    const directions = [
        "NORTH",
        "EAST",
        "SOUTH",
        "WEST"
    ];

    const index = directions.indexOf(f);
    const newDirection = index === directions.length - 1 ? directions[0] : directions[index + 1];

    return { x, y, f: newDirection };
}

module.exports = { execute };