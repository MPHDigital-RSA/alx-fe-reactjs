import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AddRecipeForm() {

    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [steps, setSteps] = useState('')
    const [errors, setErrors] = useState({
        title: '',
        ingredients: '',
        steps: ''
    })

    const handleSubmit = (e) => {
        // prevent reloading
        e.preventDefault();
        // set errors to empty strings since the inputs are not empty
        setErrors({ title: '', ingredients: '', steps: '' })
        validate();
        console.log("form submitted!")

        setTitle(title);
        setIngredients(ingredients);
        setSteps(steps)

        console.log(title)
        console.log(ingredients)
        console.log(steps)
    }

    const validate = () => {
        // validation for title
        if (title === "") {
            setErrors({ ...errors, title: "title not defined" });
            return;
        }

        // validation for ingredients
        if (ingredients === "") {
            setErrors({ ...errors, ingredients: "ingredients not defined" });
            return;
        }

        // validation for title
        if (steps === "") {
            setErrors({ ...errors, steps: "steps not defined" });
            return;
        }
    }


    return (
        <div className='w-[100%] min-h-[100vh] flex items-center justify-center px-[30px] flex-col gap-3 py-[50px]'>

            <Link to='/' className='bg-[#ACBFA4] text-white rounded-lg py-[10px] px-[20px] hover:bg-black transition cursor-pointer shadow'>Home</Link>

            <form className='w-[100%] max-w-[500px] bg-[#ACBFA4] p-[30px] rounded-xl flex flex-col gap-3' onSubmit={handleSubmit}>

                <input type="text" placeholder='Recipe Title' className='p-3 rounded-md' value={title} onChange={(e) => setTitle(e.target.value)} />
                {errors.title && <div className='text-[18px] text-red-600'> {errors.title} </div>}

                <textarea placeholder='Enter Ingredients' className='p-3 rounded-md' value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
                {errors.ingredients && <div className='text-[18px] text-red-600'> {errors.ingredients} </div>}

                <textarea placeholder='Enter the steps' className='p-3 rounded-md' value={steps} onChange={(e) => setSteps(e.target.value)}></textarea>
                {errors.steps && <div className='text-[18px] text-red-600'> {errors.steps} </div>}

                <button type='submit' className='p-3 rounded-md bg-white text-[#ACBFA4] font-bold hover:bg-black hover:text-white transition'>Add Recipe</button>
            </form>
        </div>
    )
}

export default AddRecipeForm
