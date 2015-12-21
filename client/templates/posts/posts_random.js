var postsRandomisation = 4;

Template.posts_random.helpers({

    //affiche 10 posts aléatoirement
    postsRandom : function(){
        var posts = posts;
        var selection = [];
        for (var i=0; i<postsRandomisation; i++)
        selection.push(posts.splice(_.random(posts.length-1),1)[0]);
        return selection; }



});
