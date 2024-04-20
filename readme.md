# rul-scrape
[![Publish](https://github.com/rull2nd/v2scrape/actions/workflows/npm-publish-github-packages.yml/badge.svg)](https://github.com/rull2nd/v2scrape/actions/workflows/npm-publish-github-packages.yml)
<p>module scraper based rest apiruulzz</p>

## Features
- Download TikTok videos
- Download TikTok slide images
- Stalk User
- Gemini AI
- Blackbox AI
- Spotify Song Downloader

## Installation 
### NPM Version 
```bash
$ npm install rul-scrape
```
### GitHub Version 
```bash
$ npm install github:irull2nd/rul-scrape
```

## Usage
### Call teh function with variable 
```javascript
const rulz = require("rul-scrape");
```
### Download TikTok Video 
To download TikTok video / Images, use `Download` function with TikTok video URL parameter. 
```javascript
rulz.tiktok(url).then(data => {
    console.log(data)
});
```
### Stalk User by Username 
To stalk TikTok user, use `stalk` function with TikTok username parameter. 
```javascript
rulz.stalk(query).then(data => {
  console.log(data)
});
```
### Gemini Chat
To get chat ai `gemini` function with query parameter. 
```javascript
rulz.gemini(query).then(data => {
  console.log(data)
});
```
### Blackbox Chat
To get chat ai `blackbox` function with query parameter. 
```javascript
rulz.blackbox(query).then(data => {
  console.log(data)
});
```
### Spotify
To get song `spotify` function with url Spotify Song parameter. 
```javascript
rulz.spotify(url).then(data => {
  console.log(data)
});
```
