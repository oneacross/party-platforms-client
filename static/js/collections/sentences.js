
var app = app || {};

(function() {

    var Sentences = Backbone.Collection.extend({

        model: app.Sentence,

        url: "/sentences"
    });

    app.sentences = new Sentences();

}());

