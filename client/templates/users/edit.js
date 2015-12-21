var avatarURL = {};

Template.user_edit.events({

    //Focus sur le formulaire
    'submit form' : function (event, template) {
        //on "pause" la soumission du formulaire
        event.preventDefault();

        //on récupère les données nécessaires du formulaire
        var nouvelleimage = template.find('#avatarImport').files[0];
        var user = Meteor.user();


        //création de l'image
        var avatar = new FS.File(nouvelleimage);
        avatarID = avatar._id;
        avatar.userId = user._id;
        useravatar = Slug.slugify(user.username) || user.profile.name;
        avatar.name();
        avatarURL = "/cfs/files/avatars/"+avatar._id+"/"+avatar.name()+"?store=avatars";
        avatars.insert(avatar, function (erreurImage) {
            if (erreurImage) {
                toastr.error("Le t\u00e9l\u00e9chargement a \u00e9chou\u00e9... Veuillez r\u00e9essayer.");
            } else {
                toastr.success("Le t\u00e9lechargement de votre photo est r\u00e9ussi");
                console.log("T\u00e9lechargement d'un avatar");
            }
        });

        //changement des données de l'utilisateur
        /*var userActuel = this._id;
        var userAttributs = {
            firstname: $(event.target).find('[name=prenom]').val(),
            lastname : $(event.target).find('[name=nom]:selected').val(),
            birthday:$(event.target).find('[name=datenaissance]').val(),
            email:$(event.target).find('[name=email]').val()
        };

        Meteor.users.update( userActuel, { $set:userAttributs }, function(erreur) {
            if (erreur) {
                toastr.error("Imposssible de modifier les informations du compte : " + erreur.reason);
                console.log("Probl\u00e8me de modification de compte "+ erreur);
            }else{
                toastr.success("Compte modifi\u00e9 !");
                console.log("Compte modifi\u00e9 !");
                Router.go('user_page', {_id:userActuel});
            }
        });*/


        var firstname = $(event.target).find('[name=prenom]').val(),
            lastname = $(event.target).find('[name=nom]').val(),
            birthday =$(event.target).find('[name=datenaissance]').val(),
            email =$(event.target).find('[name=email]').val();


        Meteor.users.update(
            {_id:Meteor.user()._id},
            {$set: {
                "profile.avatar": avatar,
                "profile.firstName": firstname,
                "profile.lastName": lastname,
                "profile.birthday": birthday,
                "emails": email
            }},

            function(erreur) {
                if (erreur) {
                    toastr.error("Imposssible de modifier les informations du compte : " + erreur.reason);
                    console.log("Probl\u00e8me de modification de compte "+ erreur);
                }else{
                    toastr.success("Compte modifi\u00e9 !");
                    console.log("Compte modifi\u00e9 !");
                    Router.go('user_page', {_id:Meteor.userId()});
                }
            }
        )
    },

    'click .supprimer-compte' : function(e) {
        e.preventDefault();

        var confirmation = confirm('Vous \u00eates sur le point de supprimer votre compte, ainsi que vos images. Cette action est irr\u00e9versible. Supprimer le compte ? ');
        if (confirmation === true) {

            //suppression de tous les posts affiliés à l'user
            var MyPost = posts.find({auteurId: Meteor.userId()});
            if (MyPost.count() > 0) {
                MyPost.forEach(function (item) {
                    //console.log(" post deleted");
                    posts.remove(item._id);
                });
            }

            //suppression de toutes les images affiliées à l'user
            var MyImage = Images.find({userId: Meteor.userId()});
            if (MyImage.count() > 0) {
                MyImage.forEach(function (item) {
                    //console.log("Image deleted");
                    Images.remove(item._id);
                });
            }

            //todo : supression de tous les commentaires (posts/images) affiliés à l'user
            //todo : suppression de tous les statuts affiliés à l'user
            //todo : suppression de tous les commentaires statuts affililés à l'user

            //suppression de l'user
            Meteor.users.remove({_id: Meteor.userId()}, function (error, result) {
                if (error) {
                    toastr.error("Erreur de suppression de compte... " + error);
                    console.log('erreur suppression compte');

                } else {
                    toastr.success('Au revoir !');
                    console.log('Compte supprim\u00e9');
                    Router.go('/');
                }
            });
        }
    }

});