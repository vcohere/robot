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
    const newDirection = index === 0 ? directions[directions.length - 1] : directions[index - 1];

    return { x, y, f: newDirection };
}

module.exports = { execute };