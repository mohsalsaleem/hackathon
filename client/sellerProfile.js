Template.sellerProfile.helpers({
    
    'feed':function(){
        return AdDetails.find({addedBy:Meteor.user().emails[0].address});
    },
    'profileID':function(){
        return Meteor.user().emails[0].address;
    }
})


Template.sellerProfile.events({
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();

    }
});