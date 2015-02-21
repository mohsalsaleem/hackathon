

Template.buyerProfile.helpers({
    'feed':function(){
        return AdDetails.find({});
    }
})


Template.buyerProfile.events({
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();

    }
});