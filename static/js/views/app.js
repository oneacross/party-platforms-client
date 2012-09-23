
var app = app || {};

$(function($) {

    app.AppView = Backbone.View.extend({

        el: $("#platformapp"),

        events: {
            'keypress #enter-issue': 'setIssueOnEnter'
        },

        initialize: function() {
            this.input = this.$('#enter-issue');

            window.app.sentences.on('add', this.addOne, this);
            window.app.sentences.on('reset', this.addAll, this);

            app.sentences.fetch();
        },

        addOne: function(sentence) {
            var view = new app.SentenceView({model: sentence});
            this.$("#platform-text").append(view.render().el);
        },

        addAll: function() {
            this.$('#platform-text').html('');
            app.sentences.each(this.addOne, this);
        },

        setIssueOnEnter: function(e) {
            if (e.which !== ENTER_KEY) {
                return;
            }

            // Unselect all sentences.
            app.sentences.each(function(s){ s.set('selected', false); }, this);

            // Select sentences related to issue.
            app.sentences.each(this.selectSentence, this);

            // Update the DOM.
            this.addAll();
        },

        selectSentence: function(sentence) {
            var issue = this.input.val().trim();
            if (_.include(sentence.get('issues'), issue)) {
                sentence.set('selected', true);
            }
        }
    });
});

