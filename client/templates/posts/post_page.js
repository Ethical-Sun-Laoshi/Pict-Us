Template.post_page.helpers({
    postDate: function () {
        moment.locale('fr');
        return moment(this.uploadedAt).format('LLLL');
    },
    createur: function () {
        return this.auteurId === Meteor.userId();
    },
    images: function () {
        return Images.findOne({id:this.imageId});
    },
    commentaires:function(){
        return commentaires.find({postId: this._id});
    }
});
Template.post_page.events({

    'click .delete-image': function(e) {
        e.preventDefault();

        var confirmation = confirm('Vous \u00eates sur le point de supprimer ce post. Veuillez confirmer. ');
        if (confirmation === true) {
            Images.remove({_id:this.image._id}, function(error,result) {
                if (error) {
                    toastr.error("Erreur de suppression image... " + error);
                    console.log('erreur image');
                } else {
                    toastr.success('Image supprim\u00e9e!');
                    console.log('image supprimation');
                }
            });
            posts.remove({ _id:this._id }, function(error,result) {
                if (error) {
                    toastr.error("Erreur de suppression ... " + error);
                } else {
                    toastr.success('Post supprim\u00e9!');
                }
            });

        }
    }
});
