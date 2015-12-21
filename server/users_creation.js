Accounts.onCreateUser(function(options, user) {
    // Use provided profile in options, or create an empty object
    user.profile = options.profile || {};
    // Assigns first and last names to the newly created user object
    user.profile.firstname = options.firstname;
    user.profile.lastname = options.lastname;
    user.profile.birthday = options.birthday;
    user.emails = options.emails;

    // Basic Profile Picture Setup
    //user.profile.avatar = Meteor.absoluteUrl() + "images/default-profilepict.jpg";
    user.profile.avatar = "images/default-profil.jpg";

    // Returns the user object
    return user;
});