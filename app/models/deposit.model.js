const {Schema} = require("mongoose");
module.exports = (mongoose, AutoIncrementDeposit) => {
    var schema = mongoose.Schema({
        type: {type: String, index: true},
        month: String,
        reference: {type :Number, index: true},
        lastName: String,
        firstName: String,
        ssn: String,
        employer: String,
        user: mongoose.model.User,
        client: mongoose.model.Client,
        created: Date,
        merged: Date,
        email: String,
        isValidEmail: Boolean,
        state: {type: String, index: true},
        checkboxes: {},
        errors: {},
        files: [{type: mongoose.model.DepositFile, ref: 'File'}],
        confirmation: String,
        confirmationUri: String,
        confirmationBlob: Schema.Types.Mixed,
        folder: {type: String, index: true},
        url: String,
        withEvent: {type: Boolean, index: true},
        incomplete: Boolean,
        deviceInfo: {}
    });

    schema.plugin(AutoIncrementDeposit, {id: 'deposit',inc_field: 'reference'});
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("Deposit", schema);
};
