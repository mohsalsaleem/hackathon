

Template.buyerProfile.helpers({
    'feed':function(){
        return AdDetails.find({},{$selector:{"Location":"adayar"}});
    },
    'loc':function(){
        var location =  Geolocation.latLng()
        var lati = location.lat;
        var long = location.lng;
        //console.log(lati);
      
        return location;
        
        
        
    }
})


Template.buyerProfile.events({
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();

    }
});