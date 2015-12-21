ReactiveTabs.createInterface({
    template: 'basicTabs',
    onChange: function (slug, template) {
        // This callback runs every time a tab changes.
        // The `template` instance is unique per {{#basicTabs}} block.
        console.log('[tabs] Tab has changed! Current tab:', slug);
        console.log('[tabs] Template instance calling onChange:', template);
    }
});

Template.user_page.helpers({

    user_image : function () {
        try {
            if (Meteor.user().services.facebook) {
                // this is the line of interest
                return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
            } else if (Meteor.user().profile) {
                return $.trim(Meteor.user().profile.avatar);
            } else {
                return "/images/default-profil.jpg";
            }
        }
        catch (err) {
            console.log(err);
        }
    },

    user_username : function () {
        try {
        if (Meteor.user().services.facebook) {
            return Meteor.user().profile.name ;
        }else{
            return Meteor.user().username
        }
    }
        catch (err) {
            console.log(err);
        }
    },

    user_firstname: function () {
        try {
            if (Meteor.user().services.facebook) {
                return Meteor.user().profile.first_name ;
            }else{
                return Meteor.user().profile.firstname;
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
                return Meteor.user().profile.lastname;
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

    tabs: function () {
        // Every tab object MUST have a name and a slug!
        return [
            { name: 'Mon profil', slug: 'user_show_infos' },
            { name: '\u00c9diter mon profil', slug: 'user_edit' },
            { name: 'Mes posts', slug: 'my_posts'}
        ];
    },
    activeTab: function () {
        // Use this optional helper to reactively set the active tab.
        // All you have to do is return the slug of the tab.

        // You can set this using an Iron Router param if you want--
        // or a Session variable, or any reactive value from anywhere.

        // If you don't provide an active tab, the first one is selected by default.
        // See the `advanced use` section below to learn about dynamic tabs.
        return Session.get('user_edit'); // Returns "people", "places", or "things".
    }

}); // helpers

Template.user_page.events({



}); // events

