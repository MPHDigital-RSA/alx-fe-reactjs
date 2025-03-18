import React from 'react'
import { Link } from 'react-router-dom'

function AddRecipeForm() {



    return (
        <div className='w-[100%] min-h-[100vh] flex items-center justify-center px-[30px] flex-col gap-3 py-[50px]'>

            <Link to='/' className='bg-[#ACBFA4] text-white rounded-lg py-[10px] px-[20px] hover:bg-black transition cursor-pointer shadow'>Home</Link>

            <div className='w-[100%] max-w-[500px] bg-[#ACBFA4] p-[30px] rounded-xl flex flex-col gap-3'>
                <input type="text" placeholder='Recipe Title' className='p-3 rounded-md' />
                <textarea placeholder='Enter Ingredients' className='p-3 rounded-md'></textarea>
                <button type='submit' className='p-3 rounded-md bg-white text-[#ACBFA4] font-bold hover:bg-black hover:text-white transition'>Add Recipe</button>
            </div>
        </div>
    )
}

export default AddRecipeForm
