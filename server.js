const express = require('express');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = YAML.load('./openapi.yaml');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.post('/boapi/v1/farm', function(req, res) {
    // Burada POST isteği için işlem yapılır.
  });
// Sunucunuzu başlatın
const port = process.env.PORT || 5000;  // Heroku, dinlenmesi gereken portu belirtir
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
