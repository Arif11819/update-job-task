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






// import React from 'react';
// import { useQuery } from 'react-query';
// import { MdDelete } from 'react-icons/md'


// const NoteShow = () => {
//     const { data: noteData, isLoading, refetch } = useQuery('noteData', () => fetch('http://localhost:5000/notes', {
//         method: 'GET',
//     })
//         .then(res => res.json()))
//     refetch()
//     if (isLoading) {
//         return <p>Loading...</p>
//     }
//     const handleDelete = (id) => {
//         const url = `http://localhost:5000/notes/${id}`
//         fetch(url, {
//             method: 'DELETE',
//         })
//             .then(res => res.json())
//             .then(data => {
//                 refetch()
//             })
//     }
//     return (
//         <div>
//             <div>

//                 <h2 className='text-gray-600 p-2 bg-slate-200 text-lg font-bold pl-4'> Show Your Created Note</h2>

//             </div>
//             <div className='grid grid-cols-4 gap-3 my-10 mx-5'>
//                 {
//                     noteData?.map(note => <div key={note._id}>
//                         <div className='bg-sky-100 p-4 border-b-2 border-r-2 border-blue-400 shadow-lg shadow-blue-200 rounded-md'>
//                             <div className='flex justify-end mb-2'>

//                                 <button onClick={() => handleDelete(note._id)}>
//                                     <MdDelete className='text-red-700 text-xl' />
//                                 </button>
//                             </div>
//                             <p className='text-xl font-bold text-center mb-2 border border-blue-400 p-2 rounded-md'>{note.form.name}</p>
//                             <h2 className='font-bold'>Role: {note.form.role}</h2>
//                             <h2 className='font-bold text-sm my-2'>Date: {note.form.date}</h2>
//                             <p>Description: <span className='text-slate-500'>{note.form.noteDes}</span></p>
//                         </div>
//                     </div>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default NoteShow;