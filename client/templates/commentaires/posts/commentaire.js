Template.commentaire.helpers({
    date_commentaire : function() {
        moment.locale('fr');
        return moment(this.datecommentaire).fromNow();
    }
});