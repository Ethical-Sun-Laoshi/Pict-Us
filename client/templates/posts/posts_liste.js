Template.posts_liste.helpers({
    posts: function() {
        return posts.find();
    },
    images : function() {
        return Images.find();
    }
});

Template.posts_liste.created = function() {
    var self = this;
    self.limit = new ReactiveVar;
    self.limit.set(parseInt(Meteor.settings.public.recordsPerPage));

    Tracker.autorun(function() {
        Meteor.subscribe('images');
        Meteor.subscribe('posts', self.limit.get(), Router.current().params.auteur);
    });
};

var incrementLimit = function(templateInstance) {
    var newLimit = templateInstance.limit.get() +
        parseInt(Meteor.settings.public.recordsPerPage);
    templateInstance.limit.set(newLimit);
};

Template.posts_liste.rendered = function() {
    var self = this;
    // is triggered every time we scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            incrementLimit(self);
        }
    });
};
