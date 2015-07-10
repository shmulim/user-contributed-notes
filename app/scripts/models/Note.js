define(['jquery', 'underscore', 'backbone'],
    function ($, _, Backbone) {
        'use strict';

        var Note = Backbone.Model.extend({
            attributes: {
                emailAddress: null,
                comment: null,
                securityQuestion: null
            },
            
            initialize: function () {
                console.log('Note model initialized.');
            },

            validate: function (attrs) {
                if (!attrs.emailAddress){
                    return 'email address required.';
                }
                if (!attrs.comment){
                    return 'comment required.';
                }
                if (!attrs.securityQuestion){
                    return 'securityQuestion required.';
                }
            }
            
        });
        
        return Note;
});