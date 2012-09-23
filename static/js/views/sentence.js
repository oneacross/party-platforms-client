
var app = app || {};

$(function($) {

    // Simply a span.
    app.SentenceView = Backbone.View.extend({
        tagName: "span",

        render: function() {
            $(this.el).html(this.model.get('text'));
            $(this.el).toggleClass('selected', this.model.get('selected'));
            return this;
        }
    });

});

