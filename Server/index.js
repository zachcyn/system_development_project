const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dev:dev123@tennisdata.fxv0bhm.mongodb.net/?retryWrites=true&w=majority")

const app = express();

app.get("/getPlayers", (req, res) => {

})

app.listen(3001, () => {
    console.log("Server is servering...");
})

