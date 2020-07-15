const createTorrent = require("create-torrent");
const fs = require("fs");

createTorrent("D:/英雄时刻", (err, torrent) => {
  console.log(err);
  console.log(torrent);
  if (!err) {
    // `torrent` is a Buffer with the contents of the new .torrent file
    fs.writeFile("my.torrent", torrent, (err) => {
      console.log(err);
    });
  }
});
