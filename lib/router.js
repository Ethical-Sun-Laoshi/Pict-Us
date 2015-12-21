Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'not-found'
});

Router.route('/', {
	name: 'home', 
	template: 'home'
});

Router.route('/images', {
    name :'images',
    template : 'posts_liste'
});

Router.route ('/publier',{
    name : 'publier',
    template : 'publier'
});

Router.route('/post/:_id', {
    name : 'post_page',
    template:'post_page',
    data : function () {return posts.findOne(this.params._id)}
});


Router.route ('/post/:_id/editer',{
    name : 'editer',
    data : function() { return posts.findOne(this.params._id);}
});



Router.route ('/profil/:auteur',{
    name : 'auteur',
    template : 'posts_liste',
    data : function () {return posts.find({auteur: this.auteurId});}
});


Router.route ('/mesinfos', {
    name : 'user_page',
    template : 'user_page'});




Router.route('/:value', {
    name : 'triage',
    template : 'triage',
    data : function(){
        return categories.findOne({value:this.params.value})
    }
});






var requireLogin = function(){
    if (!Meteor.user()){
        if (Meteor.loggingIn()){
            this.render(this.loadingTemplate);
        } else {
            this.render('accesInterdit');
        }
    } else {
        this.next();
    }
};





Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin,{except: ['home']});
Router.onBeforeAction('dataNotFound', {only: ['post_page','auteur']});