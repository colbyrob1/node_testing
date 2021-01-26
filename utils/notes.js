const addNote = (myNote) => {
    const allNotes =loadNotes();
    allNotes.push({reminder:myNote });


    saveNote(allNotes);
};

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

    saveNote(allNotes);
    

    const listNote = (myNote) => {
        const allNotes =loadNotes();
        
        allNotes.map(note => {
            console.log(note);
        });
    };


module.exports = {
    addNote,
    listNotes
}