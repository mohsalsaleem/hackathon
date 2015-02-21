//var fileobj;
    
Template.createAd.events({
    
    'change .fileInput':function(event,template){
        console.log("Image");
            FS.Utility.eachFile(event,function(file){
        var fileobj = new FS.File(file);
            Images.insert(fileobj);
                console.log(fileobj);
        })
       
    },
     
    
    
    'submit form':function(event,template){
        
        event.preventDefault();
        console.log('formSubmitted');
        var title = template.find('#adTitle').value;
        var storeLocation = template.find('#StoreLocation').value;
        var offerPercentage  = template.find('#offerPercentage').value;
       var description = template.find('#offerDescription').value;
       var contact = template.find('#contact').value;
        var company = template.find('#company').value;
       var url = template.find('#CompanyUrl').value;
        console.log(title);
        console.log(storeLocation);
        console.log(offerPercentage);
        
        
        
       AdDetails.insert({
           Title:title,
           Location:storeLocation,
           Offer:offerPercentage,
           Description:description,
           Contact:contact,
           Company:company,
           Website:url,
           CreatedAt:Date.now()
       });
       
       
   } 
});