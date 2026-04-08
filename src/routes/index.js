const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is for testing purposes that live code is working or joker!");
});

module.exports = router;