AdDetails = new Mongo.Collection('adDetails');

Images = new FS.Collection('uploads',{
    stores:[new FS.Store.FileSystem('uploads',{path:'~/projectUploads'})]
});