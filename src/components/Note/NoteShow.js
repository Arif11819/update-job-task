import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useNote from '../../hooks/useNote';
import EditModal from './EditModal';
import './NoteShow.css'

import NoteCard from './NoteCard';

const NoteShow = () => {
    const [card, setCard] = useNote();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);

    const [notes, setNotes] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/notes?page=${page}&size=${size}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [notes]);

    useEffect(() => {
        fetch('http://localhost:5000/noteCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 3);
                setPageCount(pages);
            })
    }, [])

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
            <div className='mb-20 mt-10 pagination'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                }

                <select className='border border-orange-500' onChange={e => setSize(e.target.value)}>
                    <option value="3" selected>3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            {card && <EditModal card={card}></EditModal>}
        </div>
    );
};

export default NoteShow;