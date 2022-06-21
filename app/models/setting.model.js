module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        maxSyncClients: Number,
        delaySyncClients: Number,
        frequenceSyncClients: Number,
        refreshSyncClients: Number,
        waitSyncClients: Number,
        retrySyncClients: Number,
        dateSyncClients: Date,
        maxRows: Number,
        maxRetryUser: Number,
        logLevel: Number,
        backupTime: Number,
        backupFrequence: Number,
        backupFirst: Number,
        backupLogsTime: Number,
        lastDeposit: Number,
        usersDocumentsFirst: Number,
        usersDocumentsTime: Number,
        usersDocumentsFrequence: Number,
        lastPdfPosition: Number,
    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("Setting", schema);
};
