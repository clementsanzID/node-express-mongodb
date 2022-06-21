module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true},
        dossier: {type: mongoose.Schema.Types.ObjectId, ref: 'Dossier'},
        activity: {type: mongoose.Schema.Types.ObjectId, ref: 'Activity'},
        organismeID: {type: Number, index: true},
        numeroDossier: {type: Number, index: true},
        situation: {type: Number, index: true},
        datePaiement: {type: Date, index: true},
        timeStamp: {type: Date, index: true},
        allocationBrut: Number,
        prochainjourIndemnisable: Date,
        droitPercu: Number,
        nombreJourRestant: Number,
        droitTotal: Number,
        dateDernierPaiement: Date,
        montantDernierPaiement: Number,
        montantSoldeDette: Number,
        maxAuPeriode: Date,
        minDuPeriode: Date,
        rejet: Number
    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    schema.virtual('organisme').get(function () {
        return this.dossier.organisme.name;
    });
    schema.virtual('organismeId').get(function () {
        return this.dossier.organisme.name;
    });

    return mongoose.model("Pending", schema);
};
