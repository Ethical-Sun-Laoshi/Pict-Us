Template.dropzone.events({
    'dropped #dropzone': function(e) {
        var user = Meteor.user();

        FS.Utility.eachFile(e,function(fichier){
            var nouveauFichier = new FS.File(fichier);
            nouveauFichier.username = user.username;
            nouveauFichier.userId = user._id;
            nouveauFichier.userSlug = Slug.slugify(user.username);

            Images.insert(nouveauFichier,function(error, fileObj) {
                if (error) {
                    toastr.error("Le telechargement a echoue... Veuillez reessayer.");
                }else {
                    toastr.success ("Le telechargement est reussi")
                }
            })
        });
        console.log('un fichier a ete telecharge');
    }
});