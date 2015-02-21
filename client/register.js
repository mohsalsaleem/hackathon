Template.register.events({
    'submit form': function (event,template) {
        event.preventDefault();
        var emailVar = template.find('#register-email').value;
        var passwordVar = template.find('#register-password').value;
        var userType;
        if(template.find('#registerBuyer').checked){
            userType = "Buyer"
        }
        else{
            userType = "Seller";
        }
        console.log('Form Submitted');
        Accounts.createUser({
            email:emailVar,
            password:passwordVar,
            profile:{
                type:userType
            }
        });
    }
});