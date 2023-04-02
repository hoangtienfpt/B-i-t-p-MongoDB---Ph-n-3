module.exports={
    multipleMongooseToObject :function(mongooses){
        return mongooses.map(monggo =>monggo.toObject());
    },
    mongooseToObject:function(mongoose){
        return mongoose?mongoose.toObject():mongoose
    }
}