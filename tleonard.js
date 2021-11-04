
const http = require('http');
const hostname = 'localhost';
const port = 3001;

const content =`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tommy Leonard</title>
    <link href="" />
    <link href="css/style.css" rel="stylesheet" />
  </head>
  <body>
    <div class='content'>
      <header  class="hero">
        <div class="image">
          <img src="./assets/tommyBoi.png" alt="legendary" />
        </div>
        <div class="handle">
          <a href="https://instagram.com/tommyleonardjr?utm_medium=copy_link"
            >@tommyleonardjr</a
          >
        </div>
        <div class="bio">Rapper | Singer | Producer</div>
      </header>
      <div class='video'>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NCzUE3aRNOM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="links">
        <div class="link apple">
          <!-- <img src="assets/itunes.png" /> -->
          <a href="https://music.apple.com/us/artist/tommy-boy/1547198156">Apple Music </a>
        </div>
        <div class="link spotify">
          <!-- <img src="assets/spotify.png"/> -->
          <a
            href="https://open.spotify.com/artist/39SZhrlotMDfYHfzKwyF2R?si=qMMZmHaJTPaMcb2FsO2DEA&dl_branch=1"
            >Spotify</a
          >
        </div>
        <div class="link youtube">
          <!-- <img src="assets/youtube.png"/> -->
          <a href="https://www.youtube.com/channel/UCWSXcd6mBV5bFX-W5m0TclQ"
            >YouTube</a
          >
        </div>
        <div class="link ig">
          <!-- <img src="assets/instagram.png"/> -->
          <a href="https://www.instagram.com/tommyleonardjr/">Instagram</a>
        </div>
      </div>
      <footer class="footer">2021 Leonard Ent.
      </footer>

    </div>
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
