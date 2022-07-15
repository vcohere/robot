const commands = require("./utils/commands");

// We call the commands directly throughout the tests to simulate input in the console
test("Can PLACE the robot on the board", () => {
    const params = [ "2", "2", "NORTH" ];

    const robot = commands.PLACE.execute({ params, boardSize: 5 });

    expect(robot.x).toBe(2);
    expect(robot.y).toBe(2);
    expect(robot.f).toBe("NORTH");
});

test("Can't PLACE the robot out of bounds", () => {
    const params = [ "5", "2", "NORTH" ];

    try {
        commands.PLACE.execute({ params, boardSize: 5 });
    }
    catch (e) {
        expect(e).toBe("Out of boundaries.")
    }
});

test("Can't PLACE the robot with a wrong direction", () => {
    const params = [ "2", "2", 1234 ];

    try {
        commands.PLACE.execute({ params, boardSize: 5 });
    }
    catch (e) {
        expect(e).toBe("Valid directions are SOUTH, NORTH, WEST and EAST.");
    }
});

test("Can't PLACE with wrong parameter type", () => {
    const params = [ "sfsdfsd", undefined, null ];

    try {
        commands.PLACE.execute({ params, boardSize: 5 });
    }
    catch(e) {
        expect(e).toBe("X is not a valid coordinate.");
    }
});

test("Can't PLACE the robot with no parameters", () => {
    try {
        commands.PLACE.execute({boardSize: 5});
    }
    catch (e) {
        expect(e).toBe("Expected parameters are X,Y,F.");
    }
});

test("Can turn LEFT", () => {
    const params = [ "1", "1", "NORTH" ];
    const boardSize = 5;
    let robot = commands.PLACE.execute({ params, boardSize });

    robot = commands.LEFT.execute({ robot, boardSize });

    expect(robot.f).toBe("WEST");
});

test("Can turn RIGHT", () => {
    const params = [ "1", "1", "NORTH" ];
    const boardSize = 5;
    let robot = commands.PLACE.execute({ params, boardSize });

    robot = commands.RIGHT.execute({ robot, boardSize });

    expect(robot.f).toBe("EAST");
});

// Testing this because of how the function was implemented
test("Can turn five times in a row", () => {
    const params = [ "1", "1", "NORTH" ];
    const boardSize = 5;
    let robot = commands.PLACE.execute({ params, boardSize });

    for (let i = 0; i < 5; i++) {
        robot = commands.RIGHT.execute({ robot, boardSize });
    }

    expect(robot.f).toBe("EAST");
});

test("Can MOVE", () => {
    const params = [ "1", "1", "NORTH" ];
    const boardSize = 5;
    let robot = commands.PLACE.execute({ params, boardSize });

    robot = commands.MOVE.execute({ robot, boardSize });

    expect(robot.y).toBe(2);
});

test("Can't MOVE out of bounds", () => {
    const params = [ "0", "0", "SOUTH" ];
    const boardSize = 5;
    let robot = commands.PLACE.execute({ params, boardSize });

    try {
        robot = commands.MOVE.execute({ robot, boardSize });
    }
    catch (e) {
        expect(e).toBe("Out of boundaries.");
    }
});