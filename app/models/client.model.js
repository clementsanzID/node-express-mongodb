
module.exports = (mongoose, AutoIncrementClient) => {
    var schema = mongoose.Schema({
        sequence: Number,
        name: {type: String, trim: true, index: true},
        termination: {type :Date, index: true},
        isActive: Boolean,
        db: {type: String, trim: true, index: true},
        server: {type: String, trim: true},
        port: Number,
        user: {type: String, trim: true},
        password: {type: String, trim: true},
        syncLast: Date,
        syncRunning: {type :Boolean, index: true},
        syncFrequence: Number,
        syncError: String,
        secret: {type: String, trim: true},
        proxyServer: {type: String, trim: true},
        proxyPort: {type: String, trim: true},
        logLevel: Number,
        created: Date,
        updated: Date,
        notifications: Object,
        options: Object,
        syncKeys: Object,
        syncNone: Boolean,
        syncTime: Number,
        folder: Object,
        ranorex: Boolean
    });
    schema.plugin(AutoIncrementClient, {id: 'client',inc_field: 'sequence'});
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    return mongoose.model("Client", schema);
};
