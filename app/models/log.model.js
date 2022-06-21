module.exports = (mongoose, AutoIncrementLog) => {
    var schema = mongoose.Schema({
        process: {type: mongoose.model.Process, index: true},
        timestamps: {type: Date, index: true},
        task: String,
        type: String,
        message: String,
        context: {type: {}, index: true},
        sequence: {type: Number, index: true}
    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    schema.virtual('processId').get(() => {
        return this.process.id;
    });
    schema.virtual('processName').get(() => {
        return this.process.name;
    });
    schema.plugin(AutoIncrementLog, {id: 'log',inc_field: 'sequence'});
    return mongoose.model("Log", schema);
};
