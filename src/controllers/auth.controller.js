const authService = require("../services/authentification.service");
const { validationResult } = require("express-validator");

exports.register = (req, res) => {
    console.log("test register");
};

exports.login = (req, res) => {
    console.log("test login");
};