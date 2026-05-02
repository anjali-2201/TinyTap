const express = require("express");
const connectToMongoDB = require("./connect.js");
const urlRoute = require('./routes/url');
const dotenv = require('dotenv');
const URL = require('./models/url');

const app = express();
dotenv.config();
const PORT = Number(process.env.PORT) || 8001;

connectToMongoDB(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB error:", err));

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortID", async (req, res) => {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate(
    {
        shortID: shortID
    }, 
    { 
        $push: {
            visitHistory: {
                timestamp:  Date.now()
            },
        },
    }
    );

    res.redirect(entry.redirectURL);

});



app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))