const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
const AutoIncrementUser = require('mongoose-sequence')(mongoose);
const AutoIncrementClient = require('mongoose-sequence')(mongoose);
const AutoIncrementClaim = require('mongoose-sequence')(mongoose);
const AutoIncrementDeposit = require('mongoose-sequence')(mongoose);
const AutoIncrementLog = require('mongoose-sequence')(mongoose);
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.Tutorial = require("./tutorial.model.js")(mongoose);
db.Activation = require("./activation.model.js")(mongoose);
db.Activity = require("./activity.model.js")(mongoose);
db.Claim = require("./claim.model.js")(mongoose, AutoIncrementClaim);
db.ClaimFile = require("./claimFile.model.js")(mongoose);
db.Client = require("./client.model.js")(mongoose, AutoIncrementClient);
db.Connexion = require("./connexion.model.js")(mongoose);
db.ConnexionStat = require("./connexionStat.model.js")(mongoose);
db.Deposit = require("./deposit.model.js")(mongoose, AutoIncrementDeposit);
db.DepositFile = require("./depositFile.model.js")(mongoose);
db.Dossier = require("./dossier.model.js")(mongoose);
db.Email = require("./email.model.js")(mongoose);
db.EtatCivil = require("./etatCivil.model.js")(mongoose);
db.Event = require("./event.model.js")(mongoose);
db.Log = require("./log.model.js")(mongoose,AutoIncrementLog);
db.Notice = require("./notice.model.js")(mongoose);
db.Notification = require("./notification.model.js")(mongoose);
db.Organisme = require("./organisme.model.js")(mongoose);
db.OrganismeSiret = require("./organismeSiret.model.js")(mongoose);
db.Pdf = require("./pdf.model.js")(mongoose);
db.Pending = require("./pending.model.js")(mongoose);
db.Process = require("./process.model.js")(mongoose);
db.Recipient = require("./recipient.model.js")(mongoose);
db.Refence = require("./reference.model.js")(mongoose);
db.Right = require("./right.model.js")(mongoose);
db.Setting = require("./setting.model.js")(mongoose);
db.User = require("./user.model.js")(mongoose, AutoIncrementUser);

module.exports = db;
