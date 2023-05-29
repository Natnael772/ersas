const express = require("express");
const Admin = require("../models/admin");
const User = require("../models/user");

//Add admin
exports.addAdmin = (req, res, next) => {
  const { fname, lname, email, password, role } = req.body;
  
};
