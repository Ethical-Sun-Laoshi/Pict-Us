Meteor.publish('posts', function(limit, auteur, categorie) {
    var findQuery = {};
    if (auteur) {
        check(auteur, String);
        findQuery = { auteur : auteur };
    }

            return posts.find(findQuery, {
                limit: limit,
                sort : {uploadedAt : -1}},
                {categorie : categorie }
            );
        });

Meteor.publish('Images', function(){
    return Images.find()
});


Meteor.publish('categories', function(){
    return categories.find()
});

Meteor.publish('commentaires', function(postId){
    return commentaires.find({post : postId})
});

Meteor.publish('userData', function() {
    if(!this.userId) return null;
    return Meteor.users.find(this.userId, {fields: {
        firstname: 1,
        lastname:1,
        birthday:1,
        profile: 1,
        avatar:1
    }});
});


Meteor.publish('avatar', function (userId) {
return avatars.find({userId : userId})
});

Meteor.publish('statuts', function(userId) {
    return statuts.find({})
});

Meteor.publish('jaimes', function(statutID) {
    return jaimes.find({statut : statutID});
});

Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId, read: false});
});

