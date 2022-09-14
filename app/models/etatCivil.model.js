module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true},
        dossiers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Dossier'}],
        qualite: String,
        nom: String,
        prenom: String,
        ssn: String,
        cle: String,
        adresse: {},
        codePostal: String,
        ville: String,
        telephone: String,
        mobile: String,
        email: String,
        emails: {},
        dateNaissance: Date,
        lieuNaissance: String
    });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("EtatCivil", schema);
};
