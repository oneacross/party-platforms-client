
var app = app || {};

(function() {

    app.Sentence = Backbone.Model.extend({

        defaults: {
            issues: [],
            text: "",
            selected: false
        }

    });

}());

