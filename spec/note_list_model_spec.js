(function() {
    function itContainsNothing() {
        const noteList = new NoteList();

        asserts.IsTrue('It is empty', noteList.getList().length === 0);

    } 
    function itReturnsTheList() {
        const noteList = new NoteList();
        const note = 'Hello';
        noteList.addNote(note);
    
        asserts.IsTrue('Note is here', noteList.getList().length === 1);
        asserts.IsEqual('It is the note you want', note, noteList.getList()[0].getText());
    }

    itContainsNothing();
    itReturnsTheList()
})();



