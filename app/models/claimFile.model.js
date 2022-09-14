module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        claim: {type: mongoose.Schema.Types.ObjectId, ref: 'Claim'},
        sequence: {type: Number, index: true},
        name: String,
        size: Number,
        lastModifiedDate: Date,
        type: String,
        dataUri: String,
        status: String,
        errors: {}
    });
    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("ClaimFile", schema);
}
