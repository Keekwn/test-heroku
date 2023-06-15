require('dotenv').config();

const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('js-yaml');
const fs = require('fs');


const swaggerDocument = YAML.load(fs.readFileSync('./openapi.yaml', 'utf8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());


function authenticate(req, res, next) {
  const apiKey = req.header('X-HLM-HUGS-API-KEY');
  if (!apiKey) {
      return res.status(401).json({status: 'error', message: 'Missing API key'});
  }
  
  if (apiKey !== process.env.API_KEY) {
      return res.status(403).json({status: 'error', message: 'Invalid API key'});
  }
  next();
}


app.post('/boapi/v1/farm', authenticate, (req, res) => {
    let walletAddress = req.body.walletAddress;
    let walletChainId = req.body.walletChainId;
    let farmValueCent = req.body.farmValueCent;
    let farmDurationDays = req.body.farmDurationDays;
    let farmPercentPer30Days = req.body.farmPercentPer30Days;

    console.log(`walletAddress: ${walletAddress}`);
    console.log(`walletChainId: ${walletChainId}`);
    console.log(`farmValueCent: ${farmValueCent}`);
    console.log(`farmDurationDays: ${farmDurationDays}`);
    console.log(`farmPercentPer30Days: ${farmPercentPer30Days}`);

  

    res.json({status: 'success', message: 'Farm data received'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
