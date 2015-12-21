Template.my_posts.helpers({
    myPosts : function () {
        return posts.find({auteurId: Meteor.userId()});}
});