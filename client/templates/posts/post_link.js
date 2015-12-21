Template.post_link.helpers({
    images: function () {
        return Images.findOne({id:this.imageId});
    }
});
