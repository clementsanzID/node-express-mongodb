module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        dossier: mongoose.model.Dossier,
        numeroMessage: {type: Number, index: true},
        timeStamp: Date,
        dateCreation: Date,
        commentaire: String,
        read: Date,
        init: Boolean,
        emails: [{type: mongoose.model.Email}]
    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    schema.virtual('isRead').get(function () {
        return this.read != null;
    });

    return mongoose.model("Notification", schema);
};
