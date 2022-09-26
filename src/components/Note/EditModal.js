import React from 'react';
import { useForm } from 'react-hook-form';


const DetailModal = ({ card }) => {
    const { name } = card;
    const { register, handleSubmit, reset } = useForm();
    return (
        <div>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-3xl font-bold">Edit For : {name}'Note</h3>
                    <div className='pt-10'>
                        <label className='text-md font-bold' htmlFor="noteDes">Description</label> <br />

                        <textarea className='border p-2 border-slate-500 rounded-sm w-full' name="noteDes" cols="30" rows="6" placeholder='Write here...' {...register("noteDes")}></textarea>
                    </div>
                    <button className='btn btn-info'>Confirm Edit</button>
                </div>
            </div>
        </div >
    );
};

export default DetailModal;