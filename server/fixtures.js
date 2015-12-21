if (categories.find().count() === 0) {
    categories.insert({
        value: "chatons_droles",
        nom: "Chatons dr\u00f4les"
    });
    categories.insert({
        value: "chiens_droles",
        nom: "Chiens dr\u00f4les"
    });
    categories.insert({
        value: "travail",
        nom: "Travail"
    });
    categories.insert({
        value: "fleurs",
        nom: "Fleurs"
    });
    categories.insert({
        value: "musical",
        nom: "Musical"
    });
    categories.insert({
        value: "jeux",
        nom: "Jeux"
    });
    categories.insert({
        value: "social",
        nom: "Social"
    });
}


var lillyId = Meteor.users.insert({
            firstname : "Lilly96",
            //username : 'lilly96',
            password: "lillysun"
});
var lilly = Meteor.users.findOne(lillyId);
var brianId = Meteor.users.insert({
    firstname : "Brian",
    //username : "BrianTheBoss",
    password :"password"});
var brian = Meteor.users.findOne(brianId);







if (posts.find().count() === 0) {
    var now = new Date().getTime();
    var telescopeId = posts.insert({
        auteurId: lilly._id,
        auteur: lilly.firstname,
        categorie: 'fleurs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum leo sed sapien' +
        ' fermentum porttitor. Praesent volutpat id ex eu ultrices. Nam vel elit dui. Nunc vel dictum ipsum, ut ' +
        'tempus quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' +
        ' Integer posuere neque vitae dapibus egestas.'
    });

    posts.insert({
        auteurId: brian._id,
        auteur: brian.firstname,
        categorie: 'travail',
        description: 'Phasellus venenatis ipsum a porta hendrerit. Praesent egestas venenatis sodales. ' +
        'Donec rutrum, nibh vel egestas cursus, orci dui luctus libero, nec facilisis felis mauris in urna.' +
        ' Cras ultricies tincidunt urna. Proin malesuada libero non blandit pretium. Integer dui arcu, vulputate' +
        ' nec turpis ac, mollis pharetra sem. Nullam ultrices felis a sollicitudin efficitur. In nec tortor lorem.' +
        ' Phasellus non eros gravida, blandit purus vitae, dapibus est.'
    });


    commentaires.insert({
        postId: telescopeId,
        userId: brian._id,
        auteur: brian.firstname,
        submitted: new Date(now - 5 * 3600 * 1000),
        body: "C'est un projet intéressant Lilly, est-ce-que je peux y participer ?"
    });

    commentaires.insert({
        postId: telescopeId,
        auteurId: lilly._id,
        auteur: lilly.firstname,
        submitted: new Date(now - 3 * 3600 * 1000),
        body: 'Bien sûr Briam !'
    });
}