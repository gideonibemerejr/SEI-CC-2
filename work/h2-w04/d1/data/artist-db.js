const artists = [
  {
    artist: "Skepta",
    link:
      "https://open.spotify.com/artist/2p1fiYHYiXz9qi0JJyxBzN?si=unBTU4naTiegs8lAon7mXA"
  },
  {
    artist: "James Blake",
    link:
      "https://open.spotify.com/artist/53KwLdlmrlCelAZMaLVZqU?si=3J_VUktkRLe3kK8LyL49tg"
  },
  {
    artist: "Young Nudy",
    link:
      "https://open.spotify.com/artist/5yPzzu25VzEk8qrGTLIrE1?si=V1SapGmMS3-FUj84kyythQ"
  },
  {
    artist: "Burna Boy",
    link:
      "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa?si=dwoPt3dLRmayEnaM_ScMlg"
  }
];

module.exports = {
  getAll: function() {
    return artists;
  }
};
