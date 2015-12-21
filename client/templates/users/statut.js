Template.statut.helpers ({
    likeStatut : function (){
        return jaimes.find({statutId: this._id}).count();
    }
});