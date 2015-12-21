Template.statutCommentaire.helpers({
    date_comment : function() {
        moment.locale('fr');
        return moment(this.datecommentaire).fromNow();
    }
});