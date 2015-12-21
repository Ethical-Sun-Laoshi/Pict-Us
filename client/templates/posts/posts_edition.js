Template.editer.helpers({
    categories: function () {
        return categories.find();
    }
});

    Template.editer.events({
   'submit form' : function(event) {
       event.preventDefault();

       var postActuel = this._id;
       var postElements = {
           categorieID : $(event.target).find('[name=categorie]').val(),
           categorie : $(event.target).find('[name=categorie]:selected').text(),
           description:$(event.target).find('[name=description]').val()
       };

       posts.update( postActuel, { $set:postElements }, function(erreur) {
           if (erreur) {
               toastr.error("Imposssible de modifier le post : " + erreur.reason);
               console.log("Probl\u00e8me de modification "+ erreur);
           }else{
               toastr.success("Post modifi\u00e9 !");
               console.log("Post modifi\u00e9 !");
               Router.go('post_page', {_id:postActuel});
           }
       });
   }
});