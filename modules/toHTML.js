const fs = require('fs');

exports.toHTML = async(data) => {
  return new Promise(function(resolve, reject) {

    let html = `<html>
    <body style="margin:0px">
    <link rel='stylesheet' href='../stylesheets/style.css' />
    <link href="https://fonts.googleapis.com/css?family=Graduate:300,400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Orbitron:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script>
    ${data.html}
    <script>
      window.addEventListener("DOMContentLoaded", () => {
        let timeline = anime.timeline({ loop: false, autoplay: true });
        ${data.animation} initiate();
      });
    </script>
    </body>
    </html>`;

    fs.writeFileSync("./public/output/animation.html", html);

    resolve('success');

  });
};