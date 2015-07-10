define(
    ['jquery',
        'underscore',
        'backbone',
        'models/Note'
    ],
    function($, _, Backbone, Note) {

        var initialize = function() {
            
            var note = new Note({
                emailAddress: 'example@gmail.com',
                comment: 'basic comment.'                
            });      
            
            console.log(note.toJSON());
            console.log(note.isValid());
            console.log(note.validationError);
        };

        return {
            initialize: initialize
        };
    });
