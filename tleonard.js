const http = require('http');
const hostname = 'localhost';
const port = 3001;

const content =`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>tommyLeonard</title>
  <link href=""/>
  <link href="css/style.css" rel="stylesheet" />
</head>
<body>  
  <header>
    <div class='image'>image</div>
    <div class='handle'><a>@tommyleonard</a></div>
    <div class='bio'>Rapper, Singer, Producer</div>
  </header>
  <div class='links'>
    <div class='link'><a>Apple Music</a></div>
    <div class='link'><a>Spotify</a></div>
    <div class='link'><a>YouTube Link</a></div>
  </div>
  <div class='qrCode'>QR Code</div>
  <footer></footer>
  
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(content);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})