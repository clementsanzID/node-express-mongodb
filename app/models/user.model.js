module.exports = (mongoose, AutoIncrementUser) => {
    var schema = mongoose.Schema({
        sequence: {type: Number, unique: true},
        created: Date,
        state: {type: String, trim: true, index: true},
        login: {type: String, index: true},
        hashKey: String,
        accessLevel: Number,
        quality: String,
        lastName: {type: String, index: true},
        firstName: {type: String, index: true},
        ssn: {type: String, index: true},
        email: String,
        expires: Date,
        phone: {type: String},
        birthCity: String,
        birthCountry: String,
        birthDate: Date,
        security: Object,
        token: Number,
        loaded: {type: Date, index: true},
        client: String,
        isValidEmail: {type: Boolean, index: true},
        modules: {},
        connectedLast: Date,
        etatCivils: [{type: mongoose.Schema.Types.ObjectId, ref: 'EtatCivil', index: true}],
        rights: [{type: mongoose.Schema.Types.ObjectId, ref :'Right'}],
        pendings: [{type: mongoose.Schema.Types.ObjectId, ref :'Pending'}],
        emails: [{type: mongoose.Schema.Types.ObjectId, ref :'Email'}],
        deposits: [{type: mongoose.Schema.Types.ObjectId, ref :'Deposit'}],
        connexions: [{type: mongoose.Schema.Types.ObjectId, ref :'Connexion'}],
        claims: [{type: mongoose.Schema.Types.ObjectId, ref :'Claim'}],
        userDocuments: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserDocument'}],

    });
    schema.plugin(AutoIncrementUser, {id: 'user', inc_field: 'sequence'});
    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    schema.virtual('name').get(function () {
        return this.firstName + ' ' + this.lastName
    });
    schema.virtual('isActive').get(function () {
        return this.state === 'ACTIVE';
    });
    schema.virtual('dataLoaded').get(function () {
        return this.loaded !== null
    });
    schema.virtual('dossiersCount').get(function () {
        return this.etatCivils.dossiers.length;
    });
    schema.virtual('hasExpired').get(function () {
        return this.expires && this.expires <= new Date();
    });
    schema.virtual('group').get(function () {
        var group = '';
        switch (this.accessLevel) {
            case 0:
                group = 'Administrateur Wakanda';
                break;
            case 1:
                group = 'Administrateur Système';
                break;
            case 2:
                group = 'Administrateur Exter';
                break;
            case 3:
                group = 'Administrateur Client';
                break;
            case 4:
                group = 'Gestionnaire Client';
                break;
            case 5:
                group = 'Utilisateur Client';
                break;
            case 6:
                group = 'Allocataire'
                break;
            default:
                group = 'Allocataire';
                break;
        }
        return group;
    });

    return mongoose.model("User", schema);
}
