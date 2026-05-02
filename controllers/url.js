const {nanoid} = require("nanoid");
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
    try {
        const body = req.body;

        if (!body.url) {
            return res.status(400).json({
                error: "URL is required"
            });
        }

        const existingURL = await URL.findOne({
            redirectURL: body.url
        });

        if (existingURL) {
            return res.json({
                id: existingURL.shortID
            });
        }

        const shortID = nanoid(8);

        await URL.create({
            shortID: shortID,
            redirectURL: body.url,
            visitHistory: [],
        });

        return res.json({
            id: shortID,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            error: error.message
        });
    }
}

async function handleGetAnalytics(req, res) {
    const shortID = req.params.shortID;

    const result = await URL.findOne({ shortID });

    if (!result) {
        return res.status(404).json({
            error: "Short URL not found"
        });
    }

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics
};