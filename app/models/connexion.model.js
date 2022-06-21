const {Schema} = require("mongoose");
module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        timeStamp: {type :Date, index: true},
        lastName: String,
        firstName: String,
        client: String,
        user: mongoose.model.User,
        forClient: mongoose.model.Client,
        userId: {type :Schema.ObjectId, index: true},
        clientId: {type :Schema.ObjectId, index: true},
        clientName: String
    })
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("Connexion", schema);
}
