module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        organisme: {type: mongoose.Schema.Types.ObjectId, ref: 'Organisme'},
        title: {type: String, index: true},
        kewords: {type: String, index: true},
        content: {type: String, index: true},
        htmlContent: String
    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });


    return mongoose.model("Notice", schema);
};
