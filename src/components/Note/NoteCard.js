import React from 'react';
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import useNotes from '../../hooks/useNotes';




const NoteCard = ({ note, setCard }) => {
    const { _id, name, role, date, noteDes } = note;

    const [notes, setNotes] = useNotes();

    const handleDelete = id => {

        const url = `https://blooming-fortress-88596.herokuapp.com/notes/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remainingNote = notes.filter(note => note._id !== id);
                setNotes(remainingNote);
            })

    }

    return (
        <div className="card w-80 h-84 bg-slate-50 shadow-xl border border-slate-200 text-slate-200">
            <div className="card-body pt-1 text-sm text-center mx-auto text-black mt-4 ml-4 mr-4 mb-4 rounded-lg flex flex-col">
                <div className='flex justify-end mb-2'>

                    <button onClick={() => handleDelete(_id)}>
                        <MdDelete className='text-red-700 text-3xl' />
                    </button>
                </div>

                <p className='text-xl font-bold text-center mb-2 border border-blue-400 p-2 rounded-md'>{name}</p>
                <h2 className='font-bold'>Role: {role}</h2>
                <h2 className='font-bold text-sm my-2'>Date: {date}</h2>
                <p>Note: <span className='text-slate-500'>{noteDes}</span></p>
                <div className='card-actions flex justify-end pt-5'>
                    <label
                        onClick={() => setCard(note)}
                        for="edit-modal"
                        className='flex justify-center items-center btn cursor-pointer btn-info'>
                        <FaEdit />
                        Edit
                    </label>
                </div>
            </div>

        </div >
    );
};

export default NoteCard;