const readline = require("node:readline");
const commands = require("./utils/commands");

const boardSize = 5;
let robot = null;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
});

function callCommand(command, params) {
    try {
        const newRobot = command.execute({ robot, boardSize, params })
        robot = newRobot;
    }
    catch (e) {
        console.error(e);
    }
}

rl.prompt();

rl.on("line", (line) => {
    const [ requestedCommand, paramsLine ] = line.trim().split(" ");
    const command = commands[requestedCommand];
    const params = paramsLine && paramsLine.length > 0 ? paramsLine.split(",") : null;

    if (command) {
        callCommand(command, params);
    }
    else {
        console.error("Command doesn't exist.");
    }

    rl.prompt();
}).on("close", () => {
    console.log("\nGood bye !");
    process.exit(0);
});