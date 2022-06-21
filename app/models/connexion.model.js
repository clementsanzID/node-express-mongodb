const {Schema} = require("mongoose");
module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        timeStamp: {type :Date, index: true},
        lastName: String,
        firstName: String,
        client: String,
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true},
        forClient: {type: mongoose.Schema.Types.ObjectId, ref: 'Client', index: true},
    })
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    schema.virtual('userId').get(function () {
        return this.user.id
    });
    schema.virtual('userId').get(function () {
        return this.forClient.id
    });
    schema.virtual('userId').get(function () {
        return this.forClient.name
    });

    return mongoose.model("Connexion", schema);
}
