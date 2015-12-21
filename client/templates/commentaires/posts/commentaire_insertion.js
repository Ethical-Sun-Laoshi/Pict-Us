Template.commentaire_insertion.events({
    'submit form' : function(e, template) {
        e.preventDefault();
/*
        var $texte = $(e.target).find('[name=texte]');
        var commentaire = {
            texte : $texte.val(),
            postId : template.data._id
        };

        if (!commentaire.texte) {
            toastr.error ('Veuillez saisir un commentaire');
        }

        Meteor.call('commentaire_insertion', commentaire, function(erreurCommentaire, commentaireID) {
            if (erreurCommentaire) {
                toastr.error(erreurCommentaire.reason);
            }else{ $texte.val('');
            }
        });*/

        var user = Meteor.user();
        var postId = template.data._id;

        var nouveauCommentaire = commentaires.insert({
            postId : postId,
            auteurId  : user._id,
            auteur : Slug.slugify(user.username) || user.profile.name,
            texte : $(e.target).find('[name=texte]').val(),
            datecommentaire : new Date()
        });

        posts.update(nouveauCommentaire.postId, { $inc : {commentaires_nombre : 1}})

        createCommentNotification(comment);

    }

});