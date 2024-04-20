const axios = require("axios");
const Utils = require("./lib/utils");

//Download Tiktok Video / Images 
function tiktok(url) {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error("url input is required"));
    axios.get(Utils.Rulz + "/download", { params: { url } })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
}

//Get Tiktok User info
function stalk(query) {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error("query is required"));
    axios.get(Utils.Rulz + "/tiktokStalk", { params: { query } })
      .then((stalker) => resolve(stalker.data))
      .catch(reject);
  });
}

//Chat With Gemini ai
function gemini(query) {
  return new Promise((resolve, reject) => {
    if (!query) return reject(new Error("query is required"));
      axios.get(Utils.Rulz + "/gemini", { params: { query } })
      .then((gemini) => resolve(gemini.data))
      .catch(reject);
  });
}

//Chat With Blackbox ai
function blackbox(query) {
  return new Promise((resolve, reject) => {
    if (!query) return reject(new Error("query is required"));
      axios.get(Utils.Rulz + "/blackbox", { params: { query } })
      .then((blackbox) => resolve(blackbox.data))
      .catch(reject);
  });
}

//Spotify Downloader:v
function spotify(url) {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error("url input is required"));
      axios.get(Utils.Rulz + "/spotify", { params: { url } })
      .then((spotify) => resolve(spotify.data))
      .catch(reject);
  });
}

module.exports = { tiktok, stalk, gemini, blackbox, spotify };
