const express = require("express");
const app = express();
const httpProxy = require("http-proxy");
const apiProxy = httpProxy.createProxyServer();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // res.send(`
  //   <h1>Docker + Node</h1>
  //   <span>A match made in the cloud</span>
  // `);
  //res.redirect(proxy("http://backserver:80/")); 
  apiProxy.web(req, res, {target: "http://backserver:80/"});
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});