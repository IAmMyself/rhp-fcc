var http = require('http');
var path = require('path');
var express = require('express');
var fs = require('fs');
var url = require('url');


var server = http.createServer(function (req, res) {
  console.log("Server begins")
    var request = req.headers;
    var system = request["user-agent"].split('(')[1].split(")")[0];
    res.end(JSON.stringify({"IP address": request["x-forwarded-for"], 'Language': request["accept-language"], "System": system}));
  })
server.listen(process.env.PORT)

