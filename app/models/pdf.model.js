module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        title: String,
        resume: String,
        organisme: mongoose.model.Organisme,
        path: String,
        client: mongoose.model.Organisme,
        clients: {},
        position: Number,
    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });


    return mongoose.model("Pdf", schema);
};
