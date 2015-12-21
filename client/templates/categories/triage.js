Template.triage.helpers({
    posts: function() {
        return posts.find({categorieID: this._id});
    }
});

$(".gallery").flipping_gallery({
    direction: "forward",
    selector: "> a",
    spacing: 10,
    showMaximum: 15,
    enableScroll: true,
    flipDirection: "left",
    autoplay: false
});