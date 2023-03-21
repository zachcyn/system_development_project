require('dotenv').config()
const mongoose = require('mongoose');

const MaleDB = mongoose.createConnection(process.env.MALEDB_URI);
MaleDB.model('Player', require('./models/Player'));
MaleDB.model('Game', require('./models/Games'));

const FMaleDB = mongoose.createConnection(process.env.FMALEDB_URI);
FMaleDB.model('Player', require('./models/Player'));
FMaleDB.model('Game', require('./models/Games'));

const TournDB = mongoose.createConnection(process.env.TOURNDB_URI);
TournDB.model('RankingPoints', require('./models/RankingPoints'));
TournDB.model('Tournament', require('./models/Tournament'));

const AccDB = mongoose.createConnection(process.env.ACCDB_URI);
AccDB.model('User', require('./models/User'));

module.exports = {
    MaleDB: MaleDB,
    FmaleDB: FMaleDB,
    TournDB: TournDB,
    AccDB: AccDB,
};