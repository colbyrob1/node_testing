const yargs = require('yargs')
const {addNote, listNotes } = require("../utils/notes")

const command = process.argv[2];

if (command == "add") {
    console.log("adding a note...");
    addNote(yargs.argv.note);
} else if (command == "list") {
    console.log("listing all notes...");
    listNotes();
} else if (command == "remove") {
    console.log("removing a note...");
} else {
    console.log("whoops command not recognised");
}
