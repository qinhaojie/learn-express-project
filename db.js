/**
 * Created by admin on 2015/3/24.
 */
var mongoose = require('mongoose');



//db.on('open', function () {
var kittySchema =new mongoose.Schema({
    name: String
});
kittySchema.methods.a=function(){
    return this.name;
};
var Kitten = mongoose.model('foo', kittySchema);

module.exports = Kitten;

/*silence.save(function(err,f){

 if(err){
 console.log(err);
 }
 console.log(silence == f);
 console.log(f);

 })*/
//});
