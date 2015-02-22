

Template.buyerProfile.helpers({
    'feed':function(){
        return AdDetails.find({Location:"Adyar"});
    },
    'loc':function(){
        var location =  Geolocation.latLng();
        return location;
        
        
        
    }
})


Template.buyerProfile.events({
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();

    }
});