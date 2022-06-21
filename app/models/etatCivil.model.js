module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        user: mongoose.model.User,
        dossiers: [{type: mongoose.model.Dossier, ref: 'Dossier'}],
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
