import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const DetailModal = ({ card }) => {
    const { _id, name } = card;

    const { register, handleSubmit, reset } = useForm();


    const updateNote = (data) => {

        const id = _id;
        const url = `http://localhost:5000/notes/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Successfully Update Your Note");
                    reset();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <form onSubmit={handleSubmit(updateNote)}>
                    <div className="modal-box bg-info">
                        <label for="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="text-3xl font-bold pt-4">Edit For : {name}'s Note</h3>
                        <div className='pt-10'>
                            <label className='text-md font-bold' htmlFor="noteDes">New Note</label> <br />

                            <textarea className='border p-2 border-slate-500 rounded-sm w-full' name="noteDes" cols="56" rows="6" placeholder='Write here...' {...register("noteDes")}></textarea>
                        </div>
                        <div className='flex justify-center my-5'>
                            <input type="submit" value='Confirm Edit' className='p-2 font-bold bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700  cursor-pointer' />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default DetailModal;