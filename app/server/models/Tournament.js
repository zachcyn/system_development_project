const TSchema = new Schema({
name: String,
difficulty: Number,
prizeMoney: Object
});

const Tournament = mongoose.model("Tournament", TSchema);
