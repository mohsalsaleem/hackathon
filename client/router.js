Router.map(function(){
Router.route('/',function()
             {    
                this.render('index', 
                {
                    onBeforeAction: function()
                    {
                        if(!Meteor.user())
                        {
                            if(Meteor.logginIn())
                            {
                            }
                            else Router.go('index');
                        }

                    }

                    });
    
                });
    
    
    
    Router.route('/createAd',function(){
        this.render('createAd',{
           
                    onBeforeAction: function()
                    {
                        if(!Meteor.user())
                        {
                            if(Meteor.logginIn())
                            {
                            }
                            else Router.go('index');
                        }

                    }

        });
    });
        
    
    });