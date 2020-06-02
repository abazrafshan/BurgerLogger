var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// Create the `router` for the app, and export 
// the `router` at the end of your file
router.get("/", (req,res) => {
    burger.selectAll(data => {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burgername", "devoured"
        ], [
    req.body.burgername, req.body.devoured
        ], result => {
    res.json({ id: result.insertId});
        });
});

router.put("/api/burgers/:id", (req,res) => {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;