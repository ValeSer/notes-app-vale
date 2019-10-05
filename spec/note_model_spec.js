(function() {
    function itSavesTheText() {
        const text = 'Hello World!';
        const note = new Note(text);

        asserts.IsEqual('It saves the text', text, note.getText())
    }

    itSavesTheText();
})();