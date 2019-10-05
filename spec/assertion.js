(function(exports) {
    const asserts = {
        IsTrue: function(message, assertion) {
            if(assertion === false) {
                throw message;
            }
        },
        IsEqual: function(message, expected, actual ) {
            if(expected !== actual) {
                throw `${message}. Expected ${expected}, got ${actual} instead.`
            }
        }
    }
    exports.asserts = asserts;
})(this);