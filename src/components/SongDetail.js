import React from 'react';

import { connect } from 'react-redux';


const SongDetail = ({ song }) => {
        if (!song) {
            return <div><h3>Select a song</h3></div>
        }
        return (
            <div>
                <h3>Playing...</h3>
                <h4 style={{ color: "blue" }}>{song.title}</h4>
                <i>{song.duration}</i>
            </div>
        )
};



const mapStateToProps = (state) => {
    return {song: state.selectSong};
};

export default connect(mapStateToProps) (SongDetail);