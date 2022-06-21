const {Schema} = require("mongoose");
module.exports = (mongoose, AutoIncrementDeposit) => {
    var schema = mongoose.Schema({
        type: {type: String, index: true},
        month: String,
        reference: {type :Number, index: true},
        lastName: {type: String, index: true},
        firstName: {type: String, index: true},
        ssn: String,
        employer: String,
        user: {type: mongoose.Schema.ObjectId, ref: 'User'},
        client: {type: mongoose.Schema.ObjectId, ref: 'Client'},
        created: {type: Date, index: true},
        merged: {type: Date, index: true},
        email: String,
        isValidEmail: Boolean,
        state: {type: String, index: true},
        checkboxes: {},
        errors: {},
        files: [{type: mongoose.Schema.ObjectId, ref: 'DepositFile'}],
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
