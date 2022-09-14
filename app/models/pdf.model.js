module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        title: String,
        resume: String,
        organisme: {type: mongoose.Schema.Types.ObjectId, ref:'Organisme'},
        path: String,
        client: {type: mongoose.Schema.Types.ObjectId, ref:'Client'},
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
