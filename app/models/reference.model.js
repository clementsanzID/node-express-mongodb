module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        year: {type: Number, index: true},
        start: {type: Date, index: true},
        end: {type: Date, index: true}
    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.ID = _id;
        return object;
    });

    return mongoose.model("Reference", schema);
};
