const express = require('express')
const path = require('path')
const app = express()
var ip = require("ip");

const { collectDefaultMetrics, register } = require('prom-client');

collectDefaultMetrics({
	timeout: 10000,
	gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5], // These are the default buckets.
});

console.log(register.metrics());

var cors = require("cors");
app.use(express.static(path.join(__dirname, 'build')))
app.use(cors());
app.get('/message', (req, res) => {
  return res.send(process.env.PAGE_TITLE)
})
app.get('/color', (req, res) => {
  if (process.env.PAGE_COLOR==="Blue" || process.env.PAGE_COLOR==="blue")
    return res.send("#053354")
  if (process.env.PAGE_COLOR==="Green" || process.env.PAGE_COLOR==="green")
    return res.send("#002e0e")
  if (process.env.PAGE_COLOR==="Red" || process.env.PAGE_COLOR==="red")
    return res.send("#360300")
  if (process.env.PAGE_COLOR==="Black" || process.env.PAGE_COLOR==="black")
    return res.send("#262626")
  return res.send("#262626")
})
app.get('/version', (req, res) => {
  return res.send(process.version)
})
app.get('/ipaddress', (req, res) => {
  return res.send(ip.address())
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Setup server to Prometheus scrapes:

app.get('/metrics', async (req, res) => {
	try {
		res.set('Content-Type', register.contentType);
		res.end(await register.metrics());
	} catch (ex) {
		res.status(500).end(ex);
	}
});
const port = process.env.PORT || 8080;
console.log(
	 	`Server listening to ${port}, metrics exposed on /metrics endpoint`,
);
app.listen(8080)
