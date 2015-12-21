Meteor.startup(function() {

    //Crée les premiers utilisateurs
    if(!Meteor.users.find().count()) {
        var options =
            {
            username: 'admin',
            password: 'password'
            };
        Accounts.createUser(options);
    }


    //Recensement Images
    console.log("Total Images:", Images.find().count());
        //suppression des images
    Images.on('.delete-image', function (image) {
        console.log("Suppression de l'image " + image._id + " de la base de donnees.");
    });

    //Recensement Posts
    console.log("Total Posts:", posts.find().count());

    //recensement catégories
    console.log("Total Categories:", categories.find().count());


});