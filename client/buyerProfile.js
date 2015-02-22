

Template.buyerProfile.helpers({
    'feed':function(){
        return AdDetails.find({Location:"Adyar"});
    },
    'loc':function(){
        var location =  Geolocation.latLng();
        return location;
    },
    'profileID':function(){
        return Meteor.user().emails[0].address;
    }
})


Template.buyerProfile.events({
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();

    }
});