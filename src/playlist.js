// Playlist model
class Playlist {
    constructor() {
        this.songs = [];
    }

    addSong(song) {
        const newSong = {
            ...song,
            playCount: 0,
        };
        this.songs.push(newSong);
    }

    getSong(index) {
        if (index >= 0 && index < this.songs.length) {
            return this.songs[index];
        }
        return null;
    }

    playSong(index) {
        if (index >= 0 && index < this.songs.length) {
            this.songs[index].playCount++;
            return true;
        }
        return false;
    }

    getAllSongs() {
        return this.songs;
    }

    getMostPlayedSongs() {
        const sortedSongs = [...this.songs].sort((a, b) => b.playCount - a.playCount);
        return sortedSongs;
    }
}

module.exports = Playlist;