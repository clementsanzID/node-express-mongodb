module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        key: {type: String, index: true},
        added: Date,
        activated: String,
        removed: String,
        data: {},
        ssn: String,
    });
    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    schema.virtual('isActivated').get(function () {
        return this.activated != null & this.activated !== new Date(0,0,0);
    });
    schema.virtual('isRemoved').get(function () {
        return this.removed != null & this.removed !== new Date(0,0,0);
    });

    return mongoose.model("Activation", schema);
}
