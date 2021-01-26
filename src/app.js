const command = process.argv[2];
const yargs = require('yargs')
const {addNote } = require("../utils/notes")

if (command == "add") {
    console.log("adding a note...");
    addNote(yargs.argv.note);
} else if (command == "remove") {
    console.log("removing a note...");
}else if (command == "list") {
    console.log("listing al notes...");
}else {
    console.log("command not recognised");
}