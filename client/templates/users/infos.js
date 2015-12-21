Template.user_show_infos.helpers({
    username : function() {
        return user.username();
    },

    user_image : function () {
        if (Meteor.user().services.facebook) {
        // this is the line of interestreturn "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
         } else if (Meteor.user().profile) {
                    return $.trim(Meteor.user().profile.avatar);
                    } else {
                return "/images/default-profilepict.jpg";
                    }
    },

    user_username : function () {
        try {
            if (Meteor.user().services.facebook) {
                return Meteor.user().profile.name ;
            }else{
                return Meteor.user().username
            }
        }catch (err) {
            console.log(err);
        }
    },

    user_firstname: function () {
        try {
            if (Meteor.user().services.facebook) {
                return Meteor.user().profile.first_name ;
            }else{
                return Meteor.user().profile.firstName;
            }
        }catch (err) {
            console.log(err);
        }
    },

    user_lastname: function () {
        try {
            if (Meteor.user().services.facebook) {
                return Meteor.user().profile.last_name ;
            }else{
                return Meteor.user().lastname;
            }
        }catch (err) {
            console.log(err);
        }
    },

    user_birthday: function () {
        try {
            if (Meteor.user().services.facebook) {
                return Meteor.user().profile.birthday ;
            }else{
                return Meteor.user().birthday
            }
        }catch (err) {
            console.log(err);
        }
    },

    user_email: function () {
        try {
            if (Meteor.user().services.facebook) {
                return Meteor.user().profile.email ;
            }else{
                return Meteor.user().emails
            }
        }catch (err) {
            console.log(err);
        }
    },

    statuts : function(){
        return statuts.find({},{sort : {date:-1}})
    }
}); // helpers

Template.user_show_infos.events({

'keyup .statuttext': function(event, template) {
    if (event.which === 13){
        var statuttext = template.find('.statuttext').value;
        statuts.insert({
            text : statuttext,
            ownerID: Meteor.userId(),
            owner : Meteor.user().username || user.profile.name,
            date : new Date(),
            parent : null
        });
        $('.statuttext').val("").select().focus();
    }
}
});
Template.user_show_infos.rendered = function(){
    Deps.autorun(function(){
        Meteor.subscribe("statuts", Meteor.userId());
        Meteor.subscribe("jaimes")
    })
};