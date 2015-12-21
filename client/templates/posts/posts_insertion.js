Template.publier.helpers({
  categories : function(){
      return categories.find();
  }
});


Template.publier.events({

    //Focus sur le formulaire
    'submit form' : function (e, template) {
        //on "pause" la soumission du formulaire
        e.preventDefault();

        //on récupère les données nécessaires du formulaire
        var file = template.find('#imageImport').files[0];
        var user = Meteor.user();


        //création de l'image
        var image = new FS.File(file);
        imageId = image._id;
        image.userId= user._id;
        auteurIDimage = user._id;
        auteurimage = Slug.slugify(user.username) || user.profile.name;

        var imgeName = image.name();
        Images.insert(image, function(erreurImage){
            if (erreurImage) {
                toastr.error("Le t\u00e9l\u00e9chargement a \u00e9chou\u00e9... Veuillez r\u00e9essayer.");
            } else {
                toastr.success("Le t\u00e9lechargement est r\u00e9ussi");

                console.log("T\u00e9lechargement d'un fichier");
            }
        });

        var newPost = posts.insert({
            //on insère l'image au post
                imageId: image._id,
                image : image,
                imageName:"/cfs/files/images/"+image._id+'/'+image.name()+'?store=images',
                imgurl:image.url,
            //autres attributs du post
                auteurId : user._id,
                auteur : Slug.slugify(user.username) || user.profile.name,
                categorieID : $(e.target).find('[name=categorie]').val(),
                categorie : $(e.target).find('[name=categorie]:selected').text(),
                categoriename : $(e.target).find('[name=value]:selected').text(),
                description:$(e.target).find('[name=description]').val(),
                commentaires_nombre : 0
            }, function (erreurPost)  {
            if(erreurPost) {
                toastr.error("Votre post ne peux pas \u00eatre publi\u00e9. Veuillez r\u00e9essayer");
            }else{
            toastr.success ("Votre post est publi\u00e9! ");
            console.log("Nouveau post ajout\u00e9");}
        });

        //effacer les données du formulaire
        $('#categorie').val('');
        $('#description').val('');
        $('#imageImport').val('');

        //retour sur la page d'accueil
        Router.go('/');
    }
});