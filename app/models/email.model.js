module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        client: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        type: Number,
        contentType: String,
        from: String,
        to: String,
        cc: String,
        bcc: String,
        subject: String,
        body: String,
        created: Date,
        sent: Date,
        withError: Boolean,
        error: {},
        attachments: {},
        claims: [{type: mongoose.Schema.Types.ObjectId, ref: 'Claim'}]
    });
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    return mongoose.model("Email", schema);
};
