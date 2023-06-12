const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('js-yaml');
const fs = require('fs');

const swaggerDocument = YAML.load(fs.readFileSync('./openapi.yaml', 'utf8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.post('/boapi/v1/farm', (req, res) => {
    // Gelen istekten gerekli bilgileri alalım.
    let walletAddress = req.body.walletAddress;
    let walletChainId = req.body.walletChainId;
    let farmValueCent = req.body.farmValueCent;
    let farmDurationDays = req.body.farmDurationDays;
    let farmPercentPer30Days = req.body.farmPercentPer30Days;

    // Kontrol amaçlı konsola bilgileri yazdıralım
    console.log(`walletAddress: ${walletAddress}`);
    console.log(`walletChainId: ${walletChainId}`);
    console.log(`farmValueCent: ${farmValueCent}`);
    console.log(`farmDurationDays: ${farmDurationDays}`);
    console.log(`farmPercentPer30Days: ${farmPercentPer30Days}`);

    // Basit bir yanıt verelim.
    res.json({status: 'success', message: 'Farm data received'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

