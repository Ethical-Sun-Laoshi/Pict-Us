statuts = new Meteor.Collection ("statuts");

statuts.allow({
    insert: function(userId) { return userId != null; },
    update: function(ownerID, statut) { return ownerID === statut.Meteor.userId()},
    remove: function (ownerID, statut) {return ownerID === statut.Meteor.userId()}
});



jaimes = new Meteor.Collection ("jaimes");




statutCommentaires = new  Meteor.Collection("statutsCommentaires");

statutCommentaires.allow({
    insert: function(userId) { return userId != null; }
});