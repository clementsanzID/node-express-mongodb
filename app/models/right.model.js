module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        user: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
        dossier: [{type: mongoose.Schema.Types.ObjectId, ref:'Dossier', index: true}],
        activity: [{type: mongoose.Schema.Types.ObjectId, ref:'Activity'}],
        organismeID: {type: Number, index: true},
        numeroDossier: {type: Number, index: true},
        situation: {type: Number, index: true},
        datePaiement: {type:Date, index: true},
        timeStamp: {type:Date, index: true},
        allocationBrut: Number,
        prochainJourIndemnisable: Date,
        droitPercu: Number,
        nombreJourRestant: Number,
        droitTotal: Number,
        dateDernierPaiement: Date,
        montantDernierPaiement: Number,
        montantSoldeDette: Number,
        maxAuPeriode: Date,
        minDuPeriode: Date,
        maxAuBis: Date,
        rejet: Number,
        events: [{type: mongoose.Schema.Types.ObjectId, ref:'Event'}],
        totalPaiement: Number,
        isNet:Boolean,
        isPasrau: Boolean,
        recalculated: Boolean,
        isValid: {type: Boolean, index: true}
    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    schema.virtual('clientId').get(function () {
        return this.dossier.clientId;
    });
    schema.virtual('organisme').get(function () {
        return this.dossier.organisme.name;
    });
    schema.virtual('organismeId').get(function () {
        return this.dossier.organisme.id;
    });

    return mongoose.model("Right", schema);
};
