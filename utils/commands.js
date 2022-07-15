const fs = require("node:fs");
const path = require("node:path");

const commands = {};
const commandsPath = path.join(__dirname, "..", "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(path.join(commandsPath, file));
	commands[file.slice(0, -3)] = command;
}

module.exports = { ...commands };