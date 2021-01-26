const addNote = (myNote) => {
    console.log(myNote)
}

const fs = require("fs");

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const notesJson = dataBuffer.toString();
        return JSON.parse(notesJson);
      } catch (error) {
          return [];
      }
    };

module.exports = {
    addNote
}