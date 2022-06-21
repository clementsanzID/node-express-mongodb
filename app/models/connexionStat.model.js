module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        client: {type: mongoose.Schema.Types.ObjectId, ref: 'Client', index: true},
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

    schema.virtual('clientId').get(function () {
        return this.client.id
    });

    return mongoose.model("ConnexionStat", schema);
}
