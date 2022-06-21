module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        activity: {type: mongoose.Schema.Types.ObjectId, ref: 'Activity'},
        right: {type: mongoose.Schema.Types.ObjectId, ref: 'Right'},
        datePaiement: Date,
        periodDu: Date,
        periodAu: Date,
        evenementDu: Date,
        evenementAu: Date,
        codeEvenement: Number,
        motifNeutralisation: String,
        employeur: String,
        nbHeure: Number,
        montantSalaireBrut: Number,
        moduleFormationDu: Date,
        moduleFormationAu: Date,
        nbHeureFormation: Number,
        sanctionDu: Date,
        timestamps: Date
    });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    schema.virtual('organisme').get(() => {
        return this.activity.dossier.organismeName
    });
    schema.virtual('organismeId').get(() => {
        return this.activity.dossier.organismeId
    });
    schema.virtual('situation').get(() => {
        return this.activity.situation
    });

    return mongoose.model("Event", schema);
};
