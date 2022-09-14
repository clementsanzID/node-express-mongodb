module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        NumeroSS: {type: String, index: true},
        NomBase: String,
        Organisme: String,
        DateCreate: Date
    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });


    return mongoose.model("Recipient", schema);
};
