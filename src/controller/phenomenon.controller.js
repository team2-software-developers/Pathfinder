const {Phenomenon} = require("../models/phenomenon.model");

exports.getPhenomenon = async (req, res) => {
    try{
        res.status(200).send(req.Phenomenon);
    }catch (error) {
        res.status(500).send({message: "Phenomenon not found"});
    };

    
};

