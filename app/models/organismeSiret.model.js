module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        organisme: {type: mongoose.Schema.Types.ObjectId, ref: 'Organisme'},
        siret: {type: String, index: true},
    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.ID = _id;
        return object;
    });

    schema.virtual('clientId').get(function () {
        return this.client.id;
    });
    return mongoose.model("OrganismeSiret", schema);
};
