module.exports = (mongoose, AutoIncrementUser) => {
    var schema = mongoose.Schema({
        created: {type: Date, index: true},
        client: mongoose.model.Client,
        user: mongoose.model.User,
        email: mongoose.model.Email,
        data: {},
        type: String,
        claimFiles: [mongoose.model.ClaimFile],
        reference: {type: Number, index: {unique: true}},
        firstName: {type: String, index: true},
        lastName: {type: String, index: true},
        state: String
    });
    schema.plugin(AutoIncrementUser, {id: 'claim', inc_field: 'reference'});
    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("Claim", schema);
}
