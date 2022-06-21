module.exports = (mongoose ) => {
    var schema = mongoose.Schema({
        dossier: {type: mongoose.Schema.Types.ObjectId, ref: 'Dossier', index: true},
        rights: [{type: mongoose.Schema.Types.ObjectId, ref: 'Right'}],
        events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
        pendings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Pending'}],
        nir: String,
        organismeID: {type: Number, index: true},
        numeroDossier: {type: Number, index: true},
        situation: {type: Number, index: true},
        datePaiement: {type: Date, index: true},
        timeStamp: {type: Date, index: true},
        typeAction: {type: Number, index: true},
        codeAction: Number,
        codeSpe: Number,
    });
    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    schema.virtual('clientId').get(function () {
        return this.dossier.clientId
    });
    schema.virtual('organismeId').get(function () {
        return this.dossier.organisme.id
    });
    schema.virtual('organisme').get(function () {
        return this.dossier.organisme.name
    });

    return mongoose.model("Activity", schema);
}
