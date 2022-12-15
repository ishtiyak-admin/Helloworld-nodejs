
const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();

// const options = {
//   key: fs.readFileSync('/etc/ssl/arrange/private.key'),
//   cert: fs.readFileSync('/etc/ssl/arrange/certificate.crt')
// };

// app.use("/", (req, res) => {
// 	res.sendFile(path.resolve(__dirname,"public/index.html") );
// })


// app.listen(443, () => {console.log("server running at 443")});

// httpsOn.createServer(options, app).listen(443);
// https.createServer(options, function (req, res) {
//   res.writeHead(200);
 
// }).listen(443);


var httpsOn = require('https');
var privateKey = fs.readFileSync(
  "/etc/ssl/arrange/private.key",
  "utf8"
);
var certificate = fs.readFileSync(
  "/etc/ssl/arrange/certificate.crt",
  "utf8"
);

var credentials = { key: privateKey, cert: certificate };

var https = httpsOn.createServer(credentials, app);
app.use(express.static(__dirname + "/public"));


var server = https.listen(443, () => {
  console.log("Well done, now I am listening on ", 443);
});
