const {Schema} = require("mongoose");
module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        client: mongoose.model.Client,
        clientId: {type: Schema.ObjectId, index: true},
        year: {type: String, index: true},
        month: {type: String, index: true},
        connexions: {},
        users: {},
    });
    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("ConnexionStat", schema);
}
