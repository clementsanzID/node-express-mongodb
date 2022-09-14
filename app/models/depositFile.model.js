const {Schema} = require("mongoose");
module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        sequence: {type: Number, index: true},
        kind: String,
        name: String,
        size: Number,
        lastModifiedDate: Date,
        type: String,
        uri: String,
        dataUri: Schema.Types.Mixed,
        status: String,
        errors: {},
        state: String
    });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("DepositFile", schema);
};
