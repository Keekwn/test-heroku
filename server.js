const express = require('express');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const swaggerDocument = YAML.load(path.join(__dirname, 'openapi.yaml'));

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.post('/boapi/v1/farm', function(req, res) {
    // Burada POST isteği için işlem yapılır.
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
