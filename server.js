const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// YAML dosyasını yükle
const swaggerDocument = YAML.load(path.join(__dirname, 'openapi.yaml'));

// Swagger UI'nin /api-docs yolunda görüntülenmesini sağla
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Server'ı başlat
app.listen(port, () => {
  console.log(`Server ${port} numaralı portta çalışıyor.`);
});
