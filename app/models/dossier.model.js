module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        updated: {type: Date, index: true},
        etatCivil: {type: mongoose.model.EtatCivil, index: true},
        rights: [{type: mongoose.model.Right, ref: 'Right'}],
        pendings: [{type: mongoose.model.Pending, ref: 'Pending'}],
        notifications: [{type: mongoose.model.Notification, ref: 'Pending'}],
        organisme: {type: mongoose.model.Organisme, index: true},
        numeroDossier: {type: Number, index: true},
        situation: Number,
        datePaiement: Date,
        timestamps : {type: Date, index: true},
        codeAction: Number,
        typeAction: Number,
        codeSpe: Number,
        totalPaiement: Number,
        userDocuments: [{type: mongoose.model.UserDocument, ref: 'UserDocument'}]
    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    schema.virtual('organismeId').get(function () {
        return this.organisme.id;
    });
    schema.virtual('organismeName').get(function () {
        return this.organisme.name;
    });
    schema.virtual('clientId').get(function () {
        return this.organisme.clientId;
    });

    return mongoose.model("Dossier", schema);
};
