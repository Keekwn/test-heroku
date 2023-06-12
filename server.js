const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('js-yaml');
const fs = require('fs');

const swaggerDocument = YAML.load(fs.readFileSync('./openapi.yaml', 'utf8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.post('/boapi/v1/farm', (req, res) => {
    // Request body'den veriyi al
    const { walletAddress, walletChainId, farmValueCent, farmDurationDays, farmPercentPer30Days } = req.body;

    // Yeni bir çiftlik objesi oluştur
    const newFarm = {
        walletAddress: walletAddress || '',
        walletChainId: walletChainId || 56,
        farmValueCent: farmValueCent || 0,
        farmDurationDays: farmDurationDays || 120,
        farmPercentPer30Days: farmPercentPer30Days || 2500,
        // ...
        // Diğer gerekli bilgiler buraya gelebilir
    };

    // Veritabanına yeni bir çiftlik ekleyin (Örnek Firestore)
    db.collection('farms').add(newFarm)
        .then(() => {
            res.status(201).json({message: 'Farm created successfully', farm: newFarm});
        })
        .catch(error => {
            res.status(500).json({message: 'An error occurred: ', error});
        });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

