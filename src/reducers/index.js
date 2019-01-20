import { combineReducers } from 'redux';

const songReducer = (song) => {
    return [
        { title: "Oops I did it Again", duration: "02:23"},
        { title: "Survivor", duration: "05:51"},
        { title: "Waterfalls", duration: "03:49"},
        { title: "Everybody...", duration: "09:13"},
        { title: "Genie in the bottle", duration: "01:11"}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECT") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectSong: selectedSongReducer
});