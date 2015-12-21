Meteor.subscribe('posts');
Meteor.subscribe('Images');
Meteor.subscribe('categories');
Meteor.subscribe('commentaires');

Deps.autorun(function(){
    Meteor.subscribe('userData');
});

Meteor.subscribe('avatar');
Meteor.subscribe('notifications')
//les souscriptions des "statuts" et des "j'aime" sont dans infos.js

/*
* Meteor.subscribe(''); bookmarks
* */