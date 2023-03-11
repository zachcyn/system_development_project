const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  ID: String,
  Name: String,
  Points: Number,
  Money: Number
});

const MPlayer = mongoose.model("MPlayer", PlayerSchema);
const FPlayer = mongoose.model("FPlayer", PlayerSchema);

 