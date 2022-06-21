module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        name: {type: String, index: true},
        organismeId: {type: Number, index: true},
        client: {type: mongoose.model.Client, index: true},
        textes: [{type: mongoose.model.Client}],
        dossiers: [{type: mongoose.model.Dossier}],
        isNet: Boolean,
        isPasrau: Boolean,
        siret: {type: {}, index: true},
        sirets: [{type: mongoose.model.OrganismeSiret}],
    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    schema.virtual('clientId').get(function () {
        return this.client.id;
    });
    return mongoose.model("Organisme", schema);
};
