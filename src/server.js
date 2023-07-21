// Import
const express = require('express');
const Playlist = require('./playlist');

// Init express
const app = express();
app.use(express.json());

// Create Playlist model
const playlist = new Playlist();

// add song to playlist
app.post('/playlist/add', (req, res) => {
    const {
        title,
        artists,
        url
    } = req.body;
    const song = {
        title,
        artists,
        url,
    };
    playlist.addSong(song);
    res.status(201).json({
        message: 'Song added to the playlist'
    });
});

// Playing a song
app.post('/playlist/play/:index', (req, res) => {
    const index = req.params.index;
    const success = playlist.playSong(index);
    if (success) {
        res.status(200).json({
            message: `Playing song at index ${index}`
        });
    } else {
        res.status(404).json({
            message: 'Song not found'
        });
    }
});

// get playlist
app.get('/playlist', (req, res) => {
    const songs = playlist.getAllSongs();
    res.status(200).json(songs);
});

// get songs sorted by most played
app.get('/playlist/most-played', (req, res) => {
    const mostPlayedSongs = playlist.getMostPlayedSongs();
    res.status(200).json(mostPlayedSongs);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});