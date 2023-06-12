const express = require('express');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');

const swaggerDocument = YAML.load('./openapi.yaml');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.post('/boapi/v1/farm', function(req, res) {
    // POST isteği için burada işlemler yapılır.
});

// Sunucuyu başlat
const port = process.env.PORT || 5000;  // Heroku tarafından dinlenmesi gereken portu belirtir
app.listen(port, () => {
    console.log(`Server ${port} numaralı portta çalışıyor.`);
});
