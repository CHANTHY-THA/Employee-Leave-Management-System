const imageRoute = require("express").Router();
const fs = require("fs");

imageRoute.get("/*", async (req, res) => {
    // console.log("🚀 ~ imageRoute.get ~ req:", req.params[0])
    const image = req.params[0];
    // `../backend/images/${req.params.id}`,
    try {

        fs.readFile(
            `images/${image}`,

            function (err, image) {
                if (err) {
                    throw err;
                }
                console.log(image);

                res.setHeader('Content-Type', 'image/jpg');
                res.setHeader('Content-Length', ''); // Image size here
                res.setHeader('Access-Control-Allow-Origin', '*'); // If needs to be public
                res.send(image);
            }
        );
    } catch (err) {
        console.log("Error Message: " + err.message);
        res.status(500).send({ id: 0, message: "Something went wrong." })
    }

});

module.exports = imageRoute;