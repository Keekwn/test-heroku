var path = require('path');
var http = require('http');

var oas3Tools = require('oas3-tools');
var serverPort = process.env.PORT || 8080; // Heroku'nun belirlediği portu kullanın

// swaggerRouter konfigürasyonu
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'openapi.yaml'), options); // openapi.yaml dosyasının yolunu güncelleyin
var app = expressAppConfig.getApp();

// Swagger middleware'ini başlatın
http.createServer(app).listen(serverPort, function () {
    console.log('Serverınız %d numaralı portta dinleniyor (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui, http://localhost:%d/docs adresinde kullanılabilir durumda', serverPort);
    const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

});
