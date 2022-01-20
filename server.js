#!/usr/bin/env node

var httpProxy = require("http-proxy");
const mkcert = require("mkcert");

console.log("This proxy server routes https://localhost:8545 traffic to http://34.89.71.95:7545");
try {
  mkcert
    .createCA({
      organization: "Torus Labs",
      countryCode: "SG",
      state: "Singapore",
      locality: "Singapore",
      validityDays: 365,
    })
    .then((ca) =>
      mkcert.createCert({
        domains: ["127.0.0.1", "localhost"],
        validityDays: 365,
        caKey: ca.key,
        caCert: ca.cert,
      }),
    )
    .then((cert) => {
      httpProxy
        .createServer({
          target: {
            host: "34.89.71.95",
            port: 7545,
          },
          ssl: {
            key: cert.key,
            cert: cert.cert,
          },
        })
        .listen(8545);
    });
} catch (e) {
  console.log("Error occured, is ganache running on port 7545?");
}
