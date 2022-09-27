import React from 'react';
import useNote from '../../hooks/useNote';
import useNotes from '../../hooks/useNotes';
import EditModal from './EditModal';

import NoteCard from './NoteCard';

const NoteShow = () => {
    const [notes] = useNotes();
    const [card, setCard] = useNote();

    return (
        <div className='mt-10'>
            <div>

                <h2 className='text-gray-600 p-2 bg-slate-200 text-lg font-bold pl-4'> Show Your Created Goal</h2>

            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 lg:px-64 px-8 mt-24 mb-6'>
                {
                    notes.map(note => <NoteCard
                        key={note._id}
                        note={note}
                        setCard={setCard}
                    ></NoteCard>)
                }
            </div>
            {card && <EditModal card={card}></EditModal>}
        </div>
    );
};

export default NoteShow;