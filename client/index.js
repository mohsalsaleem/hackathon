
Template.index.helpers({
    'userType':function(){
        if(Meteor.user().profile.type == "Buyer")
            return 1;
        else 
            return 0;
    }
    
});