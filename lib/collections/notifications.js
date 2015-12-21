Notifications = new Mongo.Collection('notifications');

Notifications.allow({
    update: function(userId, doc, fieldNames) {
        return ownsDocument(userId, doc) &&
            fieldNames.length === 1 && fieldNames[0] === 'read';
    }
});

createCommentNotification = function(comment) {
    var post = posts.findOne(comment.postId);
    if (comment.userId !== post.userId) {
        Notifications.insert({
            userId: post.userId,
            postId: post._id,
            commentId: comment._id,
            auteur: comment.auteur,
            read: false
        });

    }
};



/*
createLikeNotification = function(like) {
  var post = Posts.findOne(like.postId);
    if (like.userId !== post.userId) {
        Notifications.insert ({
            userId: post.userId,
            postId: post._id,
            likerName : like.author,
            read : false
        });
    }

    //TODO : audio

};

    */