module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        logs: [{type: mongoose.model.Log}],
        name: String,
        path: String,
        icon: String,
        type: String,
        alwaysup: Boolean,
        loaded: Date,
        started: Date,
        stopped: Date,
        connections: Number,
        error: String,
        state: String,
        task: Number

    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    schema.virtual('isRunning').get(function () {
        var now = new Date();
        var running = this.started != null & this.stopped == null ;
        running = running & new Date(this.started) <= now;
        return running;
    });

    schema.virtual('logging').get(function () {
        return this.logs.length > 0;
    });

    return mongoose.model("Recipient", schema);
};
