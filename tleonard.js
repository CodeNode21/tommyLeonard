const http = require("http");
const hostname = "localhost";
const port = 3001;

const content = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name='robots' content='index, follow'/>

<title>Tommy Leonard</title>
<link href="" />
<link href="css/style.css" rel="stylesheet" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet">
</head>
<body>
<div class="content">
  <header class="hero">
    <div class="hero-image">
      <img src="./assets/headerTitle.png" alt="Tommy Leonard" />
      <!-- <img src="./assets/crisp1.jpg" alt="legendary" /> -->
    </div>
  </header>
<div class="links">
<div class="link apple">
  <a href="https://music.apple.com/us/artist/tommy-boy/1547198156">
    Apple Music
  </a>
</div>
<div class="link spotify">
  <a
    href="https://open.spotify.com/artist/39SZhrlotMDfYHfzKwyF2R?si=qMMZmHaJTPaMcb2FsO2DEA&dl_branch=1"
  >
    Spotify
  </a>
</div>
<div class="link youtube">
  <a href="https://www.youtube.com/channel/UCWSXcd6mBV5bFX-W5m0TclQ"
    >YouTube</a
  >
</div>
<div class="link ig">
  <a href="https://www.instagram.com/tommyleonardjr/">Instagram</a>
</div>
<div class="link twitter">
  <a href="https://twitter.com/tommyleonardjr/">Twitter</a>
</div>
<div class="link tiktok">
  <a href="https://www.tiktok.com/@tommyleonardjr/">TikTok</a>
</div>
</div>
<footer class="footer">2023 Leonard Ent.</footer>
</div>
</body>
</html>

`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(content);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
