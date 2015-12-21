 posts = new Meteor.Collection('posts');


posts.helpers({
    images: function (){
        return Images.findOne({ postId: this._id});
    }
});

posts.allow({
    insert: function(userId) { return userId != null; },
    update: function(auteurId, post) { return auteurId === post.auteurId},
    remove: function (auteurId, post) {return auteurId === post.auteurId}
});