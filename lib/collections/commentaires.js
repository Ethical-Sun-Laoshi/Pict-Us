commentaires = new Mongo.Collection('commentaires');


commentaires.allow({
    insert: function(userId) { return userId != null; }
});



/*
    Meteor.methods({
        commentaire_insertion: function (commentairesElements) {
            check(this.userId, String);
            check(commentairesElements, {
                postId: String,
                texte: String
            });

            var user = Meteor.user();

            commentaire = _.extend(commentairesElements, {
                userId: user._id,
                auteur: user.username || user.profile.name,
                datecommentaire: new Date()
            });

            posts.update(commentaire.postId, {$inc: {commentaires_nombre: 1}});

            return commentaires.insert(commentaire)


        }
    });
*/