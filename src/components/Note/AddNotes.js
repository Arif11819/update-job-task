import React from 'react';
import { BsCheckLg } from 'react-icons/bs'
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";


const AddNotes = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {

        fetch('https://blooming-fortress-88596.herokuapp.com/notes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Successfully create your note, scroll down and show this");
                    reset();
                }
            })


    };
    return (
        <div>
            <div className='text-center mt-5'>
                <div className='flex justify-center mb-2 text-green-600 text-4xl'>
                    <BsCheckLg />
                </div>
                <h2 className='uppercase text-2xl font-bold my-2'>create Note</h2>
                <p>Fill out this form to create a note</p>
            </div>
            <div className='flex justify-center mt-10'>
                <div className='w-2/6'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className='font-bold text-sm pr-[600px]' htmlFor="name">Title/Name</label> <br />
                            <input className='w-full p-2 border border-slate-500 rounded-sm' type="text" name="name" placeholder='Type Your Name' required {...register("name")} />
                        </div>

                        <div className='my-5'>
                            <label className='text-sm font-bold pr-[500px]' htmlFor="role">Role</label> <br />
                            <select {...register("role")} className='w-full p-2 border border-slate-500 rounded-sm bg-white' name="role" >
                                <option value="Chief executive officer (CEO)">Chief executive officer (CEO)</option>
                                <option value="Chief operating officer (COO)">Chief operating officer (COO)</option>
                                <option value="Chief financial officer or controller (CFO)">Chief financial officer or controller (CFO)</option>
                                <option value="Chief marketing officer (CMO)">Chief marketing officer (CMO)</option>
                                <option value="Chief technology officer (CTO)">Chief technology officer (CTO)</option>
                                <option value="Executive assistants">Executive assistants</option>
                                <option value="Development officer">Development officer</option>
                                <option value="Technology expert">Technology expert</option>
                                <option value="HR Manager">HR Manager</option>
                                <option value="Product Manager">Product Manager</option>
                                <option value="Product Analist">Product Analist</option>

                            </select>
                        </div>

                        <div className='mb-5'>
                            <label className='text-sm font-bold pr-[500px]' htmlFor="date">Date</label> <br />
                            <input className=' p-2 border w-full border-slate-500 rounded-sm' type="date" name="date" required {...register("date")} />
                        </div>

                        <div>
                            <label className='text-sm font-bold pr-[440px]' htmlFor="noteDes">Description</label> <br />
                            <textarea className='border p-2 border-slate-500 rounded-sm w-full' name="noteDes" cols="56" rows="6" placeholder='Write here...' {...register("noteDes")}></textarea>
                        </div>
                        <div className='flex justify-center my-5'>
                            <input type="submit" value='Create One' className='p-2 font-bold bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700  cursor-pointer' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNotes;