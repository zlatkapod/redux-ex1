import React from 'react';
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

const App = () => {

    return (
        <div className="ui container grid" style={{ marginTop: "25px" }}>
            <div className="ui row">
                <div className="eight wide column">
                    <SongList />
                </div>
                <div className="eight wide column" style={{ alignText: "center" }}>
                    <SongDetail />
                </div>
            </div>
        </div>

    )
};

export default App;