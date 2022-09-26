import React from 'react';
import AddNotes from '../Note/AddNotes';
import NoteShow from '../Note/NoteShow';

const Home = () => {
    return (
        <div>
            <AddNotes></AddNotes>
            <NoteShow></NoteShow>
        </div>
    );
};

export default Home;