  Images = new FS.Collection("images", {
        stores: [ new FS.Store.FileSystem("images",{path: "uploads"})  ],

        filter : {
            allow : {
                contentTypes:['image/*']
            },
            onInvalid: function(message) {
                if (Meteor.isClient) {
                    toastr.error(message);
                }else {
                    console.log(message);
                }
            }}
    });




    // Allow rules
    Images.allow({
        insert: function(userId) { return userId != null; },
        update: function(userId, image) { return userId === image.userId},
        remove: function (userId, image) {return userId === image.userId},
        download: function () {return true;}
    });