const express = require('express');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Sunucunuzu başlatın
const port = process.env.PORT || 5000;  // Heroku, dinlenmesi gereken portu belirtir
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
