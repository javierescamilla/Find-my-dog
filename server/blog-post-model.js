let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let blogSchema = mongoose.Schema({
    Breed : {type : String, required : true},
    Color : {type : String},
    Pictures : {type : String},
    Found : {type : String},
    Comments : {type : String}
});

let Blog = mongoose.model('Blog', blogSchema);

let BlogList = {
    get : function(){
		return Blog.find()
				.then( blogs => {
					return blogs;
				})
				.catch( error => {
					throw Error( error );
				});
	},
    post : function(newBlog){
        return Blog.create(newBlog)
                .then( blog => {
                    return blog;
                })
                .catch( err=> {
                    throw Error(err);   
                });
    },
    put : function(filer, updatedInfo){
        return Blog.updateOne(filer, updatedInfo)
                .then( blog => {
                    return blog;
                })
                .catch( err=> {
                    throw Error(err);   
                });
    },
    delete :  function(filter){
        return Blog.deleteOne(filter)
            .then( blog => {
                return blog;
            })
            .catch( err=> {
                throw Error(err);   
            });
    }
}

module.exports = { BlogList };