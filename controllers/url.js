const { nanoid } = require("nanoid");
const UrlModel = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  try {
    const { url } = req.body;

    console.log("INPUT:", url);

    if (!url) {
      console.log("EMPTY URL");

      return res.status(400).json({
        error: "URL is required",
      });
    }

    const urlRegex = /^https?:\/\/([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;

    console.log("REGEX RESULT:", urlRegex.test(url));

    if (!urlRegex.test(url)) {
      console.log("INVALID URL");

      return res.status(400).json({
        error: "Please enter a valid URL",
      });
    }

    console.log("VALID URL");

    // create short url below
    const shortID = nanoid(8);

    await UrlModel.create({
      shortID: shortID,

      redirectURL: url,

      visitHistory: [],
    });

    return res.json({
      id: shortID,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      error: error.message,
    });
  }
}

async function handleGetAnalytics(req, res) {
  try {
    const shortID = req.params.shortID;

    const result = await UrlModel.findOne({
      shortID: shortID,
    });

    if (!result) {
      return res.status(404).json({
        error: "Short URL not found",
      });
    }

    return res.json({
      totalClicks: result.visitHistory.length,

      analytics: result.visitHistory,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      error: error.message,
    });
  }
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
